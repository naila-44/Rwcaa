"use client";
import React from "react";
const ServicesSection = () => {
  return (
    <section className="border-t py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 gap-12 text-center">
          <div className="w-64 flex-shrink-0 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full" 
                 style={{ background: 'linear-gradient(180deg, #FFCCB2 0%, #FF758C 100%)' }}>
              <img src="/icons/images.png" alt="Body Intelligent" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-[#1D4077] mb-2">Your body is intelligent.</h3>
            <p className="text-gray-700 text-sm md:text-base">
              All systems in the body are interconnected and guided by the brain and nervous system. 
              When injury or stress, past or present, goes unresolved, it can disrupt this natural healing process.
            </p>
          </div>

          <div className="w-64 flex-shrink-0 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full" 
                 style={{ background: 'linear-gradient(180deg, #FFCCB2 0%, #FF758C 100%)' }}>
              <img src="/icons/download.png" alt="Symptoms" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-[#1D4077] mb-2">Symptoms are messengers.</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Pain, fatigue, anxiety, and digestive troubles often point to unresolved physical, chemical, or emotional stress.
            </p>
          </div>

          <div className="w-64 flex-shrink-0 animate-fadeIn" style={{ animationDelay: "1s" }}>
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full" 
                 style={{ background: 'linear-gradient(180deg, #FFCCB2 0%, #FF758C 100%)' }}>
              <img src="/icons/arm.png" alt="True Health" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-[#1D4077] mb-2">True health means resilience.</h3>
            <p className="text-gray-700 text-sm md:text-base ">
              We define wellness by your body's ability to recover and adapt to life's stressors. 
              When that ability is restored, many chronic health issues can begin to resolve.
            </p>
          </div>
        </div>
      </div>
      <section className="relative py-20 md:py-32 overflow-hidden mt-16 "
        style={{ background: 'linear-gradient(135deg, rgb(29, 64, 119) 0%, rgb(45, 80, 135) 50%, rgb(53, 102, 178) 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" style={{ opacity: "1", transform: "none" }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">How We Can Help</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Since 2010, we've helped thousands of people find real, lasting relief and rediscover what it feels like to truly feel good again.
            </p>
          </div>

          <div className="max-w-7x1 mx-auto">
          
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl  " />
                  <img
                    src="/icons/img.jpg" 
                    alt="How We Can Help"
                    className="relative rounded-3xl shadow-2xl w-[600px] h-[600px]  object-cover ml-0"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 cursor-pointer">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                  <div className="bg-white/10  sm:flex-row backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                    <div className="flex items-center gap-2 mb-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}  fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-heart w-5 h-5 text-white flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M 19 14 c 1.49 -1.46 3 -3.21 3 -5.5 A 5.5 5.5 0 0 0 16.5 3 c -1.76 0 -3 0.5 -4.5 2 c -1.5 -1.5 -2.74 -2 -4.5 -2 A 5.5 5.5 0 0 0 2 8.5 c 0 2.3 1.5 4.05 3 5.5 l 7 7 Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8" />
                      </svg>
                      <h3 className="text-white font-bold text-base">Pain Relief</h3>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">Decreased or elimination of pain</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-zap w-5 h-5 text-white flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M 4 14 a 1 1 0 0 1 -0.78 -1.63 l 9.9 -10.2 a 0.5 0.5 0 0 1 0.86 0.46 l -1.92 6.02 A 1 1 0 0 0 13 10 h 7 a 1 1 0 0 1 0.78 1.63 l -9.9 10.2 a 0.5 0.5 0 0 1 -0.86 -0.46 l 1.92 -6.02 A 1 1 0 0 0 11 14 Z" />
                      </svg>
                      <h3 className="text-white font-bold text-base">Quick Recovery</h3>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">Fast recovery from injury</p>
                    
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-target w-5 h-5 text-white flex-shrink-0">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M 9.937 15.5 A 2 2 0 0 0 8.5 14.063 l -6.135 -1.582 a 0.5 0.5 0 0 1 0 -0.962 L 8.5 9.936 A 2 2 0 0 0 9.937 8.5 l 1.582 -6.135 a 0.5 0.5 0 0 1 0.963 0 L 14.063 8.5 A 2 2 0 0 0 15.5 9.937 l 6.135 1.581 a 0.5 0.5 0 0 1 0 0.964 L 15.5 14.063 a 2 2 0 0 0 -1.437 1.437 l -1.582 6.135 a 0.5 0.5 0 0 1 -0.963 0 Z" />
                      </svg>
                      <h3 className="text-white font-bold text-base">Peak Performance</h3>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">Improved personal bests</p>
                    
                  </div>
                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-sparkles w-5 h-5 text-white flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l1 5a2 2 0 002 2h6a2 2 0 002-2l1-5h2" />
                      </svg>
                      <h3 className="text-white font-bold text-base">Energy Boost</h3>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">Enhanced energy and youthfulness</p>
                    
                  </div>
                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-smile w-5 h-5 text-white flex-shrink-0">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l1 5a2 2 0 002 2h6a2 2 0 002-2l1-5h2" />
                      </svg>
                      <h3 className="text-white font-bold text-base">Wellbeing</h3>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">Overall feeling of Wellness</p>
                   
                  </div>
                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-brain w-5 h-5 text-white flex-shrink-0">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l1 5a2 2 0 002 2h6a2 2 0 002-2l1-5h2" />
                      </svg>
                      <h3 className="text-white font-bold text-base">Mental Health</h3>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">Reduced anxiety and depression</p>
                   
                  </div>
                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-scale w-5 h-5 text-white flex-shrink-0">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l1 5a2 2 0 002 2h6a2 2 0 002-2l1-5h2" />
                      </svg>
                      <h3 className="text-white font-bold text-base">Hormonal Balance </h3>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">Improved hormonal health</p>
                    
                  </div> 
                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-moon w-5 h-5 text-white flex-shrink-0">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l1 5a2 2 0 002 2h6a2 2 0 002-2l1-5h2" />
                      </svg>
                      <h3 className="text-white font-bold text-base">Better Sleep</h3>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">Improved sleep and restoration</p>
                    
                  </div>
                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-shield w-5 h-5 text-white flex-shrink-0">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l1 5a2 2 0 002 2h6a2 2 0 002-2l1-5h2" />
                      </svg>
                      <h3 className="text-white font-bold text-base">Immunity</h3>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">Stronger immune system</p>
                    
                  </div>
                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="lucide lucide-leaf w-5 h-5 text-white flex-shrink-0">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l1 5a2 2 0 002 2h6a2 2 0 002-2l1-5h2" />
                      </svg>
                      <h3 className="text-white font-bold text-base">Reduced Allergies</h3>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">Decreased allergic reactions</p>
                    
                  </div>
                   <a
  href="/services" 
  className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-white text-[#1D4077] font-bold rounded-full border-2 border-white px-10 h-14 shadow-xl hover:shadow-2xl transition-all duration-300 text-base"
  aria-label="Explore Treatments"
>
  <svg
    className="w-4 h-4 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l1 5a2 2 0 002 2h6a2 2 0 002-2l1-5h2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8" />
  </svg>
  Explore Our Treatments
</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServicesSection;
