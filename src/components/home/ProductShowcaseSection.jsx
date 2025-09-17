import { useState, useEffect } from 'react'
import { ShoppingCart, Star, ChevronLeft, ChevronRight, Check } from 'lucide-react'
import CTAButton from '../CTAButton'

const ProductShowcaseSection = () => {
  const [selectedColor, setSelectedColor] = useState('cherry-red')
  const [selectedBundle, setSelectedBundle] = useState('4-pack')
  const [currentImage, setCurrentImage] = useState(0)

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
      popular: false,
      description: 'Single pack'
    },
    {
      id: '2-pack',
      quantity: 2,
      price: 28,
      originalPrice: 32,
      savings: 4,
      popular: false,
      description: '2-pack bundle'
    },
    {
      id: '4-pack',
      quantity: 4,
      price: 44.16,
      originalPrice: 64,
      savings: 19.84,
      popular: true,
      badge: 'Best Value',
      description: '4-pack bundle'
    }
  ]

  const productImages = [
    {
      id: 'clip-1',
      src: '/clip-img-1.webp',
      alt: 'JellyClip in action - flexible and comfortable'
    },
    {
      id: 'clip-2',
      src: '/clip-img-2.webp',
      alt: 'JellyClip styling - versatile and safe'
    },
    {
      id: 'clip-3',
      src: '/clip-img-3.webp',
      alt: 'JellyClip collection - all colors available'
    }
  ]

  const selectedColorData = colors.find(c => c.id === selectedColor)
  const selectedBundleData = bundles.find(b => b.id === selectedBundle)

  const handleCTAClick = () => {
    console.log('Add to Cart clicked:', selectedBundleData?.price);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  const goToImage = (index) => {
    setCurrentImage(index)
  }

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [productImages.length])

  return (
    <section className="py-10 md:py-24 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white border border-[#ffabbb]/30 rounded-full px-4 py-2 text-sm font-semibold text-[#ff8a9f] shadow-md font-lora mb-6">
            <Star className="w-4 h-4 text-[#ff8a9f]" />
            <span className='font-lora italic'>Premium Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-[#ff8a9f] font-lora italic">Color</span>.
            <br />
            <span className="text-[#ffabbb] font-lora italic">Stack Your Style</span> <span className="align-middle text-2xl">✨</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mx-auto rounded-full"></div>
        </div>

        {/* E-commerce Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="aspect-square bg-gradient-to-br from-[#fff5f7] to-[#ffe1e7] rounded-2xl overflow-hidden relative group">
              <img
                src={productImages[currentImage].src}
                alt={productImages[currentImage].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Image Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-[#ff8a9f]" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronRight className="w-5 h-5 text-[#ff8a9f]" />
              </button>

              {/* Image Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImage ? 'bg-[#ff8a9f]' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImage ? 'border-[#ff8a9f]' : 'border-[#ffabbb]/30 hover:border-[#ff8a9f]/50'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Product Title & Price */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                JellyClip Hair Clips
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">(2,847 reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl font-bold text-gray-900">
                  ${selectedBundleData?.price}
                </div>
                {selectedBundleData?.savings > 0 && (
                  <div className="text-lg text-gray-500 line-through">
                    ${selectedBundleData?.originalPrice}
                  </div>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Color</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                      selectedColor === color.id
                        ? 'border-[#ff8a9f] scale-110'
                        : 'border-[#ffabbb]/30 hover:border-[#ff8a9f]/50'
                    }`}
                    style={{ backgroundColor: color.color }}
                  >
                    {selectedColor === color.id && (
                      <Check className="absolute inset-0 m-auto w-6 h-6 text-white" />
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Selected: {selectedColorData?.name}
              </div>
            </div>

            {/* Bundle Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bundle Options</h3>
              <div className="space-y-3">
                {bundles.map((bundle) => (
                  <button
                    key={bundle.id}
                    onClick={() => setSelectedBundle(bundle.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      selectedBundle === bundle.id
                        ? 'border-[#ff8a9f] bg-gradient-to-r from-[#ff8a9f]/10 to-[#ffabbb]/10'
                        : 'border-[#ffabbb]/30 hover:border-[#ff8a9f]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedBundle === bundle.id ? 'border-[#ff8a9f] bg-[#ff8a9f]' : 'border-[#ffabbb]/50'
                        }`}>
                          {selectedBundle === bundle.id && (
                            <div className="w-full h-full rounded-full bg-[#ff8a9f]"></div>
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {bundle.quantity}-Pack
                          </div>
                          <div className="text-sm text-gray-600">{bundle.description}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">
                          ${bundle.price}
                        </div>
                        {bundle.savings > 0 && (
                          <div className="text-sm text-green-600">
                            Save ${bundle.savings.toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                    {bundle.popular && (
                      <div className="mt-2">
                        <span className="inline-block bg-gradient-to-r from-[#ff8a9f] to-[#ffabbb] text-white px-3 py-1 rounded-full text-xs font-medium">
                          {bundle.badge}
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div>
              <CTAButton
                onClick={handleCTAClick}
                size="lg"
                className="w-full text-lg px-8 py-4 font-bold flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart - ${selectedBundleData?.price}
              </CTAButton>
            </div>

            {/* Product Features */}
            {/* <div className="border-t border-[#ffabbb]/20 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff8a9f]" />
                  Unbreakable flexible design
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff8a9f]" />
                  Safe for car travel
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff8a9f]" />
                  All-day comfort
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ff8a9f]" />
                  4 stylish colors
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcaseSection 