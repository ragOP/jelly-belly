import { Shield, AlertTriangle, ArrowRight, X } from 'lucide-react'

const SafetyHighlightSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span className='font-lora italic'>Critical Safety Alert</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              When a <span className="text-red-600 font-lora italic">Hair Clip</span>
              <br />
              <span className="text-red-500 font-lora italic">Turns Dangerous</span> <span className="align-middle text-2xl">⚠️</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            {/* Story Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-red-100 overflow-hidden mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <div className="font-bold text-red-600 text-sm uppercase tracking-wide">Real Story</div>
                      <div className="text-gray-600 text-sm">NYPost, 2023</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                    "In 2023, a woman's claw clip pierced her skull in a car crash. Regular clips are rigid and dangerous."
                  </blockquote>
                  
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 mb-8">
                    <h3 className="font-bold text-gray-900 text-lg mb-3">The Hidden Danger</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Rigid hair clips become projectiles in accidents. They don't bend, they break—and they can break you too. 
                      Your hair accessory shouldn't be a safety hazard.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-3">The JellyClip Difference</h3>
                    <p className="text-gray-700 leading-relaxed">
                      JellyClip bends safely under pressure—keeping you protected and stylish at the same time. 
                      It's not just a hair clip, it's peace of mind.
                    </p>
                  </div>
                </div>

                {/* Visual */}
                <div className="bg-gradient-to-br from-red-100 to-orange-100 p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative mb-8">
                      {/* Danger Illustration */}
                      <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                        <span className="text-4xl">⚠️</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full animate-ping"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't Risk It</h3>
                    <p className="text-gray-700 mb-6">
                      Your safety is worth more than saving a few dollars on a cheap clip.
                    </p>
                    
                    {/* Safety Stats */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Rigid clips = Impact hazard</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">JellyClip = Flexible safety</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Regular Clips */}
              <div className="bg-red-50 rounded-3xl p-8 border border-red-100 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💥</span>
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-4">Regular Clips</h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Rigid and unforgiving</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Can cause injury in accidents</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Sharp edges and hard plastic</span>
                  </li>
                </ul>
              </div>

              {/* JellyClip */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">JellyClip</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Flexible and safe</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Bends under pressure</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Soft, rounded edges</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Your Safety Can't Wait
                </h3>
                <p className="text-orange-100 text-lg mb-8 leading-relaxed">
                  Don't let your hair clip become a hazard. Make the switch to JellyClip today and protect yourself and your loved ones.
                </p>
                <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 text-lg">
                  <Shield className="w-6 h-6" />
                  Switch to JellyClip
                  <ArrowRight className="w-6 h-6" />
                </button>
                
                <div className="mt-6 flex items-center justify-center gap-6 text-orange-100 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
                    Free Shipping
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
                    30-Day Returns
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
                    Lifetime Warranty
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SafetyHighlightSection 