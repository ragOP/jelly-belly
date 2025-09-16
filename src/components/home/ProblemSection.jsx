import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-8 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content - Inside Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-red-100">
            <div className="space-y-8">
              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Your Cute Hair Clip Could Be{' '}
                <span className="text-red-500 font-lora italic">Harming You</span>
              </h2>
              
              {/* Problem Points */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-lg">●</span>
                  </div>
                  <p className="text-lg text-gray-700 font-lora">
                    <span className="font-bold text-red-600">Regular clips snap in a week</span> → wasted money.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-lg">●</span>
                  </div>
                  <p className="text-lg text-gray-700 font-lora">
                    <span className="font-bold text-red-600">Sharp edges cause scalp pain & headaches</span> after hours.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-lg">●</span>
                  </div>
                  <p className="text-lg text-gray-700 font-lora">
                    <span className="font-bold text-red-600">In a car accident, a rigid clip can even pierce your head</span> (real case: NYPost 2023).
                  </p>
                </div>
              </div>
              
              {/* Warning Badge */}
              <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-700 font-bold font-lora italic">Real safety concerns</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Visual Comparison */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Broken Clip */}
              <div className="text-center space-y-4">
                <div className="bg-gray-100 rounded-2xl shadow-lg">
                  <img 
                    src="/broken-clip.png" 
                    alt="Broken hair clip" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-red-50 rounded-full px-4 py-2">
                  <span className="text-red-600 font-bold font-lora">❌ Breaks Easily</span>
                </div>
              </div>
              
              {/* JellyClip */}
              <div className="text-center space-y-4">
                <div className="bg-gradient-to-br from-[#ffe1e7] to-[#fff5f7] rounded-2xlshadow-lg">
                  <img 
                    src="/jelly-clip-bending.png" 
                    alt="JellyClip bending safely" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-green-50 rounded-full px-4 py-2">
                  <span className="text-green-600 font-bold font-lora">✅ Bends Safely</span>
                </div>
              </div>
            </div>
            
            {/* Comparison Arrow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-white rounded-full p-3 shadow-lg border-2 border-[#ffabbb]">
                <span className="text-2xl">→</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;