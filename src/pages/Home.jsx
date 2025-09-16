import React from 'react';
import Header from '../components/Header';
import Hero from '../components/home/Hero';
import ProblemSection from '../components/home/ProblemSection';
import SolutionSection from '../components/home/SolutionSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className='bg-gradient-to-r from-[#ffe1e7] to-[#fff5f7]'>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        {/* Future sections can be added here */}
      </main>
    </div>
  );
};

export default Home; 