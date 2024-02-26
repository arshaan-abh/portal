import type { FC } from "react";
import Image from "next/image";
import logoFooter from "/public/logo-footer.png";
import planets from "/public/planets.png";
import stars from "/public/stars.png";

const Footer: FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center overflow-hidden bg-sky">
      <div className="z-10 flex w-main max-w-full justify-center gap-8 p-4 text-white">
        <a>قالب‌ها</a>
        <a>امکانات</a>
        <a>نمونه‌ها</a>
        <a>راهکارها</a>
        <a>راهنما</a>
        <a>شرکت</a>
      </div>
      <div className="grow" />
      <Image src={logoFooter} alt="IT PORTAL" />
      <div className="grow" />
      <Image
        className="pointer-events-none absolute inset-0 m-auto animate-pulse select-none"
        src={stars}
        alt="ستاره‌ها"
      />
      <Image
        className="pointer-events-none absolute inset-0 m-auto animate-spin-slower select-none"
        src={planets}
        alt="سیاره‌ها"
      />
    </div>
  );
};

export default Footer;
