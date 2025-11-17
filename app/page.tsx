import BlogPreview from "@/components/BlogPreview";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import CommunityGallery from "@/components/CommunityGallery";
import FounderSection from "@/components/FounderSection";
import Testimonials from "@/components/Testimonials";
import Differentiators from "@/components/ui/Differentiators";
import HomeHero from "@/components/ui/HomeHero";
import ServicesPreview from "@/components/ui/ServicesPreview";
import Three from "@/components/Three";

export default function Home() {
  return (
    <div>
          <HomeHero />
                    <Differentiators />
          <ServicesPreview />
          <CallToAction />
          <FounderSection />
          <Clients />
          <Three />
      <Testimonials />
      <CommunityGallery />
    </div>
  );
}
