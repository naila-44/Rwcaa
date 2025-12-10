"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <section className="bg-white w-full pb-24 pt-28">
      <div className="max-w-3xl mx-auto text-center text-[#1D4077] px-6">
        <h1 className="text-5xl font-bold mb-6 leading-tight">All Services</h1>
        <img
          src="/icons/smile.jpg"
          alt="Smile Image"
          className="relative rounded-3xl shadow-2xl w-full max-w-full h-[500px] object-cover mx-auto"
        />
        <h2 className="text-3xl font-bold mb-6 leading-tight mt-6">Services That Meet You Where You Are</h2>
        <p className="text-xl text-[#1D4077] leading-relaxed">
          Our chiropractic therapies are tailored to support your body's natural healing process.
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-20 space-y-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-2">
            <div className="h-[400px] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/icons/spine.webp"
                alt="Neuro-Muscular Chiropractic"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          <div className="order-2 lg:order-1 text-[#1D4077]">
            <h2 className="text-3xl font-bold mb-4">Neuro-Muscular Chiropractic</h2>
            <p className="font-medium italic text-red-600 mb-6">
              Great for pain, weakness, tightness, headaches, migraines, sciatica, general wellness.
            </p>
            <p className="text-lg text-[#1D4077] mb-6">
              By working with your nerves, muscles, and joint alignment together, this approach helps restore strength, mobility, and balance. Treatments are personalized using reflex testing and may include adjustments, muscle work, and light therapy.
            </p>
            <Link
              href="/services/neuro-muscular-chiropractic"
              className="inline-flex items-center gap-2 mt-4 font-semibold text-white bg-[#1D4077] px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Learn More
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10 h-96">
          <div className="order-2 lg:order-1">
            <div className="h-[300px] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/icons/tennis.jpg"
                alt="Chiropractic Care"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-[#1D4077]">
            <h2 className="text-3xl font-bold mb-4">Acoustic Shockwave Therapy</h2>
            <p className="font-medium text-red-600 italic mb-6">Great for acute or chronic joint injury, joint pain, soft tissue damage, quicker athletic recovery, sports injuries, performance enhancement, neuropathy, plantar fasciitis, knee pain, shoulder pain, back pain, golf/tennis elbow, scar tissue, etc.</p>
            <p className="text-lg text-[#1D4077] mb-6">
             A non-invasive therapy that uses soundwave impulses to promote tissue repair, reduce inflammation, and trigger natural pain relief, ideal for athletes and active individuals recovering from injuries or overuse.
            </p>
            <Link
              href="/services/acoustic-shockwave-therapy"
              className="inline-flex items-center gap-2 mt-4 font-semibold text-white bg-[#1D4077] px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Learn More
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-96 mt-12 bg-gray-50">
          <div className="order-1 lg:order-2">
            <div className="h-[300px] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/icons/nutrition.jpg"
                alt="Clinical Nutrition"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          <div className="order-2 lg:order-1 text-[#1D4077]">
            <h2 className="text-3xl font-bold mb-4">Clinical Nutrition</h2>
            <p className="text-red-600 italic mb-6 font-medium">Great for any organ problems, systemic-based problems, hormone support, digestive troubles, sleep support, blood sugar regulation, skin and rashes, chronic pain, general wellness, depression, anxiety, ADHD, brain fog</p>
            <p className="text-lg text-[#1D4077] mb-6">
             Personalized nutritional care that identifies nutrient deficiencies, toxins, and food sensitivities through reflex testing. This approach supports your body's healing from the inside out.
            </p>
            <Link
              href="/services/clinical-nutrition"
              className="inline-flex items-center gap-2 mt-4 font-semibold text-white bg-[#1D4077] px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Learn More
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-96 mt-12 bg-gray-50">
          <div className="order-2 lg:order-1">
            <div className="h-[300px] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/icons/Quantum-Neurology.png"
                alt="Regenerative Medicine"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-[#1D4077]">
            <h2 className="text-3xl font-bold mb-4">Quantum Neuro Reset Therapy (QNRT)®</h2>
             <p className="text-red-600 italic mb-6 font-medium">Great for helping with pain and an overactive fight-or-flight response that are the result of post-traumatic stress and mental stress.</p>
            <p className="text-lg text-[#1D4077] mb-6">
             A breakthrough approach to help a patient correct subluxation and nervous system patterns that have been caused by past emotional trauma.
            </p>
            <Link
              href="/services/quantum-neuro-reset-therapy"
              className="inline-flex items-center gap-2 mt-4 font-semibold text-white bg-[#1D4077] px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Learn More
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-96 mt-12 bg-gray-50">
          <div className="order-1 lg:order-2">
            <div className="h-[300px] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/icons/feedback.jpg"
                alt="Neurofeedback"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          <div className="order-2 lg:order-1 text-[#1D4077]">
            <h2 className="text-3xl font-bold mb-4">Neurofeedback</h2>
             <p className="text-red-600 italic mb-6 font-medium">Great for improving sleep quality, mental fog, irritability, anxiety, and depression, when symptoms are related to a spinal subluxation.</p>
            <p className="text-lg text-[#1D4077] mb-6">
            Stress of all sorts can affect the nervous system and shift brainwave toward a dysfunctional pattern, creating mental fog, anxiety, and depression. When these problems complicate the subluxation, neurofeedback can help rebalance it.
            </p>
            <Link
              href="/services/neurofeedback"
              className="inline-flex items-center gap-2 mt-4 font-semibold text-white bg-[#1D4077] px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Learn More
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-96 bg-gray-50 mt-12 ">
          <div className="order-2 lg:order-1">
            <div className="h-[300px] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/icons/Neutral.png"
                alt="Spinal Decompression"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-[#1D4077]">
            <h2 className="text-3xl font-bold mb-4">Biofeedback & PEMF Therapy</h2>
             <p className="text-red-600 italic mb-6 font-medium">Great for autoimmune, chronic inflammation, chronic fatigue, and stress recovery that prevent correction of the subluxation.</p>
            <p className="text-lg text-[#1D4077] mb-6">
           A gentle therapy using Pulsed Electro-Magnetic Field (PEMF), which enhances cell-to-cell communication to support relief from inflammation, trauma, and stress.
            </p>
            <Link
              href="/services/biofeedback-pemf-therapy"
              className="inline-flex items-center gap-2 mt-4 font-semibold text-white bg-[#1D4077] px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Learn More
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
       
      <div className="relative  py-24 md:py-24 min-h-[600px] mt-12 " style={{ backgroundImage: 'url(/icons/view.jpg)',backgroundSize:"cover",backgroundPosition:"20% center" ,backgroundRepeat:"no-repeat"}}>
        <div className="container relative z-10 mx-auto px-4"></div>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl  md:text-3xl font-bold mb-6" style={{color:"rgb(29,64,119)"}}>Take the First Step Toward Feeling Better</h1>
          <p className="text-base md:text-md mb-8" style={{color:"rgb(20,23,46)"}}>
            You've seen what we offer, now imagine what's possible. If you're ready to feel like yourself again, we're here to guide you every step of the way.
            </p>
          <Link
            href="/new-patient"
            className="inline-flex items-center gap-2 mt-4 font-semibold text-white bg-[#1d4077] px-6 py-2 rounded-lg hover:bg-slate-500 transition-all"
          >
            New Patient Start Here
          </Link>
        </div>
      </div>
    </section>
  );
}
