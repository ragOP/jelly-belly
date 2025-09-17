import React from 'react';
import Header from '../components/Header';
import Hero from '../components/home/Hero';
import ProblemSection from '../components/home/ProblemSection';
import SolutionSection from '../components/home/SolutionSection';
import SocialProofSection from '../components/home/SocialProofSection';
import ProductShowcaseSection from '../components/home/ProductShowcaseSection';
import ComparisonChartSection from '../components/home/ComparisonChartSection';
import SafetyHighlightSection from '../components/home/SafetyHighlightSection';
import LifestyleSection from '../components/home/LifestyleSection';
import FAQSection from '../components/home/FAQSection';
import ClosingCTASection from '../components/home/ClosingCTASection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <SocialProofSection />
        <ProductShowcaseSection />
        <ComparisonChartSection />
        <SafetyHighlightSection />
        <LifestyleSection />
        <FAQSection />
        {/* <ClosingCTASection /> */}
      </main>
    </div>
  );
};

export default Home; 