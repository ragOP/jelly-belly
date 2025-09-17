import CTAButton from '../CTAButton'

const ComparisonChartSection = () => {
  const handleCTAClick = () => {
    console.log('Comparison CTA clicked - Choose JellyClip');
  };

  const features = [
    {
      feature: 'Breakable',
      regularClips: { text: '✅ Snaps easily', status: 'bad' },
      jellyClip: { text: '❌ Never breaks', status: 'good' }
    },
    {
      feature: 'Sharp edges',
      regularClips: { text: '✅ Hurts scalp', status: 'bad' },
      jellyClip: { text: '❌ Soft & safe', status: 'good' }
    },
    {
      feature: 'Dangerous in cars',
      regularClips: { text: '✅ Risky', status: 'bad' },
      jellyClip: { text: '❌ Flexible & safe', status: 'good' }
    },
    {
      feature: 'Comfort',
      regularClips: { text: '❌ Headaches', status: 'bad' },
      jellyClip: { text: '✅ All-day comfort', status: 'good' }
    },
    {
      feature: 'Style',
      regularClips: { text: '❌ Basic', status: 'bad' },
      jellyClip: { text: '✅ 4 chic colors', status: 'good' }
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7]">
      <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why <span className="text-[#ff8a9f] italic">JellyClip</span> Wins Every Time
          </h2>
          <div className="w-24 h-1 bg-[#ff8a9f] mx-auto rounded-full"></div>
        </div>

        {/* Clean Comparison Table - No Cards */}
        <div className="bg-white  shadow-xl overflow-hidden border border-gray-200 mb-8">
          {/* Header */}
          <div className="bg-gray-900 px-2 py-4">
            <div className="grid grid-cols-3 gap-2 text-center items-center">
              <div>
                <h3 className="text-base font-bold text-white">Feature</h3>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Regular Clips</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-300">JellyClip</h3>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {features.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-2 items-center px-2 py-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
              >
                {/* Feature Name */}
                <div className="text-center md:text-left">
                  <span className="font-semibold text-gray-900 text-sm">{item.feature}</span>
                </div>

                {/* Regular Clips */}
                <div className="text-center">
                  <span className={`text-sm font-medium ${item.regularClips.status === 'bad' ? 'text-red-600' : 'text-green-600'
                    }`}>
                    {item.regularClips.text}
                  </span>
                </div>

                {/* JellyClip */}
                <div className="text-center">
                  <span className={`text-base font-medium ${item.jellyClip.status === 'good' ? 'text-green-600' : 'text-red-600'
                    }`}>
                    {item.jellyClip.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <CTAButton
            onClick={handleCTAClick}
            size="lg"
            className="px-8 py-4 text-lg font-bold"
          >
            Choose JellyClip Today 🚀
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

export default ComparisonChartSection
