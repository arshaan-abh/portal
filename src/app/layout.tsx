import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body
        className={`bg-slate-300 font-vazirmatn text-slate-900 ${vazirmatn.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

// TODO list:
// 1. package.json metadata
// 2. stylelint
// 3. stylelint-config-prettier
// 4. self made stuff
