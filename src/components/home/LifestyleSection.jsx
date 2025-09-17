import { Coffee, Laptop, Car, Sparkles } from 'lucide-react'
import CTAButton from '../CTAButton'

const LifestyleSection = () => {
  const lifestyles = [
    {
      id: 'student',
      title: 'Student Life',
      name: 'Ananya',
      age: 19,
      description: 'From lectures to late-night study sessions',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&h=300&q=80',
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
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300&q=80',
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
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80',
      icon: Car,
      background: 'from-[#ff8a9f] to-[#ffabbb]',
      features: ['Child-safe', 'Flexible design', 'Peace of mind']
    }
  ]

  return (
    <section className="py-8 px-4 md:py-24 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
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

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          From coffee dates ☕ to office hours 💻 to late-night drives 🚗 — JellyClip bends with your life and keeps your look flawless.
        </p>
      </div>

      {/* Lifestyle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {lifestyles.map((lifestyle, index) => (
          <div
            key={lifestyle.id}
            className="group hover:scale-105 transition-all duration-500"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-[#ffabbb]/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Header */}
              <div className={`bg-gradient-to-br ${lifestyle.background} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Real Image */}
                    <div className="relative">
                      <img
                        src={lifestyle.image}
                        alt={`${lifestyle.name} - ${lifestyle.title}`}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white/30 shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                        <lifestyle.icon className="w-3 h-3 text-gray-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{lifestyle.title}</h3>
                      <p className="text-white/90 font-medium">{lifestyle.name}, {lifestyle.age}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {lifestyle.description}
                </p>

                <div className="space-y-3">
                  {lifestyle.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${lifestyle.background} rounded-full`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div className={`h-2 bg-gradient-to-r ${lifestyle.background}`}></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default LifestyleSection 