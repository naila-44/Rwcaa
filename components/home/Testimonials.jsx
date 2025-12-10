"use client";
import Link from 'next/link';
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    title: "I Can't Explain How Magical It Is",
    description: `I have never felt better than I have since seeing Dr. Geck and his amazing therapists. I can't really explain how magical it is. Recently I was in an accident and in just three visits, I was feeling better. I could move my neck and back freely, and even though the bruises were still present, I was thrilled that Dr. Geck and his staff could make me feel so much better.

I wish more doctors understood what Dr. Geck does. He is a maverick in the true sense of the word. He uses cutting edge techniques to both diagnose and treat his patients. Honestly, I think he can fix almost anything.

The office is friendly, spacious and inviting. The AMIT techniques give and the therapeutic staff give patients immediate relief. When you add the nutritional supplements and the in office massages — there really isn't a place l'd rather be.

I know this sounds unreal, but it's true. Go see for yourself — you will feel better than you ever have!
    `,
    author: "Debora M.",
  },
  {
    title: "More Energy and Stamina and Overall Feeling Better",
    description:
      "I have been under the care of Dr. Geck for several months now regarding treatment for chronic inflammation due to Lyme's disease.my options in seeking help in this SPECIALIZED area were very minimal.      I have greatly appreciated all of Dr. Geck's extreme dedication, expertise, and care on my behalf.I am pain free and truly thought I may have to live with this condition for my remaining life.I would never hesitate to recommend anyone to this office for any issue.Dr. Geck and his entire staff will provide you with the up most care!A VERY GRATEFUL PATIENT.",
    author: "Sarah L.",
  },
  {
    title: "Highly Personalized Care at the Right Time",
    description:
      "My discovery of this clinic came at the perfect time. I was trying to manage my health alone with online sources, but I needed professional support.",
    author: "Amanda R.",
  },
  {
    title: "Finally Seeing Real Improvements",
    description:
      "The level of detail and attention provided here is unmatched. Every visit feels like progress.",
    author: "Jason P.",
  },
  {
    title: "Deep Healing I Never Thought Possible",
    description:
      "I have been to many clinics, but this is the only place where I felt truly understood and cared for.",
    author: "Michelle T.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const goNext = () => setIndex((i) => (i + 1) % total);
  const goPrev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));

  return (
    <section
      className="py-24 px-6 min-h-screen bg-purple-200/10"
      style={{
       
      }}
    >
     
      <h2 className="text-center text-[#1D4077] text-5xl font-extrabold mb-14">
        What Our Patients Are Saying
      </h2>

     
      <div className="max-w-4xl mx-auto bg-white p-14 rounded-3xl shadow-xl relative">
        <div className="text-pink-400 text-6xl mb-4">“</div>

        <h3 className="text-3xl font-bold text-blue-900 mb-6 leading-snug">
          {testimonials[index].title}
        </h3>

        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {testimonials[index].description}
        </p>

        <div className="mt-12">
          <p className="text-3xl text-blue-900 italic font-semibold">
            {testimonials[index].author}
          </p>
        </div>
      </div>

    
      <div className="flex justify-center items-center mt-10 gap-6">
     
        <button
          onClick={goPrev}
          className="bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition border-black"
        >
          <ChevronLeft className="text-blue-700" size={24} />
        </button>

      
        <div className="flex gap-3">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-red-500" : "bg-gray-400"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

      
        <button
          onClick={goNext}
          className="bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition"
        >
          <ChevronRight className="text-blue-700" size={24} />
        </button>
      </div>

     
      <p className="text-center text-black text-lg mt-3">
        {index + 1} / {total}
      </p>

      
     <div className="text-center mt-10">
  <Link href="/success-stories">
    <button className="px-8 py-4 bg-[#1D4077] text-white font-bold rounded-xl shadow-lg hover:bg-gray-100 transition text-lg">
      Read More Success Stories
    </button>
  </Link>
</div>
    </section>
  );
}
