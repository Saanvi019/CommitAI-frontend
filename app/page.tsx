import Hero from "@/components/hero";
import FeaturesSection from "@/components/feature";
import HowItWorks from "@/components/HowItWorks";
import CLIDemo from "@/components/CLIDemo";
import CTA from "@/components/cta";


export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <CLIDemo />
      <CTA /> 
    
    </div>
  );
}
