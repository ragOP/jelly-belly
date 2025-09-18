import React, { useState, useEffect } from 'react'
import { ShoppingCart, Star, ChevronLeft, ChevronRight, Check, Plus, Minus, Heart, Shield, Truck, RotateCcw, Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import CTAButton from '../components/CTAButton'
import SocialProofSection from '../components/home/SocialProofSection'
import { ROUTES } from '../router/routes'

const Cart = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'JellyClip Hair Clips',
      color: 'cherry-red',
      colorName: 'Cherry Red',
      colorCode: '#DC2626',
      quantity: 4,
      price: 44.16,
      originalPrice: 64,
      savings: 19.84,
      bundle: '4-pack',
      image: '/jelly-clip-main-2.png',
      media: [
        { type: 'image', src: '/jelly-clip-main-2.png', alt: 'JellyClip Hero' },
        { type: 'video', src: '/clip-vid-main.mp4', alt: 'JellyClip in Action' },
        { type: 'image', src: '/clip-img-1.webp', alt: 'JellyClip Styling' },
        { type: 'image', src: '/clip-img-2.webp', alt: 'JellyClip Collection' },
        { type: 'video', src: '/clip-video.mp4', alt: 'JellyClip Demo' }
      ],
      inStock: true
    }
  ])

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [selectedBundle, setSelectedBundle] = useState('4-pack')
  const [selectedColor, setSelectedColor] = useState('cherry-red')

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

  const selectedBundleData = bundles.find(b => b.id === selectedBundle)
  const selectedColorData = colors.find(c => c.id === selectedColor)
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const totalSavings = cartItems.reduce((sum, item) => sum + (item.savings * item.quantity), 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % cartItems[0]?.media.length)
  }

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + cartItems[0]?.media.length) % cartItems[0]?.media.length)
  }

  const goToMedia = (index) => {
    setCurrentMediaIndex(index)
  }

  // Auto-scroll functionality for media
  useEffect(() => {
    if (cartItems[0]?.media.length > 1) {
      const interval = setInterval(() => {
        setCurrentMediaIndex((prev) => (prev + 1) % cartItems[0].media.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [cartItems])

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7] flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <ShoppingCart className="w-24 h-24 text-[#ffabbb] mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some JellyClips to get started!</p>
            <CTAButton onClick={() => navigate(ROUTES.HOME)}>
              Continue Shopping
            </CTAButton>
          </div>
        </section>
      </div>
    )
  }

  const currentMedia = cartItems[0].media[currentMediaIndex]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Media Section - Reduced Height */}
        <section className="relative w-full h-[40vh] overflow-hidden">
          {currentMedia.type === 'video' ? (
            <video
              src={currentMedia.src}
              alt={currentMedia.alt}
              className="w-full h-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={currentMedia.src}
              alt={currentMedia.alt}
              className="w-full h-full object-cover object-center"
            />
          )}

          {/* Media Navigation Overlay */}
          <div className="absolute inset-0 bg-black/10 flex items-center justify-between px-4">
            <button
              onClick={prevMedia}
              className="bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-[#ff8a9f]" />
            </button>
            <button
              onClick={nextMedia}
              className="bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-[#ff8a9f]" />
            </button>
          </div>

          {/* Media Type Indicator */}
          <div className="absolute top-4 left-4">
            <div className="bg-white/90 rounded-full px-3 py-1 text-xs font-semibold text-[#ff8a9f] flex items-center gap-1">
              {currentMedia.type === 'video' ? <Play className="w-3 h-3" /> : <Heart className="w-3 h-3" />}
              {currentMedia.type === 'video' ? 'Video' : 'Image'}
            </div>
          </div>

          {/* Media Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {cartItems[0].media.map((_, index) => (
              <button
                key={index}
                onClick={() => goToMedia(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentMediaIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                  }`}
              />
            ))}
          </div>

          {/* Product Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 rounded-full px-3 py-1 text-xs font-semibold text-[#ff8a9f] flex items-center gap-1">
              <Heart className="w-3 h-3" />
              In Cart
            </div>
          </div>
        </section>

        {/* Cart Content Section - Updated Layout */}
        <section className="py-8 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Cart Items - Updated Layout */}
              <div className="lg:col-span-2 space-y-4">
                {/* Product Title - Left Aligned */}
                <div className="text-left mb-4">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{cartItems[0].name}</h1>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-gray-600 text-sm ml-2">(2,847 reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Color Selection - Left/Right Layout */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900">Choose Color</h3>
                    <div className="flex gap-2">
                      {colors.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => setSelectedColor(color.id)}
                          className={`relative w-6 h-6 rounded-full border-2 transition-all duration-300 hover:scale-110 ${selectedColor === color.id
                            ? 'border-[#ff8a9f] scale-110 shadow-md'
                            : 'border-[#ffabbb]/30 hover:border-[#ff8a9f]/50'
                            }`}
                          style={{ backgroundColor: color.color }}
                          title={color.name}
                        >
                          {selectedColor === color.id && (
                            <Check className="absolute inset-0 m-auto w-2 h-2 text-white drop-shadow-lg" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="text-left mt-1 text-xs text-gray-600">
                    {selectedColorData?.name}
                  </div>
                </div>

                {/* Bundle Selection */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Bundle</h3>
                  <div className="space-y-1">
                    {bundles.map((bundle) => (
                      <button
                        key={bundle.id}
                        onClick={() => setSelectedBundle(bundle.id)}
                        className={`w-full p-2 rounded-lg border-2 transition-all duration-300 text-left ${selectedBundle === bundle.id
                          ? 'border-[#ff8a9f] bg-gradient-to-r from-[#ff8a9f]/10 to-[#ffabbb]/10'
                          : 'border-[#ffabbb]/30 hover:border-[#ff8a9f]/50'
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full border-2 ${selectedBundle === bundle.id ? 'border-[#ff8a9f] bg-[#ff8a9f]' : 'border-[#ffabbb]/50'
                              }`}>
                              {selectedBundle === bundle.id && (
                                <div className="w-full h-full rounded-full bg-[#ff8a9f]"></div>
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <div className="font-medium text-gray-900 text-sm">
                                  {bundle.quantity}-Pack
                                </div>
                                <div className="text-center">
                                  <span className="inline-block mb-1 bg-gradient-to-r from-[#ff8a9f] to-[#ffabbb] text-white px-2 py-1 rounded-full text-xs font-medium">
                                    {bundle.badge}
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs text-gray-600">{bundle.description}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-gray-900 text-sm">
                              ${bundle.price}
                            </div>
                            {bundle.savings > 0 && (
                              <div className="text-xs text-green-600">
                                Save ${bundle.savings.toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                        {/* {bundle.popular && (
                         
                        )} */}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price and Quantity - Space Between Layout */}
                <div className="flex items-center justify-between">
                  {/* Price Display - Left Side */}
                  <div className="text-left">
                    <div className="space-y-1">
                      <div className='flex flex-row items-center gap-2'>
                        <div className="text-2xl font-bold text-gray-900">
                          ${(cartItems[0].price * cartItems[0].quantity).toFixed(2)}
                        </div>
                        {cartItems[0].savings > 0 && (
                          <div className="text-lg text-gray-500 line-through">
                            ${(cartItems[0].originalPrice * cartItems[0].quantity).toFixed(2)}
                          </div>
                        )}
                      </div>
                      {cartItems[0].savings > 0 && (
                        <div className="text-sm text-green-600 font-semibold">
                          Save ${(cartItems[0].savings * cartItems[0].quantity).toFixed(2)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls - Right Side */}
                  <div className="flex items-center bg-white rounded-lg border-2 border-[#ffabbb]/20 shadow-sm">
                    <button
                      onClick={() => updateQuantity(cartItems[0].id, cartItems[0].quantity - 1)}
                      className="w-8 h-8 rounded-l-lg bg-[#ffabbb]/10 hover:bg-[#ff8a9f] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-bold text-gray-900 bg-white px-2">{cartItems[0].quantity}</span>
                    <button
                      onClick={() => updateQuantity(cartItems[0].id, cartItems[0].quantity + 1)}
                      className="w-8 h-8 rounded-r-lg bg-[#ffabbb]/10 hover:bg-[#ff8a9f] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Order Summary - Compact */}
              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#ffabbb]/20">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Order Summary</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>

                    {totalSavings > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Savings</span>
                        <span className="font-semibold">-${totalSavings.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>

                    <div className="border-t border-[#ffabbb]/20 pt-2">
                      <div className="flex justify-between text-lg font-bold text-gray-900">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <CTAButton className="w-full text-base py-2">
                      Proceed to Checkout
                    </CTAButton>

                    {/* <button
                      onClick={() => navigate(ROUTES.HOME)}
                      className="w-full py-2 border-2 border-[#ffabbb] text-[#ff8a9f] rounded-lg font-semibold hover:bg-[#ff8a9f] hover:text-white transition-all duration-200 text-sm"
                    >
                      Continue Shopping
                    </button> */}
                  </div>

                  {/* Trust Badges - Minimal */}
                  <div className="mt-4 flex flex-col items-center justify-center  space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Shield className="w-3 h-3 text-[#ff8a9f]" />
                      <span>Secure checkout</span>
                    </div>
                    {/* <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Truck className="w-3 h-3 text-[#ff8a9f]" />
                      <span>Free shipping over $50</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <RotateCcw className="w-3 h-3 text-[#ff8a9f]" />
                      <span>30-day returns</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <SocialProofSection />
      </main>
    </div>
  )
}

export default Cart