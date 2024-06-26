"use server";
import "server-only";

import { cookies } from "next/headers";

export const preload = () => {
  // void passwordLessLoginOrRegister();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const passwordLessLoginOrRegister = async (
  prevState: unknown,
  formData: FormData,
) => {
  "use server";
  const cookieStore = cookies();

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_AUTH_HOST +
        "api/Account/PasswordLessLoginOrRegister",
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        cache: "no-store",
        body: JSON.stringify({ mobile: formData.get("mobile") }),
      },
    );
    const reader = response.body?.getReader();
    const decoder = new TextDecoder("utf-8");
    let result = "";
    if (reader)
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, no-constant-condition
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        result += decoder.decode(value);
      }
    const finalRes = JSON.parse(result) as ServerResponse;
    if (finalRes.status === 1) {
      cookieStore.set("mobile", formData.get("mobile")?.toString() ?? "");
      return { message: "کد فرستاده شد، برای مرحله بعد به پایین بروید" };
    } else return { message: "دوباره امتحان کنید" };
  } catch (error) {
    return { message: error as string };
  }
};

interface ServerResponse {
  message: string;
  status: number;
}
