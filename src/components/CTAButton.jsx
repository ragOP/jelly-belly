import React from 'react';

const CTAButton = ({
  children,
  onClick,
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) => {
  // Compact size classes
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-6 py-2.5 text-lg',
  };

  return (
    <button
      className={`
        relative
        inline-flex
        items-center
        justify-center
        font-bold
        rounded-full
        overflow-hidden
        shadow-md
        transition-all
        duration-200
        bg-gradient-to-r from-[#ffabbb] via-[#ff8a9f] to-[#ff6b85]
        text-white
        focus:outline-none
        focus:ring-2 focus:ring-[#ffabbb]/40
        active:scale-97
        ${sizes[size]}
        ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105'}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {/* Animated gradient background */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 animate-gradient-move bg-[linear-gradient(270deg,#1fa2ff,#12d8fa,#a6ffcb,#ffabbb,#ff8a9f,#ff6b85,#1fa2ff)] bg-[length:400%_400%] opacity-80"
      />
      <span className="relative z-10 w-full flex items-center justify-center font-lora">
        {children}
      </span>
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          animation: gradient-move 3s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
};

export default CTAButton; 