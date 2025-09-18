import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const SocialProofSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (emblaApi) {
      onInit(emblaApi)
      onSelect(emblaApi)
      emblaApi.on('reInit', onInit)
      emblaApi.on('select', onSelect)
    }
  }, [emblaApi, onInit, onSelect])

  const testimonials = [
    {
      name: "Riya",
      age: 24,
      role: "professional",
      quote: "9-to-9 at work and no headaches. Finally a clip that works as hard as me.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80",
      rating: 5,
      verified: true
    },
    {
      name: "Neha",
      age: 34,
      role: "mom",
      quote: "Even with my daughter pulling at it, it never broke. I feel safer driving now.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80",
      rating: 5,
      verified: true
    },
    {
      name: "Ananya",
      age: 19,
      role: "student",
      quote: "Every girl in college asks me where I got this. It's literally cute AF and unbreakable.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80",
      rating: 5,
      verified: true
    }
  ]

  const stats = [
    {
      percentage: "92%",
      description: "felt zero scalp pain after all-day wear",
      icon: "😌",
      color: "from-[#ff8a9f] to-[#ffabbb]"
    },
    {
      percentage: "89%",
      description: "said their hair stayed perfectly in place",
      icon: "✨",
      color: "from-[#ffabbb] to-[#ff8a9f]"
    },
    {
      percentage: "98%",
      description: "stopped breaking clips completely",
      icon: "💪",
      color: "from-[#ff8a9f] to-[#ffabbb]"
    }
  ]

  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-[#ffabbb]/30 rounded-full px-4 py-2 text-sm font-semibold text-[#ff8a9f] shadow-md font-lora mb-6">
            <span className="w-2 h-2 bg-[#ff8a9f] rounded-full animate-pulse"></span>
            <span className='font-lora italic'>Trusted by thousands</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Real Stories, <span className="text-[#ff8a9f] font-lora italic">Real Results</span>
            <span className="align-middle text-2xl ml-2">✨</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mx-auto rounded-full"></div>
        </div>

        {/* Beautiful Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#ffabbb]/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ff8a9f]/10 to-[#ffabbb]/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-[#ffabbb]/10 to-[#ff8a9f]/10 rounded-full translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="flex flex-row items-align gap-6 relative z-10">
                {/* Icon */}
                {/* <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div> */}

                {/* Percentage */}
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.percentage}
                </div>

                {/* Description */}
                <div className="flex items-start gap-3">
                  <p className="text-gray-700 text-base leading-relaxed font-medium font-lora group-hover:text-gray-800 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="text-center mb-10">
            <p className="text-gray-600 font-bold text-2xl max-w-2xl mx-auto font-lora">
              Hear from the girls who made the switch to JellyClip
            </p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-[#ffabbb]/20 flex items-center justify-center hover:bg-[#ff8a9f] hover:text-white transition-all duration-300 -ml-5"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-[#ffabbb]/20 flex items-center justify-center hover:bg-[#ff8a9f] hover:text-white transition-all duration-300 -mr-5"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="embla__slide flex-[0_0_100%]">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#ffabbb]/20 h-full hover:shadow-xl transition-all duration-300 mx-2 relative overflow-hidden max-w-md mx-auto">
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ffe1e7] to-[#fff5f7] rounded-full -translate-y-10 translate-x-10"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-[#fff5f7] to-[#ffe1e7] rounded-full translate-y-8 -translate-x-8"></div>

                      {/* Quote Icon */}
                      <div className="relative z-10 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#ff8a9f] to-[#ffabbb] rounded-full flex items-center justify-center mb-4">
                          <Quote className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative z-10 mb-6">
                        <p className="text-gray-800 text-lg leading-relaxed font-medium font-lora italic">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="relative z-10 flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Author */}
                      <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-[#ffabbb]/20">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-3 border-[#ff8a9f]/30 shadow-lg"
                            loading="lazy"
                            onError={(e) => {
                              e.target.src = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&h=300&q=80'
                            }}
                          />
                          {testimonial.verified && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#ff8a9f] rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-[#ff8a9f] font-medium text-sm capitalize font-lora">
                            {testimonial.age}, {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                    ? 'bg-[#ff8a9f] scale-125'
                    : 'bg-[#ffabbb] hover:bg-[#ff8a9f]/70'
                  }`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default SocialProofSection
