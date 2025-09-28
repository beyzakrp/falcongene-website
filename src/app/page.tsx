import Hero from "./components/Hero";
import MissionSection from "./components/MissionSection";
import StatsSection from "./components/StatsSection";
import Steps from "./components/Steps";
import TestsGrid from "./components/TestsGrid";
import ReportPreview from "./components/ReportPreview";
import Pricing from "./components/Pricing";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <StatsSection />
     {/* <Steps /> */}
      <TestsGrid />
      <ReportPreview />
      <Pricing />
      <CTASection />
    </>
  );
}


