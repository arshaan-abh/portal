import type { FC } from "react";
import Image from "next/image";
import downSmall from "/public/down-small.png";
import four from "/public/four.png";

const Step4Section: FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-gray-100">
      <div className="grow" />
      <Image src={four} alt="مرحله چهارم" />
      <h3 className="mb-2 text-2xl font-semibold">تنظیمات قالب</h3>
      <div className="grow" />
      <Image
        src={downSmall}
        alt="به سمت پایین اسکرول کنید"
        className="pointer-events-none mb-4 animate-bounce select-none"
      />
    </div>
  );
};

export default Step4Section;

// TODO implement border design
