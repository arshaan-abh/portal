"use server";
import "server-only";

export const preload = () => {
  // void passwordLessLoginOrRegister();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const passwordLessLoginOrRegister = async (
  prevState: unknown,
  formData: FormData,
) => {
  "use server";
  try {
    const response = await fetch(
      "https://idp.iportals.ir/api/Account/PasswordLessLoginOrRegister",
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
    if (finalRes.status === 1)
      return { message: "کد فرستاده شد، برای مرحله بعد به پایین بروید" };
    else return { message: "دوباره امتحان کنید" };
  } catch (error) {
    console.log(error);
    return { message: error as string };
  }
};

interface ServerResponse {
  message: string;
  status: number;
}
