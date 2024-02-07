import type { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <div className="flex h-96 items-center justify-center bg-slate-900 p-8 text-center text-4xl font-bold text-slate-50">
        با ۷ کلیک ساده وبسایت بسازید
      </div>
      <div className="m-8 flex justify-center">
        <div className="w-96 rounded-2xl border border-slate-400 bg-slate-50 p-8">
          <div>محتوای فرم سایت‌ساز</div>
        </div>
      </div>
      <div className="text-center text-slate-400">حقوق محفوظ است</div>
    </>
  );
};

export default Home;
