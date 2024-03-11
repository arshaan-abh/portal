import type { FC } from "react";
import Bars from "./icons";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from "./sheet";

const Navbar: FC = () => {
  return (
    <Sheet>
      <div className="fixed z-20 flex w-main max-w-full justify-between gap-8 p-4 text-white sm:z-10">
        <div className="hidden items-center gap-8 sm:flex">
          <a>قالب‌ها</a>
          <a>امکانات</a>
          <a>نمونه‌ها</a>
          <a>راهکارها</a>
          <a>راهنما</a>
          <a>شرکت</a>
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          <a className="rounded-full bg-red px-4 py-2">ورود</a>
          <a>ثبت‌نام</a>
        </div>
        <div className="flex sm:hidden">
          <SheetTrigger>
            <Bars />
          </SheetTrigger>
        </div>
      </div>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>منو</SheetTitle>
          <SheetDescription className="flex flex-col gap-2">
            <a>قالب‌ها</a>
            <a>امکانات</a>
            <a>نمونه‌ها</a>
            <a>راهکارها</a>
            <a>راهنما</a>
            <a>شرکت</a>
            <a className="rounded-full border border-red px-4 py-2">ثبت‌نام</a>
            <a className="rounded-full border border-red bg-red px-4 py-2 text-white">
              ورود
            </a>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
