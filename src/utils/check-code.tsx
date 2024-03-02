"use server";
import "server-only";
import { cookies } from "next/headers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const confirmPasswordLessLogin = async (
  prevState: unknown,
  formData: FormData,
) => {
  "use server";
  const cookieStore = cookies();
  try {
    const response = await fetch(
      "https://idp.iportals.ir/api/Account/ConfirmPasswordLessLogin",
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        cache: "no-store",
        body: JSON.stringify({
          mobile: cookieStore.get("mobile")?.value ?? "",
          code: formData.get("code"),
        }),
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
      cookieStore.set(
        "token",
        `${finalRes.data.tokenType} ${finalRes.data.accessToken}`,
      );
      return { message: "کد تایید شد، برای مرحله بعد به پایین بروید" };
    } else return { message: "دوباره امتحان کنید" };
  } catch (error) {
    return { message: error as string };
  }
};

export interface ServerResponse {
  data: Data;
  message: string;
  status: number;
}

export interface Data {
  accessToken: string;
  refreshToken: string;
  expiresTime: number;
  tokenType: string;
  scope: string;
}
