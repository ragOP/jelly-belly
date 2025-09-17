import { Check, X, Zap, Star, Shield, Heart } from 'lucide-react'
import CTAButton from '../CTAButton'

const ComparisonChartSection = () => {
  const handleCTAClick = () => {
    console.log('Comparison CTA clicked - Choose JellyClip');
  };

  const features = [
    {
      category: 'Durability',
      feature: 'Breakage Resistance',
      regularClips: { status: 'bad', text: 'Snaps within weeks', icon: X, detail: 'Rigid plastic breaks under pressure' },
      jellyClip: { status: 'good', text: 'Never breaks', icon: Check, detail: 'Flexible material bends without snapping' }
    },
    {
      category: 'Safety',
      feature: 'Sharp Edges',
      regularClips: { status: 'bad', text: 'Hurts scalp & hair', icon: X, detail: 'Hard edges cause pain and damage' },
      jellyClip: { status: 'good', text: 'Soft & gentle', icon: Check, detail: 'Smooth rounded design protects scalp' }
    },
    {
      category: 'Safety',
      feature: 'Car Safety',
      regularClips: { status: 'bad', text: 'Dangerous projectile', icon: X, detail: 'Can pierce skin in accidents' },
      jellyClip: { status: 'good', text: 'Bends safely', icon: Check, detail: 'Flexible design prevents injury' }
    },
    {
      category: 'Comfort',
      feature: 'All-Day Wear',
      regularClips: { status: 'bad', text: 'Causes headaches', icon: X, detail: 'Pressure points create discomfort' },
      jellyClip: { status: 'good', text: 'Zero discomfort', icon: Check, detail: 'Distributes pressure evenly' }
    },
    {
      category: 'Style',
      feature: 'Color Options',
      regularClips: { status: 'bad', text: 'Limited & basic', icon: X, detail: 'Usually just black or brown' },
      jellyClip: { status: 'good', text: '4 gorgeous colors', icon: Check, detail: 'Cherry red, brown, white, black' }
    },
    {
      category: 'Value',
      feature: 'Longevity',
      regularClips: { status: 'bad', text: 'Replace monthly', icon: X, detail: 'Constant replacement costs add up' },
      jellyClip: { status: 'good', text: 'Lasts for years', icon: Check, detail: 'One-time investment with lifetime warranty' }
    }
  ]

  const categories = [...new Set(features.map(f => f.category))]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#ff8a9f]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#ffabbb]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-[#ffabbb]/30 rounded-full px-4 py-2 text-sm font-semibold text-[#ff8a9f] shadow-md font-lora mb-6">
            <Zap className="w-4 h-4 text-[#ff8a9f]" />
            <span className='font-lora italic'>The Clear Winner</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why <span className="text-[#ff8a9f] font-lora italic">JellyClip</span> Beats
            <br />
            <span className="text-[#ffabbb] font-lora italic">Every Other Clip</span> <span className="align-middle text-2xl">✨</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Side-by-side comparison showing why thousands choose JellyClip over traditional hair clips
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mx-auto rounded-full"></div>
        </div>

        {/* Comparison Content */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Mobile Cards Layout - Visible on Mobile & Tablet */}
          <div className="block lg:hidden space-y-6">
            {features.map((item, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-[#ffabbb]/20 overflow-hidden">
                {/* Feature Header */}
                <div className="bg-gradient-to-r from-gray-50 to-[#fff5f7] px-6 py-4 border-b border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    {item.category === 'Durability' && <Shield className="w-5 h-5 text-[#ff8a9f]" />}
                    {item.category === 'Safety' && <Heart className="w-5 h-5 text-[#ff8a9f]" />}
                    {item.category === 'Comfort' && <span className="text-[#ff8a9f]">😌</span>}
                    {item.category === 'Style' && <span className="text-[#ff8a9f]">✨</span>}
                    {item.category === 'Value' && <span className="text-[#ff8a9f]">💎</span>}
                    {item.feature}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">{item.category}</p>
                </div>

                {/* Comparison Cards */}
                <div className="p-6 space-y-4">
                  {/* Regular Clips */}
                  <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.regularClips.icon className="w-5 h-5 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-red-700 mb-1">Regular Clips</h5>
                        <p className="text-red-600 text-sm font-medium mb-2">{item.regularClips.text}</p>
                        <p className="text-red-600 text-xs leading-relaxed">{item.regularClips.detail}</p>
                      </div>
                    </div>
                    <div className="flex text-red-300 justify-center">
                      <Star className="w-4 h-4" />
                      <Star className="w-4 h-4" />
                      <Star className="w-4 h-4 opacity-30" />
                      <Star className="w-4 h-4 opacity-30" />
                      <Star className="w-4 h-4 opacity-30" />
                    </div>
                  </div>

                  {/* VS Divider */}
                  <div className="flex items-center justify-center py-2">
                    <div className="bg-gray-200 rounded-full px-4 py-1">
                      <span className="text-gray-600 text-sm font-bold">VS</span>
                    </div>
                  </div>

                  {/* JellyClip */}
                  <div className="bg-gradient-to-r from-[#fff5f7] to-[#ffe1e7] rounded-2xl p-4 border border-[#ff8a9f]/20">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#ff8a9f] rounded-full flex items-center justify-center flex-shrink-0">
                        <item.jellyClip.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-[#ff8a9f] mb-1">JellyClip</h5>
                        <p className="text-gray-900 text-sm font-medium mb-2">{item.jellyClip.text}</p>
                        <p className="text-gray-700 text-xs leading-relaxed">{item.jellyClip.detail}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 justify-center">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table - Hidden on Mobile */}
          <div className="hidden lg:block bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-[#ffabbb]/20">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 py-8">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-4">
                  <h3 className="text-xl font-bold text-white">Feature Comparison</h3>
                  <p className="text-gray-300 text-sm mt-1">See the difference for yourself</p>
                </div>
                <div className="col-span-4 text-center">
                  <div className="bg-red-500/20 rounded-2xl p-4 border border-red-400/30">
                    <h3 className="text-lg font-bold text-red-300 mb-1">Regular Clips</h3>
                    <p className="text-red-200 text-sm">The old way</p>
                    <div className="flex justify-center mt-2">
                      <div className="flex text-red-300">
                        <Star className="w-4 h-4" />
                        <Star className="w-4 h-4" />
                        <Star className="w-4 h-4 opacity-30" />
                        <Star className="w-4 h-4 opacity-30" />
                        <Star className="w-4 h-4 opacity-30" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 text-center">
                  <div className="bg-gradient-to-r from-[#ff8a9f]/20 to-[#ffabbb]/20 rounded-2xl p-4 border border-[#ff8a9f]/30">
                    <h3 className="text-lg font-bold text-white mb-1">JellyClip</h3>
                    <p className="text-pink-200 text-sm">The future is here</p>
                    <div className="flex justify-center mt-2">
                      <div className="flex text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {categories.map((category) => {
                const categoryFeatures = features.filter(f => f.category === category)
                return (
                  <div key={category} className="bg-white">
                    {/* Category Header */}
                    <div className="bg-gradient-to-r from-gray-50 to-[#fff5f7] px-6 py-4 border-b border-gray-100">
                      <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        {category === 'Durability' && <Shield className="w-5 h-5 text-[#ff8a9f]" />}
                        {category === 'Safety' && <Heart className="w-5 h-5 text-[#ff8a9f]" />}
                        {category === 'Comfort' && <span className="text-[#ff8a9f]">😌</span>}
                        {category === 'Style' && <span className="text-[#ff8a9f]">✨</span>}
                        {category === 'Value' && <span className="text-[#ff8a9f]">💎</span>}
                        {category}
                      </h4>
                    </div>
                    
                    {/* Category Features */}
                    {categoryFeatures.map((item, index) => (
                      <div 
                        key={index}
                        className="grid grid-cols-12 gap-4 items-center px-6 py-6 hover:bg-[#ffe1e7]/30 transition-colors duration-200"
                      >
                        {/* Feature Name */}
                        <div className="col-span-4">
                          <h5 className="font-semibold text-gray-900 mb-1">{item.feature}</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.regularClips.detail}</p>
                        </div>
                        
                        {/* Regular Clips */}
                        <div className="col-span-4">
                          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                <item.regularClips.icon className="w-4 h-4 text-red-500" />
                              </div>
                              <span className="font-medium text-red-700">{item.regularClips.text}</span>
                            </div>
                            <p className="text-red-600 text-xs">{item.regularClips.detail}</p>
                          </div>
                        </div>
                        
                        {/* JellyClip */}
                        <div className="col-span-4">
                          <div className="bg-gradient-to-r from-[#fff5f7] to-[#ffe1e7] rounded-xl p-4 border border-[#ff8a9f]/20">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-[#ff8a9f] rounded-full flex items-center justify-center">
                                <item.jellyClip.icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="font-medium text-[#ff8a9f]">{item.jellyClip.text}</span>
                            </div>
                            <p className="text-gray-700 text-xs">{item.jellyClip.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-[#ff8a9f] to-[#ffabbb] rounded-3xl p-6 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-white/5 opacity-50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                The Winner is Clear
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                <div className="bg-white/10 rounded-2xl p-4 md:p-6">
                  <div className="text-3xl md:text-4xl mb-3">❌</div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Regular Clips</h4>
                  <p className="text-pink-100 text-sm md:text-base">Break • Hurt • Dangerous • Limited</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4 md:p-6 border-2 border-white/30">
                  <div className="text-3xl md:text-4xl mb-3">✨</div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">JellyClip</h4>
                  <p className="text-pink-100 text-sm md:text-base">Unbreakable • Comfortable • Safe • Stylish</p>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-pink-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Stop settling for clips that break, hurt, and put you at risk. Join 50,000+ customers who made the smart choice.
              </p>
              
              <CTAButton
                onClick={handleCTAClick}
                size="lg"
                className="bg-white text-[#ff8a9f] hover:bg-gray-50 font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-xl"
              >
                Choose JellyClip Today 🚀
              </CTAButton>
              
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-pink-100 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Lifetime Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonChartSection
