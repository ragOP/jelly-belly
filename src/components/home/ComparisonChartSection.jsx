import { Check, X } from 'lucide-react'
import CTAButton from '../CTAButton'

const ComparisonChartSection = () => {
  const handleCTAClick = () => {
    console.log('Comparison CTA clicked - Choose JellyClip');
  };

  const features = [
    {
      feature: 'Breakable',
      regularClips: { text: 'Snaps easily', icon: Check, status: 'bad' },
      jellyClip: { text: 'Never breaks', icon: X, status: 'good' }
    },
    {
      feature: 'Sharp edges',
      regularClips: { text: 'Hurts scalp', icon: Check, status: 'bad' },
      jellyClip: { text: 'Soft & safe', icon: X, status: 'good' }
    },
    {
      feature: 'Dangerous in cars',
      regularClips: { text: 'Risky', icon: Check, status: 'bad' },
      jellyClip: { text: 'Flexible & safe', icon: X, status: 'good' }
    },
    {
      feature: 'Comfort',
      regularClips: { text: 'Headaches', icon: X, status: 'bad' },
      jellyClip: { text: 'All-day comfort', icon: Check, status: 'good' }
    },
    {
      feature: 'Style',
      regularClips: { text: 'Basic', icon: X, status: 'bad' },
      jellyClip: { text: '4 chic colors', icon: Check, status: 'good' }
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why <span className="text-[#ff8a9f] italic">JellyClip</span> Beats Every Other Clip
          </h2>
          <div className="w-24 h-1 bg-[#ff8a9f] mx-auto rounded-full"></div>
        </div>


        {/* Clean Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-12">
          {/* Simple Header */}
          <div className="bg-gray-900 px-6 py-6">
            <div className="grid grid-cols-3 gap-4 text-center items-center">
              <div>
                <h3 className="text-xl font-bold text-white">Feature</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-300">Regular Clips</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">JellyClip</h3>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {features.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 items-center px-6 py-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
              >
                {/* Feature Name */}
                <div className="text-center md:text-left">
                  <span className="font-semibold text-gray-900 text-lg">{item.feature}</span>
                </div>

                {/* Regular Clips */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3">
                    <item.regularClips.icon className={`w-5 h-5 ${item.regularClips.status === 'bad' ? 'text-red-500' : 'text-green-500'
                      }`} />
                    <span className={`text-base font-medium ${item.regularClips.status === 'bad' ? 'text-red-600' : 'text-green-600'
                      }`}>
                      {item.regularClips.text}
                    </span>
                  </div>
                </div>

                {/* JellyClip */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3">
                    <item.jellyClip.icon className={`w-5 h-5 ${item.jellyClip.status === 'good' ? 'text-green-500' : 'text-red-500'
                      }`} />
                    <span className={`text-base font-medium ${item.jellyClip.status === 'good' ? 'text-green-600' : 'text-red-600'
                      }`}>
                      {item.jellyClip.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <CTAButton
            onClick={handleCTAClick}
            size="lg"
            className="px-8 py-4 text-lg font-bold"
          >
            Choose JellyClip Today 🚀
          </CTAButton>
        </div>

        <video 
          src="/clip-vid-main.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[24rem] object-cover shadow-2xl"
        />
      </div>
    </section>
  )
}

export default ComparisonChartSection
