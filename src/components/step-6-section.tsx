import type { FC } from "react";
import Image from "next/image";
import down from "/public/down.png";
import six from "/public/six.png";
import downSmall from "/public/down-small.png";
import Panels from "./panels";

const Step6Section: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[4.5rem] w-full bg-red" />
      <Image
        src={down}
        alt="پایین"
        className="pointer-events-none select-none"
      />
      <div className="grow" />
      <div className="flex w-full flex-col items-center gap-4">
        <Image src={six} alt="مرحله ششم" />
        <h3 className="mb-4 text-2xl font-semibold">پنل پرداخت</h3>
        <Panels />
      </div>
      <div className="grow" />
      <Image
        src={downSmall}
        alt="به سمت پایین اسکرول کنید"
        className="pointer-events-none mb-4 animate-bounce select-none"
      />
    </div>
  );
};

export default Step6Section;
