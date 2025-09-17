import { ShoppingCart, Heart, Star, ArrowRight, Shield, Truck, RotateCcw } from 'lucide-react'
import CTAButton from '../CTAButton'

const ClosingCTASection = () => {
  const handleCTAClick = () => {
    console.log('Final CTA clicked - Get Yours Now');
  };

  const bundles = [
    { 
      id: '1-pack', 
      quantity: 1, 
      price: 16, 
      originalPrice: 16,
      savings: 0,
      popular: false 
    },
    { 
      id: '2-pack', 
      quantity: 2, 
      price: 28, 
      originalPrice: 32,
      savings: 4,
      popular: false 
    },
    { 
      id: '4-pack', 
      quantity: 4, 
      price: 44.16, 
      originalPrice: 64,
      savings: 19.84,
      popular: true,
      badge: 'BEST DEAL' 
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#ff8a9f]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#ffabbb]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff8a9f]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Product Showcase */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Product Image */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-[#ffabbb]/20 relative overflow-hidden">
                {/* Viral Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="inline-flex items-center gap-2 bg-[#ff8a9f] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className='font-lora italic'>Going Viral</span>
                  </div>
                </div>

                {/* Product Image */}
                <div className="relative w-full max-h-[400px] overflow-hidden flex items-center justify-center mb-6">
                  <img
                    src="/jelly-clip-main-2.png"
                    alt="JellyClip - The Unbreakable, Safe & Sexy Hair Clip"
                    className="w-full object-contain object-top bg-white rounded-2xl"
                  />
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    JellyClip Collection
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Unbreakable • Safe • Stylish • 4 Colors
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">(50,000+ reviews)</span>
                  </div>

                  {/* Key Benefits */}
                  <div className="flex flex-wrap justify-center gap-3">
                    <div className="flex items-center gap-2 text-[#ff8a9f] bg-[#ffe1e7] rounded-full px-3 py-1 text-xs font-bold font-lora">
                      <div className="w-2 h-2 bg-[#ffabbb] rounded-full"></div>
                      Unbreakable
                    </div>
                    <div className="flex items-center gap-2 text-[#ff8a9f] bg-[#ffe1e7] rounded-full px-3 py-1 text-xs font-bold font-lora">
                      <div className="w-2 h-2 bg-[#ffabbb] rounded-full"></div>
                      Safe & Gentle
                    </div>
                    <div className="flex items-center gap-2 text-[#ff8a9f] bg-[#ffe1e7] rounded-full px-3 py-1 text-xs font-bold font-lora">
                      <div className="w-2 h-2 bg-[#ffabbb] rounded-full"></div>
                      4 Colors
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#ff8a9f] to-[#ffabbb] rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#ffabbb] to-[#ff8a9f] rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Pricing Options */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-[#ffabbb]/20 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Bundle</h3>
                <div className="space-y-4">
                  {bundles.map((bundle) => (
                    <div
                      key={bundle.id}
                      className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                        bundle.popular 
                          ? 'border-[#ff8a9f] bg-gradient-to-r from-[#fff5f7] to-[#ffe1e7] shadow-lg' 
                          : 'border-gray-200 bg-white hover:border-[#ffabbb]'
                      }`}
                    >
                      {bundle.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#ff8a9f] to-[#ffabbb] text-white px-4 py-1 rounded-full text-sm font-bold">
                          {bundle.badge}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <div className="font-bold text-xl text-gray-900">
                            {bundle.quantity}-Pack
                          </div>
                          {bundle.savings > 0 && (
                            <div className="text-green-600 font-medium text-sm">
                              Save ${bundle.savings.toFixed(2)}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-2xl text-gray-900">
                            ${bundle.price}
                          </div>
                          {bundle.savings > 0 && (
                            <div className="text-gray-500 line-through text-sm">
                              ${bundle.originalPrice}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main CTA Button */}
              <CTAButton
                onClick={handleCTAClick}
                size="lg"
                className="w-full text-xl px-8 py-6 font-bold flex items-center justify-center gap-3 shadow-2xl"
              >
                <ShoppingCart className="w-7 h-7" />
                Get Yours Now – From $16
                <ArrowRight className="w-7 h-7" />
              </CTAButton>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#ffabbb]/20">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Free Shipping</div>
                    <div className="text-gray-600 text-xs">On all orders</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#ffabbb]/20">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <RotateCcw className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">30-Day Returns</div>
                    <div className="text-gray-600 text-xs">No questions asked</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#ffabbb]/20">
                  <div className="w-10 h-10 bg-[#ff8a9f] rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Lifetime Warranty</div>
                    <div className="text-gray-600 text-xs">We stand behind it</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#ff8a9f] to-[#ffabbb] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-white/5 opacity-50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Don't Wait. Your Hair Deserves Better.
              </h3>
              <p className="text-xl text-pink-100 leading-relaxed mb-8 max-w-3xl mx-auto">
                Join 50,000+ girls who've already made the switch. Stop dealing with painful, breakable clips that put you at risk. Choose JellyClip and experience the difference today.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-3">💪</div>
                  <div className="text-white font-bold text-lg">Unbreakable</div>
                  <div className="text-pink-200 text-sm">Tested by thousands</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 border-2 border-white/30">
                  <div className="text-4xl mb-3">🛡️</div>
                  <div className="text-white font-bold text-lg">Safe</div>
                  <div className="text-pink-200 text-sm">Flexible protection</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-3">✨</div>
                  <div className="text-white font-bold text-lg">Gorgeous</div>
                  <div className="text-pink-200 text-sm">4 chic colors</div>
                </div>
              </div>

              <CTAButton
                onClick={handleCTAClick}
                size="lg"
                className="bg-white text-[#ff8a9f] hover:bg-gray-50 font-bold px-8 py-4 text-lg shadow-xl"
              >
                Make the Switch Today 🚀
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-[#ff8a9f] text-lg font-medium font-lora">
            <span>��</span>
            <span>Made with love for girls who refuse to settle</span>
            <span>💕</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClosingCTASection 