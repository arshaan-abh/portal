import type { FC } from "react";
import Image from "next/image";
import downSmall from "/public/down-small.png";
import three from "/public/three.png";
import Templates from "./templates";

const Step3Section: FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="pointer-events-none h-[138px] w-full animate-border-reverse select-none bg-border-reverse bg-repeat-x" />
      <div className="grow" />
      <Image src={three} alt="مرحله سوم" />
      <h3 className="mb-2 text-2xl font-semibold">انتخاب قالب</h3>
      <Templates />
      <div className="grow" />
      <Image
        src={downSmall}
        alt="به سمت پایین اسکرول کنید"
        className="pointer-events-none mb-4 animate-bounce select-none"
      />
    </div>
  );
};

export default Step3Section;
