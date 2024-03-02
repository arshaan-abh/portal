"use client";
import { ReactNode, HTMLInputTypeAttribute, FC } from "react";
import SubmitButton from "./submit-button";
import { useFormState } from "react-dom";
import { passwordLessLoginOrRegister } from "@/utils/login";
import { confirmPasswordLessLogin } from "@/utils/check-code";

interface StepProps {
  image: ReactNode;
  title?: string;
  placeholder: string;
  inputType: HTMLInputTypeAttribute;
  color: "light" | "dark";
  buttonText: string;
  stepNumber: number;
}
const initialState = {
  message: "",
};
const Step: FC<StepProps> = ({
  image,
  title,
  buttonText,
  color,
  inputType,
  placeholder,
  stepNumber,
}) => {
  const action =
    stepNumber === 1 ? passwordLessLoginOrRegister : confirmPasswordLessLogin;
  const inputName = stepNumber === 1 ? "mobile" : "code";
  const [state, formAction] = useFormState(action, initialState);

  return (
    <>
      {image}
      <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
      <form
        className="flex w-1/4 flex-col gap-2"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        action={formAction}
      >
        <input
          name={inputName}
          type={inputType}
          placeholder={placeholder}
          className={`rounded-full p-2 text-center text-black placeholder:text-neutral-500 ${
            color === "dark" && "bg-gray-100"
          }`}
        />
        <div className="flex w-full justify-end">
          <SubmitButton
            className={`border-b text-sm ${
              color === "dark"
                ? "border-neutral-500 text-neutral-500"
                : "border-white text-white"
            }`}
          >
            {state.message !== "" ? state.message : buttonText}
          </SubmitButton>
        </div>
        <p></p>
      </form>
    </>
  );
};

export default Step;
