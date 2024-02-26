import type { FC } from "react";
import ScrollSnap from "@/components/scroll-snap";
import HeroSection from "@/components/hero-section";
import Step1Section from "@/components/step-1-section";
import Step2Section from "@/components/step-2-section";
import Step3Section from "@/components/step-3-section";
import Step4Section from "@/components/step-4-section";
import Step5Section from "@/components/step-5-section";
import Step6Section from "@/components/step-6-section";
import Step7Section from "@/components/step-7-section";
import Footer from "@/components/footer";

const Home: FC = () => {
  return (
    <ScrollSnap duration={1000} cubicBezier={[0.4, 0, 0.2, 1]}>
      <HeroSection />
      <Step1Section />
      <Step2Section />
      <Step3Section />
      <Step4Section />
      <Step5Section />
      <Step6Section />
      <Step7Section />
      <Footer />
    </ScrollSnap>
  );
};

export default Home;
