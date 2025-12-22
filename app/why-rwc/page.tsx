"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "react-feather"; 
export default function WhyRWC() {
  const services = [
    {
      title: "Neuro-Muscular Chiropractic",
      label:
        "Great for pain, weakness, tightness, headaches, migraines, sciatica, general wellness.",
      description:
        "By working with your nerves, muscles, and joint alignment together, this approach helps restore strength, mobility, and balance. Treatments are personalized using reflex testing and may include adjustments, muscle work, and light therapy.",
      image: "/icons/6.jpg",
      link: "/services/neuro-muscular-chiropractic",
    },
    {
      title: "Acoustic Shockwave Therapy",
      label:
        "Great for acute or chronic joint injury, joint pain, soft tissue damage, quicker athletic recovery, sports injuries, performance enhancement, neuropathy, plantar fasciitis, knee pain, shoulder pain, back pain, golf/tennis elbow, scar tissue, etc.",
      description:
        "A non-invasive therapy that uses soundwave impulses to promote tissue repair, reduce inflammation, and trigger natural pain relief — ideal for athletes and active individuals recovering from injuries or overuse.",
      image: "/icons/tennis.jpg",
      link: "/services/acoustic-shockwave-therapy",
    },
    {
      title: "Clinical Nutrition",
      label:
        "Great for any organ problems, systemic-based problems, hormone support, digestive troubles, sleep support, blood sugar regulation, skin and rashes, chronic pain, general wellness, depression, anxiety, ADHD, brain fog.",
      description:
        "Personalized nutritional care that identifies nutrient deficiencies, toxins, and food sensitivities through reflex testing. This approach supports your body's healing from the inside out.",
      image: "/icons/nutrition.jpg",
      link: "/services/clinical-nutrition",
    },
    {
      title: "Quantum Neuro Reset Therapy (QNRT)®",
      label:
        "Great for helping with pain and an overactive fight-or-flight response that are the result of post-traumatic stress and mental stress.",
      description:
        "A breakthrough approach to help a patient correct subluxation and nervous system patterns that have been caused by past emotional trauma.",
      image: "/icons/Quantum-Neurology.png",
      link: "/services/quantum-neuro-reset-therapy",
    },
    {
      title: "Neurofeedback",
      label:
        "Great for improving sleep quality, mental fog, irritability, anxiety, and depression, when symptoms are related to a spinal subluxation.",
      description:
        "Stress of all sorts can affect the nervous system and shift brainwave toward a dysfunctional pattern, creating mental fog, anxiety, and depression. When these problems complicate the subluxation, neurofeedback can help rebalance it.",
      image: "/icons/feedback.jpg",
      link: "/services/neurofeedback",
    },
    {
      title: "Spinal Decompression",
      label:
        "Great for disc issues, herniated discs, sciatica, and spinal conditions.",
      description:
        "A non-invasive procedure that helps relieve pressure on the spine — beneficial for conditions like herniated discs, sciatica, and other spinal issues.",
      image: "/icons/Neutral.png",
      link: "/services/spinal-decompression",
    },
  ];

  return (
    <>
     
      <section
        className="relative py-24 md:py-32 lg:py-40"
        style={{
          backgroundImage: "url('/icons/PA.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d4077]/95 via-[#1d4077]/85 to-[#2d5087]/75" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Why Choose <br />Restorative Wellness?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow-lg leading-relaxed max-w-3xl mx-auto">
              Experience our 5-Star Approach — a comprehensive system addressing the most critical aspects of your health and wellness.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-24 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  For Patients Facing Complex Health Challenges:
                </h2>
                <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                  If you've been struggling with stubborn or recurring health problems, we're here to help you find real answers. As a licensed chiropractor, my role is to identify and correct subluxations — areas of nerve interference or joint dysfunction that prevent your body from healing the way it's designed. Using advanced chiropractic, muscular, and neurologic techniques, we help restore your body's ability to function and repair.
                  <br /><br />
                  But we don't stop there. At Restorative Wellness Center, we look beyond the surface to address the deeper factors that may be keeping your body out of balance. These often-overlooked pieces can continue to aggravate your condition unless they're properly addressed.
                  <br /><br />
                  There are 5 key imbalances that cause or perpetuate subluxation, preventing patients from getting lasting results. By addressing the full picture, combining chiropractic and other therapies, we help you not only recover but stay well.
                </p>
              </div>
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                style={{ height: "600px" }}
              >
                <Image
                  src="/icons/6.jpg"
                  alt="Complex Health Challenges"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {services.map((service, idx) => (
        <section
          key={idx}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-auto bg-gray-50 py-12 px-4 lg:px-0"
        >
          <div className={idx % 2 === 0 ? "order-2 lg:order-1" : "order-1"}>
            <div className="h-[300px] w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-[#1D4077]">
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p className="font-medium italic text-red-600 mb-6">{service.label}</p>
            <p className="text-lg text-[#1D4077] mb-6">{service.description}</p>
            <Link
              href={service.link}
              className="inline-flex items-center gap-2 mt-4 font-semibold text-white bg-[#1D4077] px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Learn More <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      ))}
    </>
  );
}

