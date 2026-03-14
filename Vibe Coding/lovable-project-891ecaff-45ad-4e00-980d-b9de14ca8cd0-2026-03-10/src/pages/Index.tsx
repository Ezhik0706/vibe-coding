import SiteHeader from "@/components/landing/SiteHeader";
import HeroSection from "@/components/landing/HeroSection";
import SegmentsSection from "@/components/landing/SegmentsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import RoadmapSection from "@/components/landing/RoadmapSection";
import SiteFooter from "@/components/landing/SiteFooter";

const Index = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <HeroSection />
    <SegmentsSection />
    <HowItWorksSection />
    <FeaturesSection />
    <UseCasesSection />
    <RoadmapSection />
    <SiteFooter />
  </div>
);

export default Index;
