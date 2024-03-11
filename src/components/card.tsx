"use client";
import { FC } from "react";
import triangle from "/public/triangle.png";
import Image from "next/image";
import SubmitButton from "./submit-button";
import { useFormState } from "react-dom";
import { addPortal } from "@/utils/add-portal";

interface CardProps {
  title: string;
  description: string;
  content: string;
  id: number;
}

const initialState = {
  message: "",
};

export const Card: FC<CardProps> = ({ title, content, description, id }) => {
  const [state, formAction] = useFormState(addPortal, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col items-center bg-gray-200 text-center"
    >
      <div className="w-full bg-red px-4 py-2 text-lg font-medium text-white">
        {title}
      </div>
      <Image
        className="pointer-events-none mb-4 select-none"
        src={triangle}
        alt="پایین"
      />
      <div className="mb-4 px-4 font-medium">{description}</div>
      <div className="mb-8 px-4">{content}</div>
      <SubmitButton className="mb-4 rounded-full bg-red px-4 py-2 text-sm text-white">
        {state.message !== "" && state.message ? state.message : "تست رایگان"}
      </SubmitButton>
      <input type="hidden" name="planId" value={id} />
    </form>
  );
};
