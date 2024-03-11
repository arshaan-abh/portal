"use client";
import Autoplay from "embla-carousel-autoplay";
import type { FC } from "react";
import { Card } from "./card";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";

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

const Panels: FC = () => {
  return (
    <Carousel
      className="px-8"
      style={{ direction: "ltr" }}
      opts={{
        align: "center",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="-ml-4">
        {cards.map((card, index) => (
          <CarouselItem className="pl-4 sm:basis-1/3" key={index}>
            <Card id={index} {...card} key={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Panels;
