import { Coffee, Laptop, Car, Sparkles } from 'lucide-react'

const LifestyleSection = () => {
  const lifestyles = [
    {
      id: 'student',
      title: 'Student Life',
      name: 'Ananya',
      description: 'From lectures to late-night study sessions',
      emoji: '👩‍🎓',
      icon: Coffee,
      background: 'from-[#ff8a9f] to-[#ffabbb]',
      features: ['All-day comfort', 'Never breaks', 'Instagram-worthy']
    },
    {
      id: 'professional',
      title: 'Professional',
      name: 'Riya',
      description: '9-to-9 at work, looking flawless',
      emoji: '👩‍💼',
      icon: Laptop,
      background: 'from-[#ffabbb] to-[#ff8a9f]',
      features: ['Executive style', 'Zero headaches', 'Meeting-ready']
    },
    {
      id: 'mom',
      title: 'Mom Life',
      name: 'Neha',
      description: 'Driving with kids, staying safe',
      emoji: '👩‍👧',
      icon: Car,
      background: 'from-[#ff8a9f] to-[#ffabbb]',
      features: ['Child-safe', 'Flexible design', 'Peace of mind']
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-[#ffabbb]/30 rounded-full px-4 py-2 text-sm font-semibold text-[#ff8a9f] shadow-md font-lora mb-6">
            <Sparkles className="w-4 h-4 text-[#ff8a9f]" />
            <span className='font-lora italic'>Lifestyle Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Made to Be
            <br />
            <span className="text-[#ff8a9f] font-lora italic">Admired</span> <span className="align-middle text-2xl">✨</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From coffee dates ☕ to office hours 💻 to late-night drives 🚗 — JellyClip bends with your life and keeps your look flawless.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mx-auto rounded-full mt-6"></div>
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
                      <div className="text-5xl">{lifestyle.emoji}</div>
                      <lifestyle.icon className="w-8 h-8 text-white/80" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{lifestyle.title}</h3>
                    <p className="text-white/90 font-medium">{lifestyle.name}</p>
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

        {/* Bottom Features */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100 p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                One Clip, Every Lifestyle
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Whether you're conquering the boardroom or chasing toddlers, JellyClip adapts to your world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Study Sessions</h4>
                <p className="text-gray-600 text-sm">All-nighters made comfortable</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Work Days</h4>
                <p className="text-gray-600 text-sm">Professional and pain-free</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🚗</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Safe Drives</h4>
                <p className="text-gray-600 text-sm">Flexible protection on the road</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Date Nights</h4>
                <p className="text-gray-600 text-sm">Effortlessly elegant</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-purple-600 text-lg font-medium">
            <span>💕</span>
            Live your life, love your clip
            <span>💕</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LifestyleSection 