"use client";
import type { FC } from "react";
import Image from "next/image";
import downSmall from "/public/down-small.png";
import { useFormState } from "react-dom";
import { editUserProfile } from "@/utils/edit-profile";
import SubmitButton from "./submit-button";

const initialState = {
  message: "",
};

const Step2Section: FC = () => {
  const [state, formAction] = useFormState(editUserProfile, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col items-center gap-4 bg-red text-white"
    >
      <div className="grow" />
      <h3 className="text-2xl font-semibold">اطلاعات هویتی</h3>
      <div>ثبت نام</div>
      <div className="grid w-3/4 grid-rows-2 gap-4 md:grid-cols-2 lg:w-1/2">
        <input
          name="fullName"
          type="text"
          placeholder="نام و نام خانوادگی"
          className="rounded-full border border-white bg-transparent p-4 text-start placeholder:text-white"
        />
        <input
          name="email"
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
          name="password"
          type="password"
          placeholder="رمز عبور"
          className="rounded-full border border-white bg-transparent p-4 text-start placeholder:text-white"
        />
      </div>
      <div className="flex flex-col gap-2">
        <SubmitButton className="rounded-full bg-white px-8 py-4 text-black">
          {state.message !== "" && state.message
            ? state.message
            : "ایجاد وب سایت"}
        </SubmitButton>
        <a className="text-end text-sm text-white">عضو هستم</a>
      </div>
      <div className="grow" />
      <Image
        src={downSmall}
        alt="به سمت پایین اسکرول کنید"
        className="pointer-events-none mb-4 animate-bounce select-none"
      />
    </form>
  );
};

export default Step2Section;
