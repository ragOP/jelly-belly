import { ShoppingCart, Heart, Star, ArrowRight, Shield, Truck, RotateCcw } from 'lucide-react'
import CTAButton from '../CTAButton'
import { useNavigate } from 'react-router';
import ROUTES from '../../router/routes';

const ClosingCTASection = () => {
  const navigate = useNavigate()

  const handleCTAClick = () => {
    navigate(ROUTES.CART)
  };

  return (
    <section className="py-8 md:py-24 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#ff8a9f]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#ffabbb]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff8a9f]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white border border-[#ffabbb]/30 rounded-full px-4 py-2 text-sm font-semibold text-[#ff8a9f] shadow-md font-lora mb-6">
            <Heart className="w-4 h-4 text-[#ff8a9f]" />
            <span className='font-lora italic'>Final Call</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Break the Rules,
            <br />
            <span className="text-[#ff8a9f] font-lora italic">Not Your Clip</span> <span className="align-middle text-2xl">💕</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Upgrade to a clip that bends with you, keeps you safe, and looks gorgeous. Join 50,000+ customers who made the switch.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mx-auto rounded-full"></div>
        </div>

        {/* Pricing & CTA */}


        {/* Main CTA Button */}
        <CTAButton
          onClick={handleCTAClick}
          size="lg"
          className="w-full text-xl px-8 py-6 font-bold flex items-center justify-center gap-3 shadow-2xl"
        >
          <ShoppingCart className="w-7 h-7" />
          Get Yours Now – From ₹389
          <ArrowRight className="w-7 h-7" />
        </CTAButton>



      </div>
    </section >
  )
}

export default ClosingCTASection 