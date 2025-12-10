"use client";

import Image from "next/image";
import React from "react";

const ResourcesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
     
      <section
        className="relative md:py-32 lg:py-40 py-24 text-center text-white"
        style={{
          backgroundImage: "url('/icons/smile.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/25 to-black/10" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-sm mb-6">
              <a
                className="text-white/80 hover:text-white transition-colors"
                href="/"
              >
                Home
              </a>
              <span className="text-white/60 mx-2">/</span>
              <span className="text-white font-medium">Resources</span>
            </nav>

            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-bold text-white uppercase tracking-wide">
                Health Education Center
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Your Guide to<br /> Better Health
            </h1>

            <p className="text-lg md:text-2xl mb-8 text-white/95 drop-shadow-lg leading-relaxed max-w-3xl mx-auto">
            Evidence-based insights and expert guidance to help you<br></br> understand your body's healing potential and take control<br></br> of your wellness journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="inline-flex items-center justify-center gap-2 font-medium text-white px-6 py-3 bg-[#1D4077] rounded-lg hover:bg-[#16315a] transition"
                href="/new-patients"
              >
                Schedule a Consultation
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 font-medium text-white px-6 py-3 bg-[#1D4077] rounded-lg hover:bg-[#16315a] transition"
                href="/why-rwc"
              >
                Our Approach
              </a>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-2">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D4077]">
                  Education is the Foundation of Healing
                </h2>

                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
           
           At Restorative Wellness Center, we believe that when you<br></br> understand how your body works and what it needs to heal, you <br></br>become an empowered partner in your own recovery.<br></br>

Our comprehensive resource library provides you with evidence<br></br>-based information about chiropractic care, trauma healing,<br></br> neurological optimization, and holistic wellness—everything you <br></br>need to make informed decisions about your health.
                </p>

                <div className="flex items-start gap-3 p-6 bg-red-50 rounded-xl border-l-4 border-red-600">
                  <div>
                    <h2
                      className="font-bold text-lg mb-2"
                      style={{ color: "rgb(0,29,71)" }}
                    >
                      Did you Know?
                    </h2>
                    <p className="text-gray-700">
                     Your body has an innate ability to heal itself when interference<br></br> is removed and proper function is restored. Our resources help<br></br> you understand this natural healing process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  alt="Restore Wellness Center Team"
                  className="rounded-2xl shadow-2xl w-full"
                  src="/icons/img.jpg"
                  width={600}
                  height={400}
                 
                />
                <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <p className="text-3xl font-bold mb-1">15+ Years</p>
                  <p className="text-gray-700 font-medium">
                  Serving Ann Arbor with holistic <br></br>care since 2010
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 space-y-20">
    
   
    <div className="grid lg:grid-cols-2 gap-12 items-center">
    
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="/icons/PA.jpg"
          alt="Understanding Trauma"
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute top-4 left-4 bg-red-400 rounded-full p-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
          </svg>
        </div>
      </div>

  
      <div className="mt-8 lg:mt-0">
        <span className="text-red-400 font-bold uppercase text-sm flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Featured Topic
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-4">
          Understanding Trauma & Healing
        </h2>
        <p className="text-gray-700 mb-6">
          Explore how physical, emotional, and chemical trauma affects<br></br> your health and how to heal.
        </p>

       
        <div className="space-y-4">
          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Physical Trauma Recovery</h3>
              <p className="text-gray-600 text-sm">Understanding and recovering from physical injuries and accidents</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>

          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Emotional Trauma Healing</h3>
              <p className="text-gray-600 text-sm">How unresolved emotional stress affects physical health</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>

          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Chemical Trauma & Toxins</h3>
              <p className="text-gray-600 text-sm">The impact of environmental toxins on your wellbeing</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>
        </div>
      </div>
    </div>


    <div className="grid lg:grid-cols-2 gap-12 items-center">
   
      <div className="order-2 lg:order-1">
        <span className="text-red-400 font-bold uppercase text-sm flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Featured Topic
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-4">
         Chiropractic Care Essentials
        </h2>
        <p className="text-gray-700 mb-6">
    Learn about advanced chiropractic techniques and how they<br></br> restore your body's natural healing.
        </p>

        
        <div className="space-y-4">
          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">What is Chiropractic Care?</h3>
              <p className="text-gray-600 text-sm">Understanding the science behind chiropractic</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>

          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">find the Best Chiropractor</h3>
              <p className="text-gray-600 text-sm">what to look for in a chiropractic practice</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>

          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Chiropractic Adjustments Explained</h3>
              <p className="text-gray-600 text-sm">how Adjustments restore nervous system function name(params:type) {
                
              }</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>
        </div>
      </div>

    
      <div className="relative order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="/icons/spine.webp"
          alt="Understanding Trauma"
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute top-4 right-4 bg-red-400 rounded-full p-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
          </svg>
        </div>
      </div>
    </div>

  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 space-y-20">
    

    <div className="grid lg:grid-cols-2 gap-12 items-center">
   
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="/icons/tennis.jpg"
          alt="Understanding Trauma"
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute top-4 left-4 bg-red-400 rounded-full p-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
          </svg>
        </div>
      </div>

     
      <div className="mt-8 lg:mt-0">
        <span className="text-red-400 font-bold uppercase text-sm flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Featured Topic
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-4">
       Pain Relief & Management
        </h2>
        <p className="text-gray-700 mb-6">
     Discover natural, effective solutions for chronic pain without<br></br> surgery or medications.
        </p>

       
        <div className="space-y-4">
          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Back Pain Treatment</h3>
              <p className="text-gray-600 text-sm">Root cause solutins for chronic back pain</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>

          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Neck pain Relief</h3>
              <p className="text-gray-600 text-sm">Addressing cervical spine dysfunction</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>

          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Chronic pain Management</h3>
              <p className="text-gray-600 text-sm">long-term strategies for lasting relief</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>
        </div>
      </div>
    </div>

    
    <div className="grid lg:grid-cols-2 gap-12 items-center">
   
      <div className="order-2 lg:order-1">
        <span className="text-red-400 font-bold uppercase text-sm flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Featured Topic
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-4">
         Brain Health & Mental Wellness
        </h2>
        <p className="text-gray-700 mb-6">
Optimize your brain function and emotional wellbeing with <br></br> cutting-edge neurological therapies.
        </p>

        
        <div className="space-y-4">
          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Anxiety Treatment</h3>
              <p className="text-gray-600 text-sm">Natural therapies for anxiety and stress</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>

          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Sleep Testoration therapy</h3>
              <p className="text-gray-600 text-sm">Improve sleep quality naturally</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>

          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Emotional memory release</h3>
              <p className="text-gray-600 text-sm">Healing from emotional patterns</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>
        </div>
      </div>

   
      <div className="relative order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="/icons/Quantum-Neurology.png"
          alt="Understanding Trauma"
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute top-4 right-4 bg-red-400 rounded-full p-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
          </svg>
        </div>
      </div>
    </div>


  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 space-y-20">
    
  
    <div className="grid lg:grid-cols-2 gap-12 items-center">
    
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="/icons/nutrition.jpg"
          alt="Understanding Trauma"
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute top-4 left-4 bg-red-400 rounded-full p-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
          </svg>
        </div>
      </div>

   
      <div className="mt-8 lg:mt-0">
        <span className="text-red-400 font-bold uppercase text-sm flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Featured Topic
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-4">
          Understanding Trauma & Healing
        </h2>
        <p className="text-gray-700 mb-6">
          Explore how physical, emotional, and chemical trauma affects your health and how to heal.
        </p>

       
        <div className="space-y-4">
          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Physical Trauma Recovery</h3>
              <p className="text-gray-600 text-sm">Understanding and recovering from physical injuries and accidents</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>

          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Emotional Trauma Healing</h3>
              <p className="text-gray-600 text-sm">How unresolved emotional stress affects physical health</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>

          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Chemical Trauma & Toxins</h3>
              <p className="text-gray-600 text-sm">The impact of environmental toxins on your wellbeing</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>
        </div>
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
    
      <div className="order-2 lg:order-1">
        <span className="text-red-400 font-bold uppercase text-sm flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Featured Topic
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-4">
          Understanding Trauma & Healing
        </h2>
        <p className="text-gray-700 mb-6">
          Explore how physical, emotional, and chemical trauma affects your health and how to heal.
        </p>

        <div className="space-y-4">
          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Physical Trauma Recovery</h3>
              <p className="text-gray-600 text-sm">Understanding and recovering from physical injuries and accidents</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>

          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Emotional Trauma Healing</h3>
              <p className="text-gray-600 text-sm">How unresolved emotional stress affects physical health</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>

          <a className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition flex justify-between items-center" href="#">
            <div>
              <h3 className="font-semibold text-[#0B1F3F] text-lg">Chemical Trauma & Toxins</h3>
              <p className="text-gray-600 text-sm">The impact of environmental toxins on your wellbeing</p>
            </div>
            <span className="text-red-400 font-bold text-xl">→</span>
          </a>
        </div>
      </div>

      
      <div className="relative order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="/icons/smile.jpg"
          alt="Understanding Trauma"
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute top-4 right-4 bg-red-400 rounded-full p-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
          </svg>
        </div>
      </div>
    </div>

  </div>
</section>

<section className="py-20 bg-[#1D4077]">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="/icons/tennis.jpg" 
          alt="Healing Support"
          width={600}
          height={450}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute top-4 right-4 bg-red-400 rounded-full p-3 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
        </div>
      </div>

      <div className="text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
       Join Our Wellness Workshops
        </h2>

        <p className="text-gray-200 text-lg mb-6 leading-relaxed">
        Stay informed about the latest in holistic health through our educational workshops and community events.
        </p>

        <p className="text-gray-300 mb-8">
          
Pain & Performance Optimization
<br></br>
Nutrition & Wellness Seminars
<br></br>
Brain Health & Mental Clarity
<br></br>

Community Health Events
        </p>

        <button className="bg-red-400 hover:bg-red-500 transition px-6 py-3 rounded-xl font-semibold text-white shadow-lg">
          get Notified About Upcoming Events
        </button>
      </div>

    </div>
  </div>
</section>

<section className="py-24 px-6 bg-gray-50 text-center">
<h1 className="text-[#1D4077] text-5xl font-extrabold mb-6">
Understanding the Three Types of Trauma
</h1>
<p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
Your body experiences three distinct types of trauma that can interfere
with its natural healing ability.
</p>
</section>



<section className="py-20 px-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

<div className="group">
<div className="relative rounded-2xl overflow-hidden shadow-xl transition transform group-hover:scale-105">
<img
src="/icons/physical.jpg"
alt="Physical Trauma"
width={600}
height={400}
className="w-full h-[300px] object-cover"
/>
<h3 className="absolute bottom-4 left-4 text-white text-3xl font-bold drop-shadow-lg">
Physical Trauma
</h3>
</div>
<p className="mt-4 text-gray-700 text-lg">
Injuries from accidents, falls, sports, or repetitive stress that create <br></br> structural dysfunction and nerve interference.
</p>
</div>



<div className="group">
<div className="relative rounded-2xl overflow-hidden shadow-xl transition transform group-hover:scale-105">
<img
src="/icons/emotional.jpg"
alt="Emotional Trauma"
width={600}
height={400}
className="w-full h-[300px] object-cover"
/>
<h3 className="absolute bottom-4 left-4 text-white text-3xl font-bold drop-shadow-lg">
Emotional Trauma
</h3>
</div>
<p className="mt-4 text-gray-700 text-lg">
Unresolved emotional stress and psychological patterns that manifest as<br></br> physical symptoms and chronic conditions.
</p>
</div>



<div className="group">
<div className="relative rounded-2xl overflow-hidden shadow-xl transition transform group-hover:scale-105">
<img
src="/icons/chemical.jpg"
alt="Chemical Trauma"
width={600}/>
<h3 className="absolute bottom-4 left-4 text-white text-3xl font-bold drop-shadow-lg">
Chemical Trauma
</h3>
</div>
<p className="mt-4 text-gray-700 text-lg">
Toxins, poor nutrition, and biochemical imbalances that disrupt your<br></br> body's natural chemistry and function.
</p>

</div>
</div>

</section>






   <section className="relative py-20 md:py-32 background-size:cover background-position:center center background-repeat:no-repeat"
  style={{
    backgroundImage: "url('/icons/D.webp')",
   
    
  }}
>
 
  <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-black/80 to-block/60">
   
  </div>

  <div className=" z-10 container relative mx-auto px-4">
    <div className="max-w-4xl mx-auto  text-center">
      
      
        <h2 className="text-4xl md:text-5xl  mb-6 font-bold  text-white  drop-shadow-2xl">
          Ready to Start Your
          
          Healing Journey?
        </h2>
        <p className="text-xl md:text-2xl text-white/95  leading-relaxed drop-shadow-lg">
Our team is here to help you understand your health challenges and <br></br>create a personalized plan for optimal wellness. Take the first step today.
        </p>
      </div>

     
      <div className="flex flex-col sm:flex-row gap-4 justify-center ">
        <a
          href="/new-patient"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white hover:bg-white/90 text-[#1d4077] font-bold rounded-full px-10 h-14 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          Book your Consultation
        </a>

        <a
          href="tel:+17346618100"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-transparent hover:bg-white/10 text-white font-bold rounded-full border-2 border-white px-10 h-14 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <svg
            className="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l1 5a2 2 0 002 2h6a2 2 0 002-2l1-5h2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8" />
          </svg>
          Call (734) 661-8100
        </a>
      </div>
      <p className="mt-8 text-white/80 text-sm text-center">Serving Ann Arbor and Washtenaw County since 2010</p>
    
  </div>
  
  
</section>

</div>

    
  );
};

export default ResourcesPage;
