import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { ROUTES } from '../router/routes';

const Header = () => {

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate(ROUTES.CART);
  };


  return (
    <header className="bg-gradient-to-r from-[#ffe1e7] to-[#fff5f7] border-b border-[#ffabbb]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left spacer for mobile */}
          <div className="w-10 sm:w-12"></div>

          {/* Logo - Center */}
          <div className="flex-shrink-0">
            <Link to={ROUTES.HOME} className="block">
              <img
                src="/jelly-logo.webp"
                alt="Jelly Logo"
                className="h-8 sm:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Cart Button - Right */}
          <button onClick={handleCartClick} className="relative p-2 sm:p-3 rounded-full bg-white/80 hover:bg-[#ffabbb] text-[#ff8a9f] hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 group shadow-lg">
            <ShoppingCart size={20} className="sm:w-6 sm:h-6" />

            {/* Cart count badge */}
            <span className="absolute -top-1 -right-1 bg-[#ff8a9f] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              0
            </span>

            {/* Hover effect */}
            <div className="absolute inset-0 rounded-full bg-[#ffabbb] opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
          </button>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffabbb]/30 to-transparent"></div>
    </header>
  );
};

export default Header; 