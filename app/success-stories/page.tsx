"use client";

import { useState } from "react";
import Link from "next/link";

interface Testimonial {
  title: string;
  description: string;
  author: string;
}

const newTestimonials: Testimonial[] = [
  {
    title: "Chronic Back Pain",
    description:
      "After years of struggling with chronic back pain, I finally found relief at Restorative Wellness Center. Dr. Geck's comprehensive approach addressed not just my pain, but the underlying causes. Within weeks, I was able to return to activities I love. I'm so grateful for the care I received!",
    author: "Sarah M.",
  },
  {
    title: "Sports Injury",
    description:
      "As an athlete, I needed to recover quickly from a shoulder injury. The combination of chiropractic care and shockwave therapy at RWC got me back in the game faster than I thought possible. The team really understands how to optimize performance and healing.",
    author: "Michael T.",
  },
  {
    title: "Anxiety and Sleep Issues",
    description:
      "I came in for back pain but discovered so much more. The QNRT therapy helped me address anxiety I'd been dealing with for years, and the neurofeedback improved my sleep dramatically. This truly is whole-body healing. I feel like a new person!",
    author: "Jennifer L.",
  },
  {
    title: "Neck Pain and Headaches",
    description:
      "I was skeptical at first, but the results speak for themselves. My chronic headaches are gone, and my neck mobility has improved significantly. The staff is knowledgeable, caring, and truly invested in your wellness. Highly recommend!",
    author: "Robert K.",
  },
  {
    title: "Fatigue and Hormonal Imbalance",
    description:
      "The clinical nutrition program changed my life. After addressing nutritional deficiencies and hormonal imbalances, my energy levels soared. I no longer feel exhausted all the time. Thank you, Restorative Wellness Center!",
    author: "Lisa W.",
  },
  {
    title: "Energy & Stamina",
    description:
      "More Energy and Stamina and Overall Feeling Better — Very comprehensive, thorough, personal health care to deal with specific issues to your own health.",
    author: "Jill K.",
  },
  {
    title: "Chronic Inflammation",
    description:
      "I Am Pain Free — I have been under the care of Dr. Geck for several months now regarding treatment for chronic inflammation due to Lyme's disease. I am pain free and truly thought I may have to live with this condition for my remaining life.",
    author: "Janet C.",
  },
  {
    title: "Quick Recovery",
    description:
      "One of a Kind Treatment! I have been seeing Dr. Geck off and on for the last year. Recently I tweaked something in my lower back during a workout class. Not only did he relieve my pain, but was able to start my classes back within a couple of days.",
    author: "Jessica B.",
  },
  {
    title: "Family Care",
    description:
      "Dr. Geck and His Staff Are the Best — My entire family (all 5 of us!) regularly visit the office for muscle treatments. We have a special-needs child who has some 'irregular' behavior tendencies, and he has been treated wonderfully.",
    author: "Mark B.",
  },
  {
    title: "Miraculous Results",
    description:
      "Nothing Short of Miraculous — Walking down three flights of stairs today from the parking structure, I reflect on how things were a year ago before I had Dr. Geck's treatment. What he and his medical crew have done for me is nothing short of miraculous, and I am so very grateful.",
    author: "Erica P.",
  },
  {
    title: "Fast Recovery",
    description:
      "I Can't Explain How Magical It Is — I have never felt better than I have since seeing Dr. Geck and his amazing therapists. Recently I was in an accident and in just three visits, I was feeling better.",
    author: "Debora M.",
  },
];

const MoreSuccessStories: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const total = newTestimonials.length;

  const goNext = (): void => setIndex((i) => (i + 1) % total);
  const goPrev = (): void => setIndex((i) => (i === 0 ? total - 1 : i - 1));

  return (
    <section className="py-24 px-6 bg-white min-h-screen">
      <h1 className="text-center text-[#1D4077] text-5xl font-extrabold mb-14">
        Success Stories
      </h1>
      <img
        src="/icons/happy.webp"
        alt="Smile Image"
        className="relative rounded-3xl shadow-2xl w-full max-w-3xl object-cover mx-auto"
      />
      <h2 className="text-center text-3xl text-blue-900 font-bold mb-10 mt-7">
        Real People.
        <br />
        Real Healing.
      </h2>
      <p className="text-center text-lg text-gray-800 mb-12">
        Healing is possible—our patients prove it every day. Whether it's relief
        from chronic pain, <br />
        better sleep, improved mood, or renewed energy, these stories are a
        powerful <br />
        reminder that your body is capable of transformation. We're honored to
        walk <br />
        alongside so many who have reclaimed their health, and we hope their
        journeys <br />
        inspire your own.
      </p>
      <div className="text-center mt-10">
        <Link href="/New-Patient">
          <button className="px-8 py-4 bg-[#1D4077] text-white font-bold rounded-xl shadow-lg hover:bg-sky-800 transition text-lg">
            New Patient Start Here
          </button>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto bg-white p-14  mt-14">
        {newTestimonials.map((testimonial, idx) => (
          <div key={idx} className="mb-10">
            <div className="text-pink-400 text-6xl mb-4 leading-none">“</div>

            <h3 className="text-3xl font-bold text-blue-900 mb-6 leading-snug">
              {testimonial.title}
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {testimonial.description}
            </p>

            <div className="mt-12">
              <p className="text-3xl text-blue-900 italic font-semibold">
                {testimonial.author}
              </p>
              <div className="border-t-2 border-gray-200 mt-6"></div>
            </div>
          </div>
        ))}
      </div>

      <section
        className="relative py-24 md:py-24 min-h-[600px] "
        style={{
          backgroundImage: "url(/icons/book.avif)",
          backgroundSize: "cover",
          backgroundPosition: "20% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container relative z-10 mx-auto  max-w-7xl"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-3xl md:text-3xl font-bold mb-6"
            style={{ color: "rgb(29,64,119)" }}
          >
            You’ve Seen What’s Possible, Now It’s Your Turn
          </h1>
          <p
            className="text-base md:text-lg mb-8"
            style={{ color: "rgb(20,23,46)" }}
          >
            These stories started just like yours: with someone ready
            <br />
            for change. Let’s make your next chapter the best one yet.
          </p>
          <Link
            href="/new-patient"
            className="inline-flex items-center gap-2 mt-4 font-semibold text-white bg-[#1d4077] px-6 py-2 rounded-lg hover:bg-slate-500 transition-all"
          >
            New Patients
          </Link>
        </div>
      </section>
    </section>
  );
};

export default MoreSuccessStories;
