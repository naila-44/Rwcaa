"use client";
import Link from "next/link";
import {useState} from "react";
const NewPatient: React.FC = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    try {
      const res = await fetch("/api/new-patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus(result.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong");
    }
  };
  return (
    <section className="py-24 px-6 bg-white min-h-screen">
    
      <div className="text-center">
        <h1 className="text-[#1D4077] text-5xl font-extrabold mb-6">
          New Patient
        </h1>

        <img
          src="/icons/1.jpg"
          alt="Path to Wellness"
          className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl mb-10"
        />

        <h2 className="text-3xl text-blue-900 font-bold mb-6">
          Your Path to Better Health Starts Here
        </h2>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          At Restorative Wellness Center, we love welcoming new patients! Our team is
          here to listen, learn about your concerns, and guide you toward your health
          goals. We have a simple 3-step new patient process.
        </p>

        <p className="text-lg text-black font-bold">
          When you come in for your first visit, here's what you can expect:
        </p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20 mt-10">
        <div className="p-6 bg-white rounded-lg flex flex-col items-center">
          <img src="/icons/2.jpg" alt="Consultation" className="w-full mb-5" />
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Consultation</h3>
          <p className="text-gray-700">
            We'll sit down together to talk about your symptoms, health history,
            and goals.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg flex flex-col items-center">
          <img src="/icons/3.jpg" alt="Examination" className="w-full mb-5" />
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Examination</h3>
          <p className="text-gray-700">
            Gentle, thorough testing helps us understand the root cause of your concerns.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg flex flex-col items-center">
          <img src="/icons/3-icon.jpg" alt="Findings" className="w-80 mb-5" />
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Report of Findings</h3>
          <p className="text-gray-700">
            We'll share what we've discovered and outline a personalized care plan.
          </p>
        </div>
      </div>

     
      <div className="text-center mb-20 bg-[#1D4077] py-16 rounded-xl">
        <h2 className="text-3xl text-white font-bold mb-6">What to Expect in the Exam</h2>

        <p className="text-lg text-white mb-14 max-w-3xl mx-auto leading-relaxed">
          Your exam will focus on how your body expresses symptoms—either through nerves,
          muscles, joints, or organs. Using safe techniques, we identify what’s happening
          so we can create the right care plan for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-20">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Nerve-Muscle-Joint Pain Evaluation
            </h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/sample1"
              title="Nerve-Muscle-Joint Pain Evaluation"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Visceral/Organ Symptoms Evaluation
            </h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/sample2"
              title="Visceral/Organ Symptoms Evaluation"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

    
      <div className="text-center mb-20">
        <h2 className="text-3xl text-blue-900 font-bold mb-6">
          Getting Started is Easy
        </h2>

        <p className="text-lg text-gray-700 mb-2">
          We've kept the process simple so you can focus on feeling better.
        </p>

        <p className="text-black font-bold">Just follow these quick steps:</p>

       
     <div className="space-y-32 mt-20">

 
  <div className="md:flex md:items-center md:space-x-16">
    

    <img
      src="/icons/s.png"
      className="w-56 md:w-64 mx-auto md:mx-0"
    />

   
    <div className="text-center md:text-left md:max-w-2xl">
      <h3 className="text-4xl font-extrabold text-[#1D4077] mb-4">
        Schedule an Appointment
      </h3>

      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        Call us at <strong>(734) 661-8100</strong> to schedule now or send us a 
        message and we’ll message or call back to discuss if our practice is right for you!
      </p>

      <button className="px-8 py-3 bg-[#1D4077] text-white font-semibold rounded-full hover:bg-blue-900 transition">
        Send us a Message
      </button>
    </div>
  </div>


  <div className="md:flex md:items-center md:space-x-16">
    
    <img
      src="/icons/s.jpg"
      className="w-56 md:w-64 mx-auto md:mx-0"
    />

    <div className="text-center md:text-left md:max-w-2xl">
      <h3 className="text-4xl font-extrabold text-[#1D4077] mb-4">
        Complete Your Intake Forms
      </h3>

      <p className="text-xl text-gray-700 leading-relaxed mb-4">
        Save time at your visit by filling out your forms ahead of time online.
      </p>

       <button className="px-8 py-3 bg-[#1D4077] text-white font-semibold rounded-full hover:bg-blue-900 transition">
        View Forms
      </button>
    </div>
  </div>

 
  <div className="md:flex md:items-center md:space-x-16">

    <img
      src="/icons/p.png"
      className="w-56 md:w-64 mx-auto md:mx-0"
    />

    <div className="text-center md:text-left md:max-w-2xl">
      <h3 className="text-4xl font-extrabold text-[#1D4077] mb-4">
        Privacy Practices & Good Faith Estimate
      </h3>

      <p className="text-xl text-gray-700 leading-relaxed mb-4">
        Your health information is protected. You may request a cost estimate anytime.
      </p>

      <Link
        href="/privacy-practices"
        className="text-[#1D4077] underline text-xl"
      >
        View Our Privacy Disclosure
      </Link>
    </div>
  </div>

</div>
</div>
   
<section
  className="w-full bg-cover bg-center b py-24 px-6 text-[#1d4077] mt-24"
  style={{ backgroundImage: "url('/icons/c.webp')" }} 
>
  <div className="max-w-4xl mx-auto    ">

    <h2 className="text-4xl font-extrabold mb-6 text-center">
      Good Faith Estimate
    </h2>

    <p className="text-lg leading-relaxed mb-6 text-right">
      You have the right to know how much your care will cost. By law, we
      provide a Good <br/>Faith Estimate for patients who are uninsured or not
      using insurance.
    </p>

    <ul className="text-lg space-y-4 text-right">
      <li>• You'll receive a written estimate at least 1 business day before your scheduled service.</li>
      <li>• This estimate includes all related costs, like tests, equipment, and prescriptions.</li>
      <li>• If your final bill is $400+ more than the estimate, you have the right to dispute it.</li>
    </ul>

    <p className="text-lg mt-6 text-right">
      Be sure to save a copy of your estimate and any bills you receive.
      Learn more at<br></br> <strong>CMS.gov/NoSurprises</strong>.
    </p>

  </div>
</section>

<section
  className="w-full bg-cover bg-center  "
  style={{ backgroundImage: "url('/icons/bg.jpg')" }}
>
 
  <div className=" w-full h-full py-20 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="  p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-[#1D4077] mb-6">Send Us a Message</h2>
         {status && <p className="text-green-400 mb-4">{status}</p>}
        <p className="text-white mb-6 text-sm">*required</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white font-medium mb-2">Name*</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Jane Smith"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4077]"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Email*</label>
            <input
              type="email"
              name="email"
              onChange={handleChange
              }
              required
              value={form.email}
              placeholder="jane@email.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4077]"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              onChange={handleChange}
              value={form.phone}
              name="phone"
              required
              placeholder="123-456-7890"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4077]"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Message*</label>
            <textarea
              placeholder="Tell us about your health concerns..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4077] h-32"
              onChange={handleChange
                
              }
              required
              value={form.message
              }
              name="message"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-[#1D4077] text-white font-bold rounded-full hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

    
     
    </div>
  </div>
</section>



    </section>
  );
};

export default NewPatient;
