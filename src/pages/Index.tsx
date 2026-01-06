import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { HowWeWork } from '@/components/HowWeWork';
import { CertificationBand } from '@/components/CertificationBand';
import { ServicesSection } from '@/components/ServicesSection';
import { IndustriesBand } from '@/components/IndustriesBand';
import { MaterialsSection } from '@/components/MaterialsSection';
import { WhyMasTechnic } from '@/components/WhyMasTechnic';
import { CapabilitiesSection } from '@/components/CapabilitiesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { StatsSection } from '@/components/StatsSection';
import { FaqBlogSection } from '@/components/FaqBlogSection';
import { QuoteSection } from '@/components/QuoteSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowWeWork />
        <CertificationBand />
        <ServicesSection />
        <IndustriesBand />
        <MaterialsSection />
        <WhyMasTechnic />
        <CapabilitiesSection />
        <TestimonialsSection />
        <StatsSection />
        <FaqBlogSection />
        <QuoteSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
