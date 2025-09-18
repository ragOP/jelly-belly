import React, { useState, useEffect } from 'react'
import { ShoppingCart, Star, ChevronLeft, ChevronRight, Check, Plus, Minus, Heart, Shield, Truck, RotateCcw, Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import CTAButton from '../components/CTAButton'
import SocialProofSection from '../components/home/SocialProofSection'
import { ROUTES } from '../router/routes'
import { BACKEND_URL } from '../api_service/BACKEND_URL'
import axios from 'axios'

const Cart = () => {
  const navigate = useNavigate()

  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'JellyClip Hair Clips',
      color: 'cherry-red',
      colorName: 'Cherry Red',
      colorCode: '#DC2626',
      quantity: 1,
      price: 974,
      originalPrice: 3996,
      savings: 3022,
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

  // Customer Information Form State
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  })

  const [formErrors, setFormErrors] = useState({})

  const bundles = [
    {
      id: '1-pack',
      quantity: 1,
      price: 389,
      originalPrice: 999,
      savings: 610,
      popular: false,
      description: 'Single pack',
      discountPercent: 0
    },
    {
      id: '2-pack',
      quantity: 2,
      price: 629,
      originalPrice: 1998,
      savings: 1369,
      popular: false,
      description: '2-pack bundle',
      discountPercent: 10,
      badge: '10% OFF'
    },
    {
      id: '4-pack',
      quantity: 4,
      price: 974,
      originalPrice: 3996,
      savings: 3022,
      popular: true,
      badge: '25% OFF - Best Value',
      description: '4-pack bundle',
      discountPercent: 25
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
  // const shipping = subtotal > 50 ? 0 : 5.99
  // const tax = subtotal * 0.08
  // const total = subtotal + shipping + tax
  const total = subtotal

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const updateBundle = (bundleId) => {
    setSelectedBundle(bundleId)
    const bundle = bundles.find(b => b.id === bundleId)
    if (bundle) {
      setCartItems(items =>
        items.map(item => ({
          ...item,
          price: bundle.price,
          originalPrice: bundle.originalPrice,
          savings: bundle.savings,
          bundle: bundleId
        }))
      )
    }
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

  const handleInputChange = (field, value) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }))

    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const validateForm = () => {
    const errors = {}

    if (!customerInfo.fullName.trim()) {
      errors.fullName = 'Full name is required'
    }

    if (!customerInfo.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      errors.email = 'Please enter a valid email'
    }

    if (!customerInfo.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required'
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(customerInfo.phoneNumber.replace(/[\s\-\(\)]/g, ''))) {
      errors.phoneNumber = 'Please enter a valid phone number'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleCheckout = async () => {
    if (validateForm()) {
      console.log('Customer Info:', customerInfo)
      console.log('Proceeding to checkout...')
      try {
        setIsCheckingOut(true);

        // Create abandoned order first
        const abdOrderResponse = await fetch(
          `${BACKEND_URL}/api/lander8/abandoned-order`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // amount: total,
              amount: 2,
              fullName: customerInfo?.fullName,
              email: customerInfo?.email,
              phoneNumber: customerInfo?.phoneNumber,
              selectedBundle: selectedBundle,
              cartItems: cartItems,
            }),
          }
        );

        const abdOrderResult = await abdOrderResponse.json();
        const abdOrderId = abdOrderResult.data?._id;

        if (!abdOrderResult.success) {
          console.warn("Failed to create abandoned order, but continuing with checkout");
        } else {
          console.log("Abandoned Order Created with Id", abdOrderId);
        }

        // Create Razorpay order
        const res = await axios.post(
          `${BACKEND_URL}/api/payment/razorpay`,
          {
            // amount: total,
            amount: 2,
          }
        );

        const data = res.data.data;

        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY,
          // amount: total,
          amount: 2,
          currency: "INR",
          name: "JellyClip",
          description: "JellyClip Hair Clips Order Payment",
          order_id: data.orderId,
          handler: async function (response) {
            try {
              // Create order in database
              const orderResponse = await fetch(
                `${BACKEND_URL}/api/lander8/create-order`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    // amount: total,
                    amount: 2,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpaySignature: response.razorpay_signature,
                    fullName: customerInfo?.fullName,
                    email: customerInfo?.email,
                    phoneNumber: customerInfo?.phoneNumber,
                    selectedBundle: selectedBundle,
                    cartItems: cartItems,
                    orderId: data.orderId,
                  }),
                }
              );

              const orderResult = await orderResponse.json();

              if (orderResult.success) {
                // Store order details in session storage
                sessionStorage.setItem("orderId", data.orderId);
                sessionStorage.setItem("orderAmount", total.toString());

                // Delete abandoned order if order is created successfully
                if (abdOrderId) {
                  try {
                    const deleteAbdOrder = await fetch(
                      `${BACKEND_URL}/api/lander8/delete-abandoned-order`,
                      {
                        method: "DELETE",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email: customerInfo?.email }),
                      }
                    );
                    const deleteAbdOrderResult = await deleteAbdOrder.json();
                    console.log("Abandoned Order Deleted", deleteAbdOrderResult);
                  } catch (deleteError) {
                    console.warn("Failed to delete abandoned order:", deleteError);
                  }
                }

                navigate("/order-confirmation", {
                  state: {
                    orderId: data.orderId,
                    amount: total,
                  },
                });
              } else {
                alert("Payment successful but order creation failed. Please contact support.");
              }
            } catch (error) {
              console.error("Error creating order:", error);
              alert("Payment successful but order creation failed. Please contact support.");
            }
          },
          prefill: {
            name: customerInfo?.fullName,
            email: customerInfo?.email,
            contact: customerInfo?.phoneNumber,
          },
          theme: {
            color: "#ff8a9f",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error("Checkout error:", error);
        alert("Payment failed. Please try again.");
      } finally {
        setIsCheckingOut(false);
      }
    }
  };

  // Auto-scroll functionality for media
  useEffect(() => {
    if (cartItems[0]?.media.length > 1) {
      const interval = setInterval(() => {
        setCurrentMediaIndex((prev) => (prev + 1) % cartItems[0].media.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [cartItems])

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js").then(
      (result) => {
        if (result) {
          console.log("Razorpay script loaded successfully");
        }
      }
    );
  }, []);

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
          {/* <div className="absolute top-4 left-4">
            <div className="bg-white/90 rounded-full px-3 py-1 text-xs font-semibold text-[#ff8a9f] flex items-center gap-1">
              {currentMedia.type === 'video' ? <Play className="w-3 h-3" /> : <Heart className="w-3 h-3" />}
              {currentMedia.type === 'video' ? 'Video' : 'Image'}
            </div>
          </div> */}

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
                  <div className="space-y-3">
                    {bundles.map((bundle) => (
                      <button
                        key={bundle.id}
                        onClick={() => updateBundle(bundle.id)}
                        className={`w-full p-2 rounded-lg border-2 transition-all duration-300 text-left ${bundle.discountPercent === 25
                          ? 'ring-2 ring-red-400 ring-opacity-50 shadow-lg'
                          : ''
                          } ${selectedBundle === bundle.id
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
                                {bundle.discountPercent > 0 && (
                                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${bundle.discountPercent === 25
                                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse'
                                    : 'bg-gradient-to-r from-[#ff8a9f] to-[#ffabbb] text-white'
                                    }`}>
                                    {bundle.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-gray-600">{bundle.description}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-gray-900 text-sm">
                              ₹{bundle.price}
                            </div>
                            {bundle.savings > 0 && (
                              <div className="text-xs text-green-600">
                                Save ₹{bundle.savings.toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
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
                          ₹{(cartItems[0].price * cartItems[0].quantity).toFixed(2)}
                        </div>
                        {cartItems[0].savings > 0 && (
                          <div className="text-lg text-gray-500 line-through">
                            ₹{(cartItems[0].originalPrice * cartItems[0].quantity).toFixed(2)}
                          </div>
                        )}
                      </div>
                      {cartItems[0].savings > 0 && (
                        <div className="text-sm text-green-600 font-semibold">
                          Save ₹{(cartItems[0].savings * cartItems[0].quantity).toFixed(2)}
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

              {/* Customer Information Form & Order Summary */}
              <div className="space-y-4">
                {/* Customer Information Form */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#ffabbb]/20">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Customer Information</h3>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={customerInfo.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8a9f] focus:border-transparent transition-all duration-200 ${formErrors.fullName ? 'border-red-500' : 'border-[#ffabbb]/30'
                          }`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.fullName && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={customerInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8a9f] focus:border-transparent transition-all duration-200 ${formErrors.email ? 'border-red-500' : 'border-[#ffabbb]/30'
                          }`}
                        placeholder="Enter your email address"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={customerInfo.phoneNumber}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8a9f] focus:border-transparent transition-all duration-200 ${formErrors.phoneNumber ? 'border-red-500' : 'border-[#ffabbb]/30'
                          }`}
                        placeholder="Enter your phone number"
                      />
                      {formErrors.phoneNumber && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.phoneNumber}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Order Summary - Compact */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#ffabbb]/20">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Order Summary</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                    </div>

                    {totalSavings > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Savings</span>
                        <span className="font-semibold">-₹{totalSavings.toFixed(2)}</span>
                      </div>
                    )}

                    {/* Shipping - Commented Out */}
                    {/* <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div> */}

                    {/* Tax - Commented Out */}
                    {/* <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div> */}

                    <div className="border-t border-[#ffabbb]/20 pt-2">
                      <div className="flex justify-between text-lg font-bold text-gray-900">
                        <span>Total</span>
                        <span>₹{total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <CTAButton
                      className="w-full text-base py-2"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </CTAButton>
                  </div>

                  {/* Trust Badges - Minimal */}
                  <div className="mt-4 flex flex-col items-center justify-center space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Shield className="w-3 h-3 text-[#ff8a9f]" />
                      <span>Secure checkout</span>
                    </div>
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