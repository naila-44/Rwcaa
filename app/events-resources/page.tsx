import Link from "next/link";

export default function EventsResourcesPage() {
  return (
    <main className="min-h-screen">
    
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ color: "rgb(29,64,119)" }}
            >
              Events & Resources
            </h1>

            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "rgb(29,64,119)" }}
            >
              Healing Happens Together
            </h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
             At Restorative Wellness Center, we believe that healing is a journey best taken in<br></br> community. That's why we host events, workshops, and gatherings designed to help<br></br> you learn, grow, and connect with others on a similar path.
            </p>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
         This is also where you'll find helpful videos and resources packed with insight into
          how your body heals—and how you can support that process every day. Whether
           you're joining us in person or exploring from home, we're here to share knowledge,
            spark connection, and support your wellness journey.
            </p>
          </div>
        </div>
      </section>
<section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-2 items-start">
                <div>
                    <p className=" text-sm font-bold uppercase tracking-wide text-red-600 mb-2">"Wed DEC 10"
                        |
                        "6:00 PM" </p>
                        <h3 className=" text-3xl md:text-4xl font-bold mb-3"  style={{ color: "rgb(29,64,119)" }}>Enjoy the Holidays without Burn out</h3>
                         <p className=" text-xl font-semibold mb-4"  style={{ color: "rgb(29,64,119)" }}>holiday Stress Workshop with Dr. Geck</p>
 <p className=" text-base text-gray-700 leading-relaxed mb-6">Learn practical strategies to navigate the holiday season without 
    compromising your health and well-being. Dr. Geck will share
     insights on managing food-related challenges and breaking free 
     from unhealthy patterns.</p>
 <div className="mb-6">
    <p className=" font-bold mb-3 text-base text-gray-900">What You'll Learn:</p>
    <ul className="space-y-2">
        <li className="flex items-start gap-2">•
Nutritional advice to avoid flu season</li>
         <li className="flex items-start gap-2">•
Nutritional tips for lifelong stress-management</li>
          <li className="flex items-start gap-2">•
How to cheat without gaining weight</li>
           <li className="flex items-start gap-2">•
Improve energy, sleep, and performance after stressful times</li>
    </ul>
 </div>
 <div className="mb-6 p-4 bg-gray-50 rounded-lg">
    <p className="font-semibold text-gray-900 mb-1">Location:</p>
    <p className="text-gray-700">Restorative Wellness Center, 107 Aprill Dr., Suite 5, Ann Arbor, MI
         48103</p>
 </div>
 <div className=" mb-6 p-6 bg-gradient-to-br from-[#1D4077] to-[#2d5087] rounded-lg shadow-lg">
    <p className=" font-bold text-xl text-white mb-3">Reserve your spot today!</p>
   <a href="https://www.eventbrite.com/e/holiday-stress-enjoying-the-holidays-without-burnout-tickets-1975016636927?utm-campaign=social&amp;utm-content=attendeeshare&amp;utm-medium=discovery&amp;utm-term=listing&amp;utm-source=cp&amp;aff=ebdsshcopyurl" target="_blank" rel="noopener noreferrer" data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md px-6 has-[&gt;svg]:px-4 w-full bg-white hover:bg-gray-100 text-[#1D4077] font-bold text-lg mb-4">Register Online Now →</a>
    <div className="border-t border-white/30 pt-4">
    <p className="text-white text-sm mb-2">
        <strong>or call to register:</strong>
    </p>
    <p className="text-white text-lg font-semibold">734-661-8100</p>
    <p className="text-white text-sm">Email:
    <a href="mailto:reception@rwcaa.com"className="underline hover:text-gray-200">reception@rwcaa.com</a>

</p>

</div>
</div>
<p className="text-sm font-bold text-red-600">Limited seating - don't miss out!</p>
</div>
<div className="overflow-hidden rounded-lg shadow-xl">
    <img alt="enjoy the holidays without burn out" className="w-full h-[500px] object-cover"
    src="/icons/event.jpg"/>
</div>
</div>
</div>
</div>
</section>

      <section
        className="relative py-24 md:py-32 min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/events.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-2xl">
              Ready to Join the <br /> Healing Community?
            </h2>

            <p className="text-lg md:text-xl mb-8 text-white/95 drop-shadow-lg leading-relaxed">
              Be part of events and initiatives that inspire healing, learning,
              and connection.
            </p>

            <Link
              href="/new-patient"
              className="inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-[#1D4077] rounded-lg hover:bg-[#16315a] transition"
            > New Patients start Here

            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
