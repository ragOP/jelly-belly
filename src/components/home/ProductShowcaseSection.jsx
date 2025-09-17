import { useState } from 'react'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import CTAButton from '../CTAButton'

const ProductShowcaseSection = () => {
  const [selectedColor, setSelectedColor] = useState('cherry-red')
  const [selectedBundle, setSelectedBundle] = useState('4-pack')

  const colors = [
    { 
      id: 'cherry-red', 
      name: 'Cherry Red', 
      emoji: '🍒', 
      color: '#DC2626',
      gradient: 'from-red-400 to-red-600'
    },
    { 
      id: 'brown', 
      name: 'Brown', 
      emoji: '☕', 
      color: '#92400E',
      gradient: 'from-amber-600 to-amber-800'
    },
    { 
      id: 'cotton-white', 
      name: 'Cotton White', 
      emoji: '🤍', 
      color: '#F3F4F6',
      gradient: 'from-gray-100 to-gray-300'
    },
    { 
      id: 'pure-black', 
      name: 'Pure Black', 
      emoji: '🖤', 
      color: '#111827',
      gradient: 'from-gray-700 to-gray-900'
    }
  ]

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
      badge: 'Best Deal' 
    }
  ]

  const selectedColorData = colors.find(c => c.id === selectedColor)
  const selectedBundleData = bundles.find(b => b.id === selectedBundle)

  const handleCTAClick = () => {
    console.log('Add to Cart clicked:', selectedBundleData?.price);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-[#ffabbb]/30 rounded-full px-4 py-2 text-sm font-semibold text-[#ff8a9f] shadow-md font-lora mb-6">
            <Star className="w-4 h-4 text-[#ff8a9f]" />
            <span className='font-lora italic'>Premium Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-[#ff8a9f] font-lora italic">Color</span>.
            <br />
            <span className="text-[#ffabbb] font-lora italic">Stack Your Style</span> <span className="align-middle text-2xl">✨</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Visualization */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Product Display */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-[#ffabbb]/20">
                <div className="aspect-square bg-gradient-to-br from-[#fff5f7] to-[#ffe1e7] rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                  {/* Product Image Placeholder */}
                  <div className={`w-32 h-32 bg-gradient-to-br ${selectedColorData.gradient} rounded-full shadow-lg relative`}>
                    <div className="absolute inset-2 bg-white/20 rounded-full"></div>
                    <div className="absolute inset-4 bg-white/30 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
                      {selectedColorData.emoji}
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 bg-[#ff8a9f] text-white p-2 rounded-full shadow-lg">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    JellyClip {selectedColorData.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Unbreakable • Comfortable • Stylish
                  </p>
                  <div className="flex justify-center items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">(2,847 reviews)</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Selection Panel */}
          <div className="order-1 lg:order-2">
            {/* Color Selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Color</h3>
              <div className="grid grid-cols-2 gap-4">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                      selectedColor === color.id 
                        ? 'border-purple-500 bg-purple-50 shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${color.gradient} rounded-full shadow-md`}></div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 flex items-center gap-1">
                          {color.name} {color.emoji}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Bundle Selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bundles & Pricing</h3>
              <div className="space-y-4">
                {bundles.map((bundle) => (
                  <button
                    key={bundle.id}
                    onClick={() => setSelectedBundle(bundle.id)}
                    className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 relative ${
                      selectedBundle === bundle.id 
                        ? 'border-purple-500 bg-purple-50 shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-purple-300'
                    }`}
                  >
                    {bundle.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <CTAButton
              onClick={handleCTAClick}
              size="lg"
              className="w-full text-lg px-8 py-4 font-bold flex items-center justify-center gap-3"
            >
              <ShoppingCart className="w-6 h-6" />
              Add to Cart → ${selectedBundleData?.price}
            </CTAButton>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff8a9f] rounded-full"></div>
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ffabbb] rounded-full"></div>
                30-Day Returns
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff8a9f] rounded-full"></div>
                Lifetime Warranty
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff8a9f] to-[#ffabbb] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💪</span>
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">Unbreakable</h4>
            <p className="text-gray-600">Bends without breaking, tested by thousands</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff8a9f] to-[#ffabbb] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">Stylish</h4>
            <p className="text-gray-600">4 gorgeous colors to match any outfit</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff8a9f] to-[#ffabbb] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💖</span>
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">Comfortable</h4>
            <p className="text-gray-600">Zero pain, all-day wear guarantee</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcaseSection 