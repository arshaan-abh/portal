import type { FC } from "react";
import Image from "next/image";
import down from "/public/down.png";
import one from "/public/one.png";
import two from "/public/two.png";
import downSmall from "/public/down-small.png";
import Step from "@/components/step";

const Step1Section: FC = () => {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="flex w-full grow flex-col items-center justify-center gap-2 bg-red">
        <Step
          image={
            <Image
              src={one}
              className="pointer-events-none select-none"
              alt="مرحله اول"
            />
          }
          title="ورود به سیستم"
          placeholder="شماره موبایل خود را وارد کنید"
          inputType="tel"
          color="light"
          buttonText="دریافت کد"
        />
      </div>
      <Image
        src={down}
        alt="پایین"
        className="pointer-events-none select-none"
      />
      <div className="flex w-full grow flex-col items-center justify-center gap-2">
        <Step
          image={
            <Image
              src={two}
              className="pointer-events-none select-none"
              alt="مرحله دوم"
            />
          }
          placeholder="کد را وارد کنید"
          inputType="text"
          color="dark"
          buttonText="ورود"
        />
      </div>
      <div className="pointer-events-none flex h-[138px] w-full animate-border select-none items-end justify-center bg-border bg-repeat-x">
        <Image
          src={downSmall}
          alt="به سمت پایین اسکرول کنید"
          className="pointer-events-none mb-4 animate-bounce select-none"
        />
      </div>
    </div>
  );
};

export default Step1Section;
