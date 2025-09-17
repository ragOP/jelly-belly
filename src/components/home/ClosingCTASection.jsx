import { ShoppingCart, Heart, Star, ArrowRight } from 'lucide-react'
import CTAButton from '../CTAButton'

const ClosingCTASection = () => {
  const handleCTAClick = () => {
    console.log('Final CTA clicked - Get Yours Now');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pink-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Heart className="w-4 h-4 fill-current" />
              <span className='font-lora italic'>Final Call</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Break the Rules,
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Not Your Clip 💕
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-pink-100 max-w-4xl mx-auto leading-relaxed font-medium">
              Upgrade to a clip that bends with you, keeps you safe, and looks gorgeous.
            </p>
          </div>

          {/* Product Showcase */}
          <div className="mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Product Visual */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                      <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                        <span className="text-4xl">🍒</span>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                      NEW!
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex justify-center items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
                      ))}
                      <span className="text-white/90 text-lg ml-2">(50,000+ happy customers)</span>
                    </div>
                    <div className="text-white/80 text-lg">
                      4 gorgeous colors • Unbreakable • Safe
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="text-left">
                  <div className="space-y-6">
                    {/* Pricing Options */}
                    <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">1-Pack</span>
                          <span className="text-2xl font-bold text-white">$16</span>
                        </div>
                        <div className="flex items-center justify-between border-t border-white/20 pt-4">
                          <span className="text-white font-medium">2-Pack</span>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-white">$28</span>
                            <span className="text-green-300 text-sm block">Save $4</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-white/20 pt-4 bg-white/10 -mx-6 px-6 py-4 rounded-b-2xl">
                          <div>
                            <span className="text-white font-medium">4-Pack</span>
                            <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold ml-2">
                              BEST DEAL
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-white">$44.16</span>
                            <span className="text-green-300 text-sm block">Save $19.84</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main CTA Button */}
                    <CTAButton
                      onClick={handleCTAClick}
                      size="lg"
                      className="w-full text-xl px-8 py-6 font-bold flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-gray-900"
                    >
                      <ShoppingCart className="w-7 h-7" />
                      Get Yours Now – From $16
                      <ArrowRight className="w-7 h-7" />
                    </CTAButton>

                    {/* Trust Indicators */}
                    <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Free Shipping
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        30-Day Returns
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Lifetime Warranty
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't Wait. Your Hair Deserves Better.
              </h3>
              <p className="text-xl text-pink-100 leading-relaxed mb-8">
                Join 50,000+ girls who've already made the switch. Stop dealing with painful, breakable clips that put you at risk. Choose JellyClip and experience the difference today.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-3xl mb-2">💪</div>
                  <div className="text-white font-bold">Unbreakable</div>
                  <div className="text-pink-200 text-sm">Tested by thousands</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-3xl mb-2">🛡️</div>
                  <div className="text-white font-bold">Safe</div>
                  <div className="text-pink-200 text-sm">Flexible protection</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-3xl mb-2">✨</div>
                  <div className="text-white font-bold">Gorgeous</div>
                  <div className="text-pink-200 text-sm">4 chic colors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decoration */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 text-white/80 text-lg font-medium">
              <span>💕</span>
              <span>Made with love for girls who refuse to settle</span>
              <span>💕</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClosingCTASection 