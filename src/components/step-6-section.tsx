import type { FC } from "react";
import Image from "next/image";
import down from "/public/down.png";
import six from "/public/six.png";
import triangle from "/public/triangle.png";
import downSmall from "/public/down-small.png";

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
            <Card {...card} key={index} />
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

interface CardProps {
  title: string;
  description: string;
  content: string;
}

export const Card: FC<CardProps> = ({ title, content, description }) => {
  return (
    <div className="flex basis-1/3 flex-col items-center bg-gray-200 text-center">
      <div className="w-full bg-red px-4 py-2 text-lg font-medium text-white">
        {title}
      </div>
      <Image
        className="pointer-events-none mb-4 select-none"
        src={triangle}
        alt="پایین"
      />
      <div className="mb-4 font-medium">{description}</div>
      <div className="mb-8">{content}</div>
      <a className="mb-4 rounded-full bg-red px-4 py-2 text-sm text-white">
        تست رایگان
      </a>
    </div>
  );
};
