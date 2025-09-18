import React from 'react';
import CTAButton from '../CTAButton';
import ROUTES from '../../router/routes';
import { useNavigate } from 'react-router';

const Hero = () => {
  const navigate = useNavigate()

  const handleCTAClick = () => {
    navigate(ROUTES.CART)
  };

  return (
    <section className="relative bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
      {/* Hero Image with Badge Overlay */}
      <div className="relative w-full max-h-[420px] overflow-hidden flex items-center justify-center">
        <img
          src="/jelly-clip-main-2.png"
          alt="JellyClip - The Unbreakable, Safe & Sexy Hair Clip"
          className="w-full object-contain object-top bg-white"
        />
        {/* Viral Badge Overlay */}
        <div className="absolute top-4 right-4 z-10">
          <div className="inline-flex items-center gap-2 bg-white border border-[#ffabbb]/30 rounded-full px-4 py-1.5 text-sm font-semibold text-[#ff8a9f] shadow-md font-lora animate-blink-light">
            <div className="w-2 h-2 bg-[#ff8a9f] rounded-full"></div>
            <span className='font-lora italic'>Going Viral on TikTok</span>
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl px-4 sm:px-8 py-8 -mt-12 relative z-20 flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-3 text-center">
          The Hair Clip That's <span className="text-[#ff8a9f] font-lora italic">Unbreakable</span>, Safe & <span className="text-[#ffabbb] font-lora italic">Sexy</span> <span className="align-middle text-2xl">✨</span>
        </h1>
        {/* Accent Divider */}
        <div className="w-14 h-1 rounded-full bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mb-5 mx-auto" />
        {/* Subline */}
        <p className="text-base sm:text-lg italic text-gray-600 leading-relaxed mb-5 text-center max-w-2xl font-lora">
          Ordinary clips snap, scratch, and can even turn dangerous. JellyClip bends, protects, and keeps your hair effortlessly chic — from morning coffee to late-night drives.
        </p>
        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 text-[#ff8a9f] bg-[#ffe1e7] rounded-full px-3 py-1 text-xs sm:text-sm font-bold font-lora">
            <div className="w-2 h-2 bg-[#ffabbb] rounded-full"></div>
            Unbreakable Design
          </div>
          <div className="flex items-center gap-2 text-[#ff8a9f] bg-[#ffe1e7] rounded-full px-3 py-1 text-xs sm:text-sm font-bold font-lora">
            <div className="w-2 h-2 bg-[#ffabbb] rounded-full"></div>
            Safe & Gentle
          </div>
          <div className="flex items-center gap-2 text-[#ff8a9f] bg-[#ffe1e7] rounded-full px-3 py-1 text-xs sm:text-sm font-bold font-lora">
            <div className="w-2 h-2 bg-[#ffabbb] rounded-full"></div>
            Premium Quality
          </div>
        </div>
        {/* CTA Button - compact, no arrow, single line */}
        <CTAButton
          onClick={handleCTAClick}
          size="lg"
          className="w-full sm:w-auto text-base px-6 py-2 font-bold"
        >
          👉 Get Yours Now – From ₹389
        </CTAButton>
        {/* Social Proof */}
        <div className="flex items-center gap-3 mt-7 text-xs sm:text-sm text-gray-500">
          <div className="flex -space-x-1">
            {/* Free Unsplash avatars for social proof */}
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80" alt="Customer 1" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80" alt="Customer 2" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80" alt="Customer 3" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80" alt="Customer 4" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80" alt="Customer 5" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
          </div>
          <span className="font-medium text-gray-700 font-lora italic">10,000+ happy customers</span>
        </div>
      </div>
    </section>
  );
};

export default Hero; 