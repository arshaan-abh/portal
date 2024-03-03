"use server";
import "server-only";
import { cookies } from "next/headers";
// import { AuthService } from "./service";

export const editUserProfile = async (
  prevState: unknown,
  formData: FormData,
) => {
  "use server";
  const cookieStore = cookies();
  // const authService = new AuthService();
  // const token = await authService.getToken();

  try {
    const response = await fetch(
      "https://idp.iportals.ir/api/User/EditUserProfile",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: cookieStore.get("token")?.value ?? "",
        },
        method: "POST",
        cache: "no-store",
        body: JSON.stringify({
          // token,
          fullName: formData.get("fullName"),
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
      return { message: "کد تایید شد، برای مرحله بعد به پایین بروید" };
    } else return { message: "دوباره امتحان کنید" };
  } catch (error) {
    console.log(error);
    // return { message: error as string };
  }
};

interface ServerResponse {
  data: Data;
  message: string;
  status: number;
}

interface Data {
  accessToken: string;
  refreshToken: string;
  expiresTime: number;
  tokenType: string;
  scope: string;
}
