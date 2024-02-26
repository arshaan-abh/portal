import Navbar from "@/components/navbar";
import type { FC } from "react";
import Image from "next/image";
import title from "/public/title.png";
import downSmall from "/public/down-small.png";
import titleBg from "/public/title-bg.png";
import rocket from "/public/rocket.png";
import planets from "/public/planets.png";
import stars from "/public/stars.png";

const HeroSection: FC = () => {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-sky">
      <Navbar />
      <Image
        className="pointer-events-none absolute inset-0 m-auto animate-pulse select-none"
        src={stars}
        alt="ستاره‌ها"
      />
      <Image
        className="pointer-events-none absolute inset-0 m-auto animate-spin-slower select-none"
        src={planets}
        alt="سیاره‌ها"
      />
      <Image
        className="pointer-events-none absolute bottom-0 left-0 animate-rocket select-none"
        src={rocket}
        alt="سفینه"
      />
      <Image
        className="pointer-events-none absolute inset-0 m-auto animate-spin-slow select-none"
        src={titleBg}
        alt="پس زمینه تیتر"
      />
      <div className="absolute inset-0 top-auto flex h-[138px] animate-border items-end justify-center bg-border bg-repeat-x">
        <Image
          src={downSmall}
          alt="به سمت پایین اسکرول کنید"
          className="pointer-events-none mb-4 animate-bounce select-none"
        />
      </div>
      <Image
        className="absolute inset-0 m-auto"
        src={title}
        alt="فقط با ۷ کلیک وب سایت خود را بسازید"
      />
    </section>
  );
};

export default HeroSection;

// TODO add detail images
