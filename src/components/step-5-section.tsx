import type { FC } from "react";
import Image from "next/image";
import five from "/public/five.png";
import downSmall from "/public/down-small.png";

const Step5Section: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pointer-events-none h-[207px] w-full animate-border select-none bg-gray-100 bg-border bg-repeat-x" />
      <div className="flex w-full grow flex-col items-center gap-4 bg-red">
        <Image
          src={five}
          className="pointer-events-none select-none"
          alt="مرحله دوم"
        />
        <h3 className="mb-4 text-2xl font-semibold text-white">انتخاب دامنه</h3>
        <div className="flex w-1/4 flex-col gap-4">
          <input
            type="url"
            placeholder="نام دامنه"
            className="rounded-full p-4 text-black placeholder:text-neutral-500"
          />
          <a className="rounded-full border border-white p-4 text-center text-white">
            مشاهده دامنه
          </a>
        </div>
        <div className="grow" />
        <Image
          src={downSmall}
          alt="به سمت پایین اسکرول کنید"
          className="pointer-events-none mb-4 animate-bounce select-none"
        />
      </div>
    </div>
  );
};

export default Step5Section;
