import { Shield, AlertTriangle, ArrowRight, X } from 'lucide-react'
import CTAButton from '../CTAButton'

const SafetyHighlightSection = () => {
  const handleCTAClick = () => {
    console.log('Final CTA clicked - Get Yours Now');
  };

  return (
    <section className="py-8 md:py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
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
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-red-100 overflow-hidden mb-8">
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

                </div>
              </div>
            </div>

            <CTAButton
              onClick={handleCTAClick}
              size="lg"
              className="bg-white w-full text-[#ff8a9f] hover:bg-gray-50 font-bold px-8 py-4 text-lg shadow-xl"
            >
              👉 Switch to JellyClip
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SafetyHighlightSection 