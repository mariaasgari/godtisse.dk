import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import {
  UnderstandingSection,
  SolutionSection,
  ViciousCircleSection,
  PreventionSection,
  FAQSection,
  ReferencesSection,
} from '@/components/sections';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <UnderstandingSection />
      <SolutionSection />
      <ViciousCircleSection />
      <PreventionSection />
      <FAQSection />
      <ReferencesSection />
      <Footer />
    </div>
  );
};

export default Index;
