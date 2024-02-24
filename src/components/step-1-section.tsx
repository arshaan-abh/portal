import type { FC, HTMLInputTypeAttribute, ReactNode } from "react";
import Image from "next/image";
import down from "/public/down.png";
import one from "/public/one.png";
import two from "/public/two.png";

const Step1Section: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full grow flex-col items-center justify-center gap-2 bg-red">
        <Step
          image={<Image src={one} alt="مرحله اول" />}
          title="ورود به سیستم"
          placeholder="شماره موبایل خود را وارد کنید"
          inputType="tel"
          color="light"
          buttonText="دریافت کد"
        />
      </div>
      <Image src={down} alt="پایین" />
      <div className="flex w-full grow flex-col items-center justify-center gap-2">
        <Step
          image={<Image src={two} alt="مرحله دوم" />}
          placeholder="کد را وارد کنید"
          inputType="text"
          color="dark"
          buttonText="ورود"
        />
      </div>
      <div className="pointer-events-none h-[139px] w-full animate-border select-none bg-border bg-repeat-x" />
    </div>
  );
};

export default Step1Section;

interface StepProps {
  image: ReactNode;
  title?: string;
  placeholder: string;
  inputType: HTMLInputTypeAttribute;
  color: "light" | "dark";
  buttonText: string;
}

const Step: FC<StepProps> = ({
  image,
  title,
  buttonText,
  color,
  inputType,
  placeholder,
}) => {
  return (
    <>
      {image}
      <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
      <div className="flex w-1/4 flex-col gap-2">
        <input
          type={inputType}
          placeholder={placeholder}
          className={`rounded-full p-2 text-center text-black placeholder:text-neutral-500 ${
            color === "dark" && "bg-gray-100"
          }`}
        />
        <div className="flex w-full justify-end">
          <a
            className={`border-b text-sm ${
              color === "dark"
                ? "border-neutral-500 text-neutral-500"
                : "border-white text-white"
            }`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </>
  );
};
