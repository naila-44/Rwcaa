"use client";

import Image from "next/image";
import React from "react";

const Location: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
     
      <section
        className="relative md:py-32 lg:py-40 py-24 text-white"
        style={{
          backgroundImage: "url('/icons/smile.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/25 to-black/10" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-left">
           
            <nav className="text-sm mb-6">
              <a className="text-white/80 hover:text-white" href="/">
                Home
              </a>
              <span className="text-white/60 mx-2">/</span>
              <span className="text-white font-medium">Locations</span>
            </nav>

           
            <h1 className="font-extrabold text-4xl mb-4">Locations We Serve</h1>

           
            <p className="text-2xl md:text-3xl mb-6 leading-tight text-white drop-shadow-xl">
              Providing expert chiropractic care and holistic wellness services
              throughout Washtenaw County, Michigan.
              <br />
              Explore our comprehensive services available in your area.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-[#ff6b6b]">
             
              <div className="bg-gradient-to-r from-[#001d47] to-[#2d5087] text-white p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Our Main Office
                </h2>
                <p className="text-lg text-white/90">
                  Conveniently located in Ann Arbor, MI
                </p>
              </div>

          
              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-8">
               
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff6b6b]/10">
                    
                        <svg
                          className="h-6 w-6 text-[#ff6b6b]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                          />
                        </svg>
                      </div>

                      <div className="flex-1">
                        <h3
                          className="text-lg font-bold mb-2"
                          style={{ color: "rgb(0,29,71)" }}
                        >
                          Address
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          107 Aprill Drive Suite 5
                          <br />
                          Ann Arbor, MI 48103
                        </p>
                      </div>
                    </div>
                  </div>

                 
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff6b6b]/10">
                      <svg
                        className="h-6 w-6 text-[#ff6b6b]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M 3 5 a 2 2 0 0 1 2 -2 h 3.28 a 1 1 0 0 1 0.948 0.684 l 1.498 4.493 a 1 1 0 0 1 -0.502 1.21 l -2.257 1.13 a 11.042 11.042 0 0 0 5.516 5.516 l 1.13 -2.257 a 1 1 0 0 1 1.21 -0.502 l 4.493 1.498 a 1 1 0 0 1 0.684 0.949 V 19 a 2 2 0 0 1 -2 2 h -1 C 9.716 21 3 14.284 3 6 V 5 Z"
                        />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: "rgb(0,29,71)" }}
                      >
                        Phone
                      </h3>
                      <a
                        className="text-[#ff6b6b] hover:text-[#ff6b6b] font-semibold text-lg transition-colors"
                        href="tel:+17346618100"
                      >
                        (734) 661-8100
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff6b6b]/10">
                      <svg
                        className="h-6 w-6 text-[#ff6b6b]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M 3 8 l 7.89 5.26 a 2 2 0 0 0 2.22 0 L 21 8 M 5 19 h 14 a 2 2 0 0 0 2 -2 V 7 a 2 2 0 0 0 -2 -2 H 5 a 2 2 0 0 0 -2 2 v 10 a 2 2 0 0 0 2 2 Z"
                        />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: "rgb(0,29,71)" }}
                      >
                        Email
                      </h3>
                      <a
                        className="text-[#ff6b6b] hover:text-[#ff6b6b] font-semibold text-lg transition-colors break-all"
                        href="mailto:reception@rwcaa.com"
                      >
                        reception@rwcaa.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

<div className="mt-8 pt-8 border-t border-gray-200">
 
  <div className="grid md:grid-cols-4 text-center gap-4">
 

      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm font-semibold" style={{ color: "rgb(0,29,71)" }}>
          Monday
        </p>
        <p className="text-gray-700 text-sm font-medium">8:30 AM - 5:30 PM</p>
      </div>
    



 <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm font-semibold" style={{ color: "rgb(0,29,71)" }}>
          Tuesday
        </p>
        <p className="text-gray-700 text-sm font-medium">8:30 AM - 5:30 PM</p>
      </div>
    
  <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm font-semibold" style={{ color: "rgb(0,29,71)" }}>
          Wednesday
        </p>
        <p className="text-gray-700 text-sm font-medium">8:30 AM - 5:30 PM</p>
      </div>
        

         <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm font-semibold" style={{ color: "rgb(0,29,71)" }}>
          Thursday
        </p>
        <p className="text-gray-700 text-sm font-medium">8:30 AM - 5:30 PM</p>
      </div>
      </div>
      <p className="text-center rtext-sm text-gray-600 mt-4">
        <span className="font-semibold ">Friday-Sunday</span> Closed
      </p>
    
</div>
</div>
</div>
</div>
<h2 className=" text-3xl  font-bold mb-4 text-center" style={{color:"rgb(0,29,71)"}}> Communities We Serve -Complete Service Coverage</h2>
<p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
Explore our comprehensive chiropractic and wellness services available in your community. <br></br>Each location has dedicated pages for all our specialized services and treatment options.


</p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
  
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col border border-gray-200">
    <div className="text-xl font-semibold mb-3" style={{ color: "rgb(0,29,71)" }}>
      Washtenaw County
    </div>
    <p className="text-sm text-gray-600 mb-4">
      Comprehensive chiropractic care and wellness services for Washtenaw County residents.
    </p>
    <div className="flex-1">
      <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Our Services in Washtenaw County:</p>
      <div className="h-36 overflow-y-auto border border-gray-200 rounded-md p-2 bg-gray-50/50 mb-3">
        <ul className="space-y-2">
          <li>
            <a
              href="/location/washtenaw-county/chiropractor"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractor in Washtenaw County
            </a>
          </li>
          <li>
            <a
              href="/location/washtenaw-county/chiropractic-care"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractic Care in Washtenaw County
            </a>
          </li>
          <li>
            <a
              href="/location/washtenaw-county/chiropractor-back-pain"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractor for Back Pain in Washtenaw County
            </a>
          </li>
          <li>
            <a
              href="/location/washtenaw-county/chiropractic-adjustment"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractic Adjustment in Washtenaw County
            </a>
          </li>
        </ul>
      </div>
    </div>
    <a
      href="/appointment"
      className="block text-center py-2 px-4 rounded-lg text-white bg-[#ff6b6b] hover:bg-[#ff4e4e] transition duration-300"
    >
      Book Appointment
    </a>
  </div>

 
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col border border-gray-200">
    <div className="text-xl font-semibold mb-3" style={{ color: "rgb(0,29,71)" }}>
      Ann Arbor
    </div>
    <p className="text-sm text-gray-600 mb-4">
      Comprehensive chiropractic care and wellness services for Ann Arbor residents.
    </p>
    <div className="flex-1">
      <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Our Services in Ann Arbor:</p>
      <div className="h-36 overflow-y-auto border border-gray-200 rounded-md p-2 bg-gray-50/50 mb-3">
        <ul className="space-y-2">
          <li>
            <a
              href="/location/ann-arbor/chiropractor"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractor in Ann Arbor
            </a>
          </li>
          <li>
            <a
              href="/location/ann-arbor/chiropractic-care"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractic Care in Ann Arbor
            </a>
          </li>
          <li>
            <a
              href="/location/ann-arbor/chiropractor-back-pain"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractor for Back Pain in Ann Arbor
            </a>
          </li>
          <li>
            <a
              href="/location/ann-arbor/chiropractic-adjustment"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractic Adjustment in Ann Arbor
            </a>
          </li>
        </ul>
      </div>
    </div>
    <a
      href="/appointment"
      className="block text-center py-2 px-4 rounded-lg text-white bg-[#ff6b6b] hover:bg-[#ff4e4e] transition duration-300"
    >
      Book Appointment
    </a>
  </div>

  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col border border-gray-200">
    <div className="text-xl font-semibold mb-3" style={{ color: "rgb(0,29,71)" }}>
      Bridgewater
    </div>
    <p className="text-sm text-gray-600 mb-4">
      Comprehensive chiropractic care and wellness services for Bridgewater residents.
    </p>
    <div className="flex-1">
      <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Our Services in Bridgewater:</p>
      <div className="h-36 overflow-y-auto border border-gray-200 rounded-md p-2 bg-gray-50/50 mb-3">
        <ul className="space-y-2">
          <li>
            <a
              href="/location/bridgewater/chiropractor"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractor in Bridgewater
            </a>
          </li>
          <li>
            <a
              href="/location/bridgewater/chiropractic-care"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractic Care in Bridgewater
            </a>
          </li>
          <li>
            <a
              href="/location/bridgewater/chiropractor-back-pain"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractor for Back Pain in Bridgewater
            </a>
          </li>
          <li>
            <a
              href="/location/bridgewater/chiropractic-adjustment"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractic Adjustment in Bridgewater
            </a>
          </li>
        </ul>
      </div>
    </div>
    <a
      href="/appointment"
      className="block text-center py-2 px-4 rounded-lg text-white bg-[#ff6b6b] hover:bg-[#ff4e4e] transition duration-300"
    >
      Book Appointment
    </a>
  </div>

  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col border border-gray-200">
    <div className="text-xl font-semibold mb-3" style={{ color: "rgb(0,29,71)" }}>
      Example Location 4
    </div>
    <p className="text-sm text-gray-600 mb-4">
      Comprehensive chiropractic care and wellness services for Example Location 4 residents.
    </p>
    <div className="flex-1">
      <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Our Services in Example Location 4:</p>
      <div className="h-36 overflow-y-auto border border-gray-200 rounded-md p-2 bg-gray-50/50 mb-3">
        <ul className="space-y-2">
          <li>
            <a
              href="/location/example-location-4/chiropractor"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractor in Example Location 4
            </a>
          </li>
          <li>
            <a
              href="/location/example-location-4/chiropractic-care"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractic Care in Example Location 4
            </a>
          </li>
        </ul>
      </div>
    </div>
    <a
      href="/appointment"
      className="block text-center py-2 px-4 rounded-lg text-white bg-[#ff6b6b] hover:bg-[#ff4e4e] transition duration-300"
    >
      Book Appointment
    </a>
  </div>


  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col border border-gray-200">
    <div className="text-xl font-semibold mb-3" style={{ color: "rgb(0,29,71)" }}>
      Example Location 5
    </div>
    <p className="text-sm text-gray-600 mb-4">
      Comprehensive chiropractic care and wellness services for Example Location 5 residents.
    </p>
    <div className="flex-1">
      <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Our Services in Example Location 5:</p>
      <div className="h-36 overflow-y-auto border border-gray-200 rounded-md p-2 bg-gray-50/50 mb-3">
        <ul className="space-y-2">
          <li>
            <a
              href="/location/example-location-5/chiropractor"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractor in Example Location 5
            </a>
          </li>
          <li>
            <a
              href="/location/example-location-5/chiropractic-care"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractic Care in Example Location 5
            </a>
          </li>
        </ul>
      </div>
    </div>
    <a
      href="/appointment"
      className="block text-center py-2 px-4 rounded-lg text-white bg-[#ff6b6b] hover:bg-[#ff4e4e] transition duration-300"
    >
      Book Appointment
    </a>
  </div>

  
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col border border-gray-200">
    <div className="text-xl font-semibold mb-3" style={{ color: "rgb(0,29,71)" }}>
      Example Location 6
    </div>
    <p className="text-sm text-gray-600 mb-4">
      Comprehensive chiropractic care and wellness services for Example Location 6 residents.
    </p>
    <div className="flex-1">
      <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Our Services in Example Location 6:</p>
      <div className="h-36 overflow-y-auto border border-gray-200 rounded-md p-2 bg-gray-50/50 mb-3">
        <ul className="space-y-2">
          <li>
            <a
              href="/location/example-location-6/chiropractor"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractor in Example Location 6
            </a>
          </li>
          <li>
            <a
              href="/location/example-location-6/chiropractic-care"
              className="text-sm text-blue-600 hover:underline transition-all duration-200"
            >
              Chiropractic Care in Example Location 6
            </a>
          </li>
        </ul>
      </div>
    </div>
    <a
      href="/appointment"
      className="block text-center py-2 px-4 rounded-lg text-white bg-[#ff6b6b] hover:bg-[#ff4e4e] transition duration-300"
    >
      Book Appointment
    </a>
  </div>
</div>



<div className="bg-white py-16 mt-12">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6" style={{ color: "rgb(0,29,71)" }}>
      Complete Coverage Across Washtenaw County
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
     
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="text-4xl font-bold text-[#ff6b6b] mb-2">23</div>
        <p className="text-lg font-medium text-gray-600">Communities Served</p>
      </div>

      
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="text-4xl font-bold text-[#ff6b6b] mb-2">62</div>
        <p className="text-lg font-medium text-gray-600">Service Pages</p>
      </div>

     
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="text-4xl font-bold text-[#ff6b6b] mb-2">1,426</div>
        <p className="text-lg font-medium text-gray-600">Service + Location Combinations</p>
      </div>

    
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="text-4xl font-bold text-[#ff6b6b] mb-2">6</div>
        <p className="text-lg font-medium text-gray-600">Treatment Modalities</p>
      </div>
    </div>
  </div>
</div>
</section>

<div className="bg-white  mt-12">
  <div className="container mx-auto px-4 ">
  <div className="max-w-4xl max-auto">
    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "rgb(0,29,71)" }}>
      Why Choose Local Chiropractic Care?
    </h2>

   <div className=" grid md:grid-cols-2 gap-8 mb-12">
    <div>
      <h3 className=" text-xl font-semibold mb-4"style={{ color: "rgb(0,29,71)" }}>Convenient Access</h3>
    <p className=" text-gray-600 leading-relaxed">
      Local chiropractic care provides personalized treatment plans, ensuring that you receive the best care tailored to your specific needs. With a deep understanding of the local community, we offer comprehensive solutions for all your chiropractic wellness needs.
    </p>

   </div>
   <div>
    <h3 className="text-xl font-semibold mb-4"style={{ color: "rgb(0,29,71)" }}>
      Community-Focused Care
    </h3>

   
    <p className=" text-gray-600 leading-relaxed">
      Our team is committed to improving the health and wellness of local residents, focusing on treatments that address both your immediate concerns and long-term health goals. We pride ourselves on building relationships with the community and being a trusted partner in your wellness journey.
    </p>
  </div>
  
  <div>
    <h3 className="text-xl font-semibold mb-4"style={{ color: "rgb(0,29,71)" }}>
      Comprehensive Services
    </h3>

   
    <p className=" text-gray-600 leading-relaxed">
      Our team is committed to improving the health and wellness of local residents, focusing on treatments that address both your immediate concerns and long-term health goals. We pride ourselves on building relationships with the community and being a trusted partner in your wellness journey.
    </p>
  </div>

<div>
    <h3 className="text-xl font-semibold  mb-4"style={{ color: "rgb(0,29,71)" }}>
      Experienced Team
    </h3>

   
    <p className=" text-gray-600 leading-relaxed">
      Our team is committed to improving the health and wellness of local residents, focusing on treatments that address both your immediate concerns and long-term health goals. We pride ourselves on building relationships with the community and being a trusted partner in your wellness journey.
    </p>
  </div>
</div>
</div>
</div>



<section
  className="relative  md:py-24"
  style={{
    backgroundImage: "url('/icons/b.jpg')", 
    backgroundSize: "cover", 
    backgroundPosition: "center center", 
    backgroundRepeat: "no-repeat"
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="z-10 container relative mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl mb-6 font-bold text-white drop-shadow-2xl">
        Ready to Experience
        <br />
        Local, Expert Care?
      </h2>
      <p className="text-lg mb-8 text-white drop-shadow-md">
       No matter where you are in Washtenaw County,<br></br> we're here to help you achieve optimal health.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h2l1 5a2 2 0 002 2h6a2 2 0 002-2l1-5h2"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8" />
          </svg>
          Call (734) 661-8100
        </a>
      </div>
    </div>
  </div>
</section>


</div>



</div>

    


    
  );
};

export default Location;
