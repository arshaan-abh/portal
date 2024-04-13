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
      <a
        className="rounded-full bg-red px-4 py-2 text-sm text-white"
        href="https://admin.iportals.ir/"
      >
        رفتن به داشبورد
      </a>
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
