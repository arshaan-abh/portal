import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="fixed z-10 flex w-main max-w-full justify-between gap-8 p-4 text-white">
      <div className="flex items-center gap-8">
        <a>قالب‌ها</a>
        <a>امکانات</a>
        <a>نمونه‌ها</a>
        <a>راهکارها</a>
        <a>راهنما</a>
        <a>شرکت</a>
      </div>
      <div className="flex items-center gap-4">
        <a className="rounded-full bg-red px-4 py-2">ورود</a>
        <a>ثبت‌نام</a>
      </div>
    </div>
  );
};

export default Navbar;
