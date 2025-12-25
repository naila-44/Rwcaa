"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    title: "I Can't Explain How Magical It Is",
    description: `I have never felt better than I have since seeing Dr. Geck and his amazing therapists. I can't really explain how magical it is. Recently I was in an accident and in just three visits, I was feeling better.`,
    author: "Debora M.",
  },
  {
    title: "More Energy and Stamina",
    description:
      "I have been under the care of Dr. Geck for several months regarding treatment for chronic inflammation. I am pain free and truly grateful.",
    author: "Sarah L.",
  },
  {
    title: "Highly Personalized Care",
    description:
      "My discovery of this clinic came at the perfect time. I needed professional support and received exceptional care.",
    author: "Amanda R.",
  },
  {
    title: "Finally Seeing Real Improvements",
    description:
      "The level of detail and attention provided here is unmatched.",
    author: "Jason P.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const goNext = () => setIndex((i) => (i + 1) % total);
  const goPrev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));

  return (
    <section className="py-16 px-4 bg-purple-200/10">
     
      <h2 className="text-center text-[#1D4077] text-3xl md:text-4xl font-bold mb-8">
        What Our Patients Are Saying
      </h2>

     
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg min-h-[320px] flex flex-col">
        <div className="text-pink-400 text-4xl mb-2">“</div>

        <h3 className="text-xl font-semibold text-blue-900 mb-3">
          {testimonials[index].title}
        </h3>

        <p className="text-gray-700 text-base leading-relaxed flex-1">
          {testimonials[index].description}
        </p>

        <p className="mt-4 text-lg text-blue-900 font-medium italic">
          {testimonials[index].author}
        </p>
      </div>

     
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={goPrev}
          className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="text-blue-700" size={20} />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                i === index ? "bg-red-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="text-blue-700" size={20} />
        </button>
      </div>

    
      <p className="text-center text-sm text-gray-600 mt-2">
        {index + 1} / {total}
      </p>

      
      <div className="text-center mt-6">
        <Link href="/success-stories">
          <button className="px-6 py-3 bg-[#1D4077] text-white font-semibold rounded-lg hover:bg-gray-500 transition">
            Read More Success Stories
          </button>
        </Link>
      </div>
    </section>
  );
}
