import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "RWCAA Clone",
  description: "Modern Next.js Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* FIXED: Added wrapper for navbar height */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        {/* FIXED: Added padding-top so content does NOT hide under navbar */}
        <main className="flex-1 pt-4 md:pt-6 lg:pt-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
