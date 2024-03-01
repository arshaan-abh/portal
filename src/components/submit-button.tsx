"use client";
import HTMLProps from "@/interfaces/html-props";
import type { FC } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton: FC<HTMLProps<HTMLButtonElement>> = ({
  children,
  ...otherProps
}) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" {...otherProps}>
      {pending ? "در حال برسی..." : children}
    </button>
  );
};

export default SubmitButton;
