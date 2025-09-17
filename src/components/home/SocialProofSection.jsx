import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Star, Quote } from 'lucide-react'

const SocialProofSection = () => {
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  }
  
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true,
    },
    [Autoplay(autoplayOptions)]
  )

  const testimonials = [
    {
      name: "Riya",
      age: 24,
      role: "professional",
      quote: "9-to-9 at work and no headaches. Finally a clip that works as hard as me.",
      avatar: "👩‍💼",
      rating: 5,
      verified: true
    },
    {
      name: "Neha", 
      age: 34,
      role: "mom",
      quote: "Even with my daughter pulling at it, it never broke. I feel safer driving now.",
      avatar: "👩‍👧",
      rating: 5,
      verified: true
    },
    {
      name: "Ananya",
      age: 19, 
      role: "student",
      quote: "Every girl in college asks me where I got this. It's literally cute AF and unbreakable.",
      avatar: "👩‍🎓",
      rating: 5,
      verified: true
    }
  ]

  const stats = [
    { percentage: "92%", description: "felt zero scalp pain after all-day wear", icon: "😌" },
    { percentage: "89%", description: "said their hair stayed perfectly in place", icon: "✨" },
    { percentage: "98%", description: "stopped breaking clips completely", icon: "💪" }
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7] overflow-hidden">
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-[#ffabbb]/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#ff8a9f] to-[#ffabbb] bg-clip-text text-transparent mb-3">
                {stat.percentage}
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium font-lora">
                {stat.description}
              </p>
              <div className="mt-3 w-12 h-1 bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mx-auto rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Real Stories, Real Results
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-lora">
              Hear from the girls who made the switch to JellyClip
            </p>
          </div>

          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#ffabbb]/20 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 mx-2 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ffe1e7] to-[#fff5f7] rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-[#fff5f7] to-[#ffe1e7] rounded-full translate-y-8 -translate-x-8"></div>
                    
                    {/* Quote Icon */}
                    <div className="relative z-10 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#ff8a9f] to-[#ffabbb] rounded-full flex items-center justify-center mb-4">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Quote */}
                    <div className="relative z-10 mb-6">
                      <p className="text-gray-800 text-base leading-relaxed font-medium font-lora italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    {/* Rating */}
                    <div className="relative z-10 flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Author */}
                    <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-[#ffabbb]/20">
                      <div className="text-3xl">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-bold text-gray-900 text-lg">
                            {testimonial.name}
                          </div>
                          {testimonial.verified && (
                            <div className="w-5 h-5 bg-[#ff8a9f] rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
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

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 bg-[#ffabbb] rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: index === 0 ? '#ff8a9f' : '#ffabbb',
                  transform: index === 0 ? 'scale(1.2)' : 'scale(1)'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-[#ff8a9f] text-lg font-medium font-lora">
            <span>✨</span>
            Join thousands of happy customers
            <span>✨</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
