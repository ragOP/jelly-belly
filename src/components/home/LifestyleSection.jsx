import { Coffee, Laptop, Car, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import CTAButton from '../CTAButton'

const LifestyleSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const lifestyles = [
    {
      id: 'student',
      title: 'Student Life',
      name: 'Ananya',
      age: 19,
      description: 'From lectures to late-night study sessions',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
      icon: Coffee,
      background: 'from-[#ff8a9f] to-[#ffabbb]',
      features: ['All-day comfort', 'Never breaks', 'Instagram-worthy']
    },
    {
      id: 'professional',
      title: 'Professional',
      name: 'Riya',
      age: 28,
      description: '9-to-9 at work, looking flawless',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
      icon: Laptop,
      background: 'from-[#ffabbb] to-[#ff8a9f]',
      features: ['Executive style', 'Zero headaches', 'Meeting-ready']
    },
    {
      id: 'mom',
      title: 'Mom Life',
      name: 'Neha',
      age: 32,
      description: 'Driving with kids, staying safe',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80',
      icon: Car,
      background: 'from-[#ff8a9f] to-[#ffabbb]',
      features: ['Child-safe', 'Flexible design', 'Peace of mind']
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % lifestyles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + lifestyles.length) % lifestyles.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % lifestyles.length)
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(interval)
  }, [lifestyles.length])

  return (
    <section className="py-8 px-4 md:py-16 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-[#ffabbb]/30 rounded-full px-4 py-2 text-sm font-semibold text-[#ff8a9f] shadow-md font-lora mb-6">
          <Sparkles className="w-4 h-4 text-[#ff8a9f]" />
          <span className='font-lora italic'>Lifestyle Collection</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Made to Be
          <br />
          <span className="text-[#ff8a9f] font-lora italic">Admired</span> <span className="align-middle text-2xl">✨</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mx-auto rounded-full my-4"></div>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          From coffee dates ☕ to office hours 💻 to late-night drives 🚗 — JellyClip bends with your life and keeps your look flawless.
        </p>
      </div>

      {/* Carousel Container - Full Width */}
      <div className="relative w-full">
        {/* Navigation Arrows - Positioned at edges */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-xl border border-[#ffabbb]/30 hover:bg-white hover:shadow-2xl transition-all duration-300 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#ff8a9f]" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-xl border border-[#ffabbb]/30 hover:bg-white hover:shadow-2xl transition-all duration-300 z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-[#ff8a9f]" />
        </button>

        {/* Carousel Wrapper - No extra padding */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {lifestyles.map((lifestyle, index) => (
              <div key={lifestyle.id} className="w-full flex-shrink-0">
                <div className="group hover:scale-105 transition-all duration-500">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#ffabbb]/20 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Header */}
                    <div className={`bg-gradient-to-br ${lifestyle.background} p-4 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-6">
                          {/* Larger Image */}
                          <div className="relative">
                            <img
                              src={lifestyle.image}
                              alt={`${lifestyle.name} - ${lifestyle.title}`}
                              className="w-20 h-20 rounded-full object-cover border-4 border-white/30 shadow-lg"
                              loading="lazy"
                              onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&h=400&q=80'
                              }}
                            />
                            {/* <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                              <lifestyle.icon className="w-4 h-4 text-gray-600" />
                            </div> */}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{lifestyle.title}</h3>
                            <p className="text-white/90 text-lg font-medium">{lifestyle.name}, {lifestyle.age}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1">
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {lifestyle.description}
                      </p>

                      <div className="space-y-3">
                        {lifestyle.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${lifestyle.background} rounded-full flex-shrink-0`}></div>
                            <span className="text-gray-700 text-base font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className={`h-2 bg-gradient-to-r ${lifestyle.background}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 mb-2 gap-2">
          {lifestyles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#ff8a9f] scale-125' 
                  : 'bg-[#ffabbb]/50 hover:bg-[#ffabbb]/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LifestyleSection
