"use server";
import "server-only";
import { cookies } from "next/headers";
// import { AuthService } from "./service";

export const addPortal = async (prevState: unknown, formData: FormData) => {
  "use server";
  const cookieStore = cookies();
  // const authService = new AuthService();
  // const token = await authService.getToken();

  try {
    const response = await fetch(
      "https://api.iportals.ir/" + "portal/api/Portal/AddPortal",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: cookieStore.get("token")?.value ?? "",
        },
        method: "POST",
        cache: "no-store",
        body: JSON.stringify({
          serviceName: "news",
          serviceId: "1",
          domain: {
            domain: cookieStore.get("domain")?.value ?? "",
            challengeType: "1",
          },
          templateName: "قالب 1",
          templateId: "1",
          planId: formData.get("planId"),
          reagentCode: "",
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
    console.log(finalRes);
    if (finalRes.status === 1) {
      return { message: "اطلاعات ثبت شدند" };
    } else
      return {
        message:
          finalRes.message === "" ? "دوباره امتحان کنید" : finalRes.message,
      };
  } catch (error) {
    console.log(error);
    return { message: "دوباره امتحان کنید" };
  }
};

interface ServerResponse {
  data: null;
  message: string;
  status: number;
}
