import type { FC } from "react";
import Image from "next/image";
import one from "/public/one.png";
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
    </div>
  );
};

export default Step1Section;
