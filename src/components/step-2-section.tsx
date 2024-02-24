import type { FC } from "react";

const Step2Section: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-red text-white">
      <h3 className="text-2xl font-semibold">اطلاعات هویتی</h3>
      <div>ثبت نام</div>
      <div className="grid w-1/2 grid-cols-2 grid-rows-2 gap-4">
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className="rounded-full border border-white bg-transparent p-4 text-start placeholder:text-white"
        />
        <input
          type="email"
          placeholder="ایمیل"
          className="rounded-full border border-white bg-transparent p-4 text-start placeholder:text-white"
        />
        <input
          type="tel"
          placeholder="شماره موبایل"
          className="rounded-full border border-white bg-transparent p-4 text-start placeholder:text-white"
        />
        <input
          type="password"
          placeholder="رمز عبور"
          className="rounded-full border border-white bg-transparent p-4 text-start placeholder:text-white"
        />
      </div>
      <div className="flex flex-col gap-2">
        <a className="rounded-full bg-white px-8 py-4 text-black">
          ایجاد وب سایت
        </a>
        <a className="text-end text-sm text-white">عضو هستم</a>
      </div>
    </div>
  );
};

export default Step2Section;
