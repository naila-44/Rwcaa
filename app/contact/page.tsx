"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(""); 

    try {
      const res = await fetch("/api/contact", {
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
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong");
    }
  };
  
    

  return (
    <div className="bg-white min-h-screen">
 
      <section className="py-24 px-6 text-center">
        <h1 className="text-[#1D4077] text-5xl font-extrabold mb-6">Contact</h1>

        <Image
          src="/icons/contact-us.jpg"
          alt="Path to Wellness"
          width={1200}
          height={500}
          className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl mb-10"
        />

        <h2 className="text-3xl text-blue-900 font-bold mb-6">Your Next Step Starts Here</h2>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          Whether you have questions, want to learn more, or you're ready to begin your healing journey, we'd love to hear from you.
        </p>
      </section>

   
      <div className="flex flex-col md:flex-row md:items-start justify-center items-center gap-8 md:gap-16 px-6 mb-16">
     
        <div className="w-full md:flex-1 text-center md:text-right">
          <h2 className="text-3xl font-bold text-[#0a2a6c] mb-6">Office Hours</h2>
          <div className="space-y-1 inline-block text-center md:text-left text-base">
            {[
              { day: "Monday", time: "8:30-5:30" },
              { day: "Tuesday", time: "8:30-1:30" },
              { day: "Wednesday", time: "12:30-5:30" },
              { day: "Thursday", time: "8:30-5:30" },
            ].map((item) => (
              <div key={item.day} className="flex gap-2 justify-center md:justify-start">
                <span className="w-28 text-left text-[#0a2a6c]">{item.day}:</span>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#0a2a6c] mb-6">Contact</h2>
          <div className="space-y-4 inline-block text-center md:text-left text-base">
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <Phone className="text-red-500 h-8 w-8" />
              <span>(734) 661-8100</span>
            </div>
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <Mail className="text-red-500 h-8 w-8" />
              <span>Reception@RWCAA.com</span>
            </div>
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <MapPin className="text-red-500 h-8 w-8" />
              <span>107 Aprill Drive, Ann Arbor MI 48103</span>
            </div>
          </div>
        </div>
      </div>
      
      <section className="relative py-16 md:py-24  background-size:cover background-position:center background-repeat :no-repeat "style={{ backgroundImage: "url('/icons/contact.jpg')" }}
>
 
  <div className=" absolute inset-0 bg-black/40"/>
    <div className="container relative z-10 mx-auto px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
         {status && <p className="text-green-400 mb-4">{status}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white font-medium mb-2">Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4077]"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Email*</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              value={form.email}
              placeholder="email@email.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4077]"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="123-456-7890"
              onChange={handleChange}
              value={form.phone}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4077]"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Message*</label>
            <textarea
              placeholder="Tell us about your health concerns..."
              onChange={handleChange}
              value={form.message}
              required
              name="message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4077] h-32"
            />
          </div>

          <button
            type="submit"
            className="  inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium w-full h-10 px-6 py-3 bg-gray-400 text-white  rounded-md hover:bg-gray-500 transition-all disabled:pointer-events-none disabled:opacity-50"
          >
            Send Message
          </button>
        </form>
      </div>
        
    </div>
  
</section>
 <section
        className="relative py-24 md:py-24 min-h-[600px] "
        style={{
          backgroundImage: "url(/icons/O.avif)",
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
           Let's Turn This<br></br>
Message Into Momentum
          </h1>
          <p
            className="text-base md:text-lg mb-8"
            style={{ color: "rgb(20,23,46)" }}
          >
       We're excited to hear from you, and even more excited to help. Go ahead
            <br />
    and schedule your first visit. Your healing journey starts here.
          </p>
          <Link
            href="/new-patient"
            className="inline-flex items-center gap-2 mt-4 font-semibold text-white bg-[#1d4077] px-6 py-2 rounded-lg hover:bg-slate-500 transition-all"
          >
            New Patients
          </Link>
        </div>
      </section>
    
   




   

</div>

     
  );
};

export default Contact;
