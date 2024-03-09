import type { FC } from "react";
import Image from "next/image";
import down from "/public/down.png";
import six from "/public/six.png";
import downSmall from "/public/down-small.png";
import { Card } from "./card";

const cards = [
  {
    title: "مبتدی",
    description: "۶۰ هزار تومان / ماهانه",
    content: "دوره پرداخت یک ساله و به مبلغ ۵۷۶,۰۰۰",
  },
  {
    title: "استاندارد",
    description: "۲۰۸ هزار تومان / ماهانه",
    content: "دوره پرداخت یک ساله و به مبلغ ۲,۴۹۶,۰۰۰",
  },
  {
    title: "پیشرفته",
    description: "۴۹۶ هزار تومان / ماهانه",
    content: "دوره پرداخت یک ساله و به مبلغ ۵,۹۵۲,۰۰۰",
  },
];

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
        <div className="flex w-1/2 gap-4">
          {cards.map((card, index) => (
            <Card id={index} {...card} key={index} />
          ))}
        </div>
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
