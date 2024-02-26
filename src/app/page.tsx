import type { FC } from "react";
import ScrollSnap from "@/components/scroll-snap";
import HeroSection from "@/components/hero-section";
import Step1Section from "@/components/step-1-section";
import Step2Section from "@/components/step-2-section";
import Step3Section from "@/components/step-3-section";

const Home: FC = () => {
  return (
    <ScrollSnap duration={1000} cubicBezier={[0.4, 0, 0.2, 1]}>
      <HeroSection />
      <Step1Section />
      <Step2Section />
      <Step3Section />
    </ScrollSnap>
  );
};

export default Home;
