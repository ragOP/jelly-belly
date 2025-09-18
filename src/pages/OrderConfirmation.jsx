import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Star, Sparkles, Package, ArrowLeft, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import Header from '../components/Header';
import CTAButton from '../components/CTAButton';
import { ROUTES } from '../router/routes';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderId, amount } = location.state || {};

  // Fallback values for development/testing
  // const orderId = "1234567890";
  // const amount = 389;
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7] selection:bg-[#ffabbb]/20 selection:text-gray-800">
      <Header />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffabbb]/10 via-white/30 to-[#ff8a9f]/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,171,187,0.1),transparent_50%)]"></div>

        {/* Floating JellyClip Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Heart 
              className={`w-3 h-3 ${i % 3 === 0 ? 'text-[#ffabbb]' : i % 3 === 1 ? 'text-[#ff8a9f]' : 'text-[#ff6b85]'} opacity-60`}
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-16">
        {/* Success Animation Container */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ffabbb]/30 via-[#ff8a9f]/30 to-[#ffabbb]/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative bg-white/40 backdrop-blur-xl rounded-full p-6 border border-[#ffabbb]/30 shadow-xl">
              <CheckCircle className="w-16 h-16 text-[#ff8a9f] animate-bounce" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/40 backdrop-blur-sm border border-[#ffabbb]/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#ff8a9f] rounded-full animate-pulse"></div>
              <span className="text-gray-700 text-sm font-medium">Order Confirmed</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              <span className="text-gray-800">Thank You!</span>
              <span className="bg-gradient-to-r from-[#ff8a9f] via-[#ff6b85] to-[#ff8a9f] bg-clip-text text-transparent pl-2">JellyClips Ordered</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Your JellyClips have been successfully ordered! We're preparing your order with love and will ship it to you soon.
            </p>
          </div>

          {/* Order Details Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#ffabbb]/20 via-[#ff8a9f]/20 to-[#ffabbb]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-[#ffabbb]/30 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">Order Details</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-[#ff8a9f] fill-current" />
                    <Star className="w-4 h-4 text-[#ff8a9f] fill-current" />
                    <Star className="w-4 h-4 text-[#ff8a9f] fill-current" />
                    <Star className="w-4 h-4 text-[#ff8a9f] fill-current" />
                    <Star className="w-4 h-4 text-[#ff8a9f] fill-current" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm">Order ID</p>
                    <p className="text-gray-800 font-mono">{orderId || "Loading..."}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm">Product</p>
                    <p className="text-gray-800">JellyClip Hair Clips</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm">Amount Paid</p>
                    <p className="text-gray-800 font-semibold">₹{amount || "0.00"}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm">Status</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600 font-medium">Confirmed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-gray-800">What's Next?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ffabbb]/20 to-[#ff8a9f]/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-white/40 backdrop-blur-xl rounded-xl p-6 border border-[#ffabbb]/30 text-center shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff8a9f] to-[#ff6b85] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-semibold mb-2">Order Processing</h4>
                  <p className="text-gray-600 text-sm">We're carefully preparing your JellyClips for shipment</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff8a9f]/20 to-[#ff6b85]/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-white/40 backdrop-blur-xl rounded-xl p-6 border border-[#ffabbb]/30 text-center shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b85] to-[#ff8a9f] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-semibold mb-2">Fast Shipping</h4>
                  <p className="text-gray-600 text-sm">Your order will be shipped within 1-2 business days</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b85]/20 to-[#ffabbb]/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-white/40 backdrop-blur-xl rounded-xl p-6 border border-[#ffabbb]/30 text-center shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ffabbb] to-[#ff8a9f] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-semibold mb-2">Enjoy Your Clips</h4>
                  <p className="text-gray-600 text-sm">Style your hair with confidence and comfort</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to={ROUTES.HOME} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-white/25 to-white/15 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <button className="relative bg-white/40 backdrop-blur-xl rounded-full border border-[#ffabbb]/30 shadow-xl text-gray-800 px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
            </Link>
            
            <CTAButton className="w-full sm:w-auto">
              Order More JellyClips
            </CTAButton>
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4 pt-8 border-t border-[#ffabbb]/30">
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#ff8a9f]" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-[#ff8a9f]" />
                <span>Fast Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-4 h-4 text-[#ff8a9f]" />
                <span>Easy Returns</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Need help? Contact us at{' '}
              <span className="text-[#ff8a9f] font-medium">support@jellyclip.com</span>
            </p>
            <p className="text-gray-500 text-xs">
              You will receive a confirmation email shortly with tracking information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
