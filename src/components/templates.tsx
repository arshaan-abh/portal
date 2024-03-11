"use client";
import type { FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import template1 from "/public/template-1.png";
import template2 from "/public/template-2.png";
import template3 from "/public/template-3.png";

const templates = [
  { name: "1", image: template1, link: "" },
  { name: "1", image: template2, link: "" },
  { name: "1", image: template3, link: "" },
];

const Templates: FC = () => {
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
        {templates.map((template, index) => (
          <CarouselItem className="pl-4 sm:basis-1/3" key={index}>
            <Card image={template.image} name={template.name} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Templates;

interface CardProps {
  image: StaticImport;
  name: string;
}

const Card: FC<CardProps> = ({ image, name }) => {
  return <Image className="w-full" src={image} alt={name} />;
};

// TODO implement carousel item's design
