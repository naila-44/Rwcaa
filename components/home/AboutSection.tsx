'use client';
import React from 'react';

export default function ContactCTA() {
  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgb(29, 64, 119) 0%, rgb(45, 80, 135) 50%, rgb(53, 102, 178) 100%)',
      }}
    >
    
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 right-10 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-5 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl"></div>
      </div>

   
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl">
          
       
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Start Your
              <br />
              Healing Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Schedule your consultation today and discover how we can help you achieve lasting wellness.
            </p>
          </div>

         
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/new-patient"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white hover:bg-white/90 text-[#1d4077] font-bold rounded-full px-8 sm:px-10 py-3 sm:h-14 shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto text-center"
              aria-label="Book an Appointment"
            >
              Book an Appointment
            </a>

            <a
              href="tel:+17346618100"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-transparent hover:bg-white/10 text-white font-bold rounded-full border-2 border-white px-8 sm:px-10 py-3 sm:h-14 shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto text-center"
              aria-label="Call 734-661-8100"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
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
              Call (734) 661-8100
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
