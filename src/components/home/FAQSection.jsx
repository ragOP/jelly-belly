import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import CTAButton from '../CTAButton'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0)

  const handleCTAClick = () => {
    console.log('FAQ CTA clicked - Get Answers Now');
  };

  const faqs = [
    {
      question: "Is it really unbreakable?",
      answer: "Yes, JellyClip bends without snapping. Our flexible material is designed to withstand pressure and impact while maintaining its shape and functionality. Thousands of customers have tested this daily!"
    },
    {
      question: "Will it slip on my hair?",
      answer: "Not at all! JellyClip works perfectly on thin, thick, curly, or straight hair. The flexible design creates the perfect grip without being too tight or too loose."
    },
    {
      question: "Is it safe while driving?",
      answer: "Absolutely — it bends under impact, unlike rigid clips. This flexibility makes it much safer in case of accidents, as demonstrated by safety studies comparing flexible vs. rigid hair accessories."
    },
    {
      question: "Is it kid-friendly?",
      answer: "100%. No sharp edges, safe for kids to handle. The soft, rounded design means no cuts or scratches, and the flexible material won't hurt if pulled or twisted."
    },
    {
      question: "How long does it last?",
      answer: "JellyClip is built to last years with daily use. Our flexible material maintains its elasticity and grip over time, unlike traditional clips that weaken and break after weeks."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee and lifetime warranty. If you're not completely satisfied, return it for a full refund - no questions asked."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#fff5f7] via-[#fffafd] to-[#ffe1e7] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#ff8a9f]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#ffabbb]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-[#ffabbb]/30 rounded-full px-4 py-2 text-sm font-semibold text-[#ff8a9f] shadow-md font-lora mb-6">
            <HelpCircle className="w-4 h-4 text-[#ff8a9f]" />
            <span className='font-lora italic'>Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-[#ff8a9f] font-lora italic">Frequently Asked</span>
            <br />
            <span className="text-[#ffabbb] font-lora italic">Questions</span> <span className="align-middle text-2xl">❓</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Everything you need to know about JellyClip
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mx-auto rounded-full"></div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#ffabbb]/20 overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className="w-full p-6 text-left flex items-start justify-between hover:bg-[#ffe1e7]/30 transition-colors duration-200"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight group-hover:text-[#ff8a9f] transition-colors duration-200">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      openFAQ === index 
                        ? 'bg-[#ff8a9f] text-white' 
                        : 'bg-[#ffe1e7] text-[#ff8a9f] group-hover:bg-[#ff8a9f] group-hover:text-white'
                    }`}>
                      {openFAQ === index ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <div className="bg-gradient-to-r from-[#fff5f7] to-[#ffe1e7] rounded-xl p-4 border-l-4 border-[#ff8a9f]">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-[#ffabbb]/20 p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why <span className="text-[#ff8a9f] font-lora italic">50,000+</span> Customers Choose JellyClip
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff8a9f] to-[#ffabbb] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">💪</span>
                </div>
                <div className="text-3xl font-bold text-[#ff8a9f] mb-2">99%</div>
                <div className="text-gray-700 font-medium">Unbreakable Rating</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff8a9f] to-[#ffabbb] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">😌</span>
                </div>
                <div className="text-3xl font-bold text-[#ff8a9f] mb-2">95%</div>
                <div className="text-gray-700 font-medium">All-Day Comfort</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff8a9f] to-[#ffabbb] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div className="text-3xl font-bold text-[#ff8a9f] mb-2">100%</div>
                <div className="text-gray-700 font-medium">Safety Tested</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#ff8a9f] to-[#ffabbb] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-white/5 opacity-50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Our customer support team is here to help you make the right choice. Get personalized answers to all your JellyClip questions.
              </p>
              <CTAButton
                onClick={handleCTAClick}
                size="lg"
                className="bg-white text-[#ff8a9f] hover:bg-gray-50 font-bold px-8 py-4 text-lg shadow-xl"
              >
                Get Your Questions Answered 💬
              </CTAButton>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-pink-100 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Expert Advice</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Quick Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection 