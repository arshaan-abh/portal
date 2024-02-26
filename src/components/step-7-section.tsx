import type { FC } from "react";
import Image from "next/image";
import downSmall from "/public/down-small.png";
import seven from "/public/seven.png";

const Step7Section: FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-gray-100">
      <div className="grow" />
      <Image src={seven} alt="مرحله هفتم" />
      <h3 className="mb-2 text-2xl font-semibold">پرداخت</h3>
      <div className="grow" />
      <Image
        src={downSmall}
        alt="به سمت پایین اسکرول کنید"
        className="pointer-events-none mb-4 animate-bounce select-none"
      />
    </div>
  );
};

export default Step7Section;

// TODO implement border design
