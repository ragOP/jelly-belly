import React from 'react';
import { Heart, Sparkles, CheckCircle, Palette, Hand, Shield } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="relative py-8 sm:py-24 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7] overflow-hidden">
      {/* Floating Gradient Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-[#ff8a9f] opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 px-4 ">
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight ">
              Meet <span className="text-[#ff8a9f] font-lora italic">JellyClip</span>
              <span className="inline-block align-middle ml-2 animate-bounce"><Heart className="inline text-[#ff8a9f] w-8 h-8" fill="#ff8a9f" /></span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 font-lora max-w-xl">
              The <span className="font-bold text-[#ff8a9f]">unbreakable</span>, <span className="font-bold text-[#ff8a9f]">gentle</span>, and <span className="font-bold text-[#ff8a9f]">stylish</span> hair clip that bends, never snaps — made for all-day comfort and all hair types.
            </p>
            {/* Solution Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start gap-3 bg-white/80 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow">
                <CheckCircle className="text-green-500 w-7 h-7 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-[#ff8a9f]">Unbreakable</span>
                  <div className="text-gray-700 font-lora text-base">Bends, never snaps.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/80 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow">
                <Shield className="text-blue-400 w-7 h-7 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-[#ff8a9f]">Safe & Flexible</span>
                  <div className="text-gray-700 font-lora text-base">No sharp edges, bends under pressure.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/80 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow">
                <Hand className="text-yellow-500 w-7 h-7 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-[#ff8a9f]">All-Day Comfort</span>
                  <div className="text-gray-700 font-lora text-base">No scalp pain, no headaches.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/80 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow">
                <Palette className="text-pink-400 w-7 h-7 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-[#ff8a9f]">Style Ready</span>
                  <div className="text-gray-700 font-lora text-base">4 chic colors to match your vibe.</div>
                </div>
              </div>
            </div>
            {/* Love Badge */}
            <div className='flex items-center justify-center'>

            <div className="inline-flex items-center gap-3 bg-white/90 border border-[#ffabbb]/30 rounded-full px-7 py-3 shadow-lg mt-4 animate-fade-in">
              <div className="w-3 h-3 bg-[#ff8a9f] rounded-full animate-pulse"></div>
              <span className="text-[#ff8a9f] font-bold font-lora italic flex items-center gap-1">
                <Sparkles className="w-5 h-5 text-[#ff8a9f]" /> Made with love for your safety
              </span>
            </div>
            </div>
          </div>
          {/* Right Content - Demo Video Visual */}

          <video
            src="/clip-1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[30rem] object-cover animate-fade-in"
            poster="/jelly-clip-main-2.png"
          />

        </div>
      </div>
    </section >
  );
};

export default SolutionSection;