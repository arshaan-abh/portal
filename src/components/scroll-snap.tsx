"use client";
import {
  type FC,
  useRef,
  useState,
  useCallback,
  useEffect,
  Children,
} from "react";
import HTMLProps from "../interfaces/html-props";
import useLocalStorageState from "../hooks/use-local-storage-state";
import cubicBezierInterpolation from "../utilities/cubic-bezier-interpolation";
import supportsTouch from "../utilities/supports-touch";
import defaultListenerOptions from "../utilities/default-listener-options";
import { raf, caf } from "../utilities/animation-frame";
import bezierEasing from "bezier-easing";
import "./scroll-snap.css";

interface ScrollSnapProps extends HTMLProps<HTMLDivElement> {
  duration: number;
  cubicBezier: [number, number, number, number];
}

const ScrollSnap: FC<ScrollSnapProps> = (props) => {
  const { duration, cubicBezier, className, ...otherProps } = props;

  const isClient = typeof window === "object";

  const [windowHeight, setWindowHeight] = useState<number | null>(null);
  const [index, setIndex] = useLocalStorageState("index", 0);

  const firstTimeStamp = useRef<number | null>(null);
  const previousTimeStamp = useRef<number | null>(null);
  const midAnimation = useRef(false);
  const animationFrame = useRef<number | null>(null);
  const cubicBeziers = useRef<number[] | null>(null);
  const touchStartY = useRef<number | null>(null);

  const animate = useCallback(
    (timeStamp: number, next: boolean) => {
      if (!windowHeight) return;
      if (!cubicBeziers.current) return;

      midAnimation.current = true;
      if (firstTimeStamp.current === null) firstTimeStamp.current = timeStamp;
      const elapsed = timeStamp - firstTimeStamp.current;

      if (elapsed < duration) {
        if (previousTimeStamp.current !== timeStamp) {
          const top =
            (next ? 1 : -1) * cubicBeziers.current[Math.floor(elapsed)] +
            index * windowHeight; // TODO should round?
          scrollTo({ top, behavior: "instant" }); // TODO use scrollBy
          previousTimeStamp.current = timeStamp;
        }
        animationFrame.current = raf((timeStamp) => {
          animate(timeStamp, next);
        });
      } else {
        if (animationFrame.current) caf(animationFrame.current);
        if (next) setIndex({ type: "SET", payload: index + 1 });
        else setIndex({ type: "SET", payload: index - 1 });
        firstTimeStamp.current = null;
        previousTimeStamp.current = null;
        midAnimation.current = false;
        animationFrame.current = null;
        touchStartY.current = null; // ?
      }
    },
    [duration, index, setIndex, windowHeight],
  );

  const resizeHandler = useCallback(() => {
    setWindowHeight(innerHeight); // TODO what if has horizontal scrollbar

    scrollTo({
      top: index * innerHeight, // TODO should round?
      behavior: "instant",
    });
  }, [index]);

  useEffect(() => {
    resizeHandler();
    addEventListener("resize", resizeHandler, defaultListenerOptions);
    return () => {
      removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  const scroll = useCallback(
    (next: boolean) => {
      if (midAnimation.current) return;

      if (next && index < Children.count(props.children) - 1)
        animationFrame.current = raf((timeStamp) => {
          animate(timeStamp, true);
        });
      else if (!next && index > 0)
        animationFrame.current = raf((timeStamp) => {
          animate(timeStamp, false);
        });
    },
    [animate, index, props.children],
  );

  const wheelHandler = useCallback(
    (event: WheelEvent) => {
      scroll(event.deltaY > 0);
    },
    [scroll],
  );

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    addEventListener("wheel", wheelHandler, defaultListenerOptions); // TODO make compatible: wheel, onWheel, onMouseWheel, DOMMouseScroll, ...
    return () => {
      removeEventListener("wheel", wheelHandler);
    };
  }, [wheelHandler]);

  const pointerDownHandler = useCallback((event: PointerEvent) => {
    touchStartY.current = event.clientY;
  }, []);

  const pointerMoveHandler = useCallback(
    (event: PointerEvent) => {
      if (touchStartY.current === null) return;

      scroll(event.clientY < touchStartY.current);
    },
    [scroll],
  );

  useEffect(() => {
    if (!isClient) return;
    if (!supportsTouch) return;

    addEventListener("pointerdown", pointerDownHandler, defaultListenerOptions);
    addEventListener("pointermove", pointerMoveHandler, defaultListenerOptions);
    return () => {
      removeEventListener("pointerdown", pointerDownHandler);
      removeEventListener("pointermove", pointerMoveHandler);
    };
  }, [isClient, pointerDownHandler, pointerMoveHandler]);

  useEffect(() => {
    if (!windowHeight) return;

    cubicBeziers.current = cubicBezierInterpolation({
      cubicBezier: bezierEasing(...cubicBezier),
      duration,
      startNumber: 0,
      endNumber: windowHeight,
    });
  }, [cubicBezier, duration, windowHeight]);

  return <div className={`*:h-svh ${className}`} {...otherProps} />; // TODO make svh compatible
};

export default ScrollSnap;

// TODO list:
// what if user resizes mid animation (+ this kind of twisted stuff)
// scroll multiple sections at once
// add scrollbar later
// pixel perfect
// should round?
// add features
// innerHeight instead of windowHeight?
