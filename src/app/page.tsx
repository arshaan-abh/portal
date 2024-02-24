import type { FC } from "react";
import ScrollSnap from "@src/components/scroll-snap";
import HeroSection from "@src/components/hero-section";
import Step1Section from "@src/components/step-1-section";
import Step2Section from "@src/components/step-2-section";

const Home: FC = () => {
  return (
    <ScrollSnap duration={1000} cubicBezier={[0.4, 0, 0.2, 1]}>
      <HeroSection />
      <Step1Section />
      <Step2Section />
    </ScrollSnap>
  );
};

export default Home;
