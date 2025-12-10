
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#001D47",
        color: "#fff",
        padding: "50px 20px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        <div style={{ minWidth: "240px", flex: "1 1 240px" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>
            Restorative Wellness Center
          </h3>
          <p style={{ lineHeight: 1.6 }}>
            Expert chiropractic care, clinical nutrition, and holistic wellness services in Ann Arbor, Michigan.
          </p>
          <p style={{ marginTop: "16px" }}>📞 <strong>(734) 661-8100</strong></p>
          <p>📧 reception@rwcaa.com</p>
        </div>
        <div style={{ minWidth: "180px", flex: "1 1 180px" }}>
  <h4 style={{ marginBottom: "12px", color: "#fff" }}>Quick Links</h4>
  <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
    <li>
      <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
    </li>
    <li>
      <Link href="/why-rwc" style={{ color: "#fff", textDecoration: "none" }}>Why RWC</Link>
    </li>
    <li>
      <Link href="/services" style={{ color: "#fff", textDecoration: "none" }}>Services</Link>
    </li>
    <li>
      <Link href="/locations" style={{ color: "#fff", textDecoration: "none" }}>Locations</Link>
    </li>
    <li>
      <Link href="/resources" style={{ color: "#fff", textDecoration: "none" }}>Resources</Link>
    </li>
    <li>
      <Link href="/success-stories" style={{ color: "#fff", textDecoration: "none" }}>Success Stories</Link>
    </li>
    <li>
      <Link href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
    </li>
  </ul>
</div>
        <div style={{ minWidth: "180px", flex: "1 1 180px" }}>
          <h4 style={{ marginBottom: "12px", color: "#fff" }}>Our Services</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li>Neuro-Muscular Chiropractic</li>
            <li>Acoustic Shockwave Therapy</li>
            <li>Clinical Nutrition</li>
            <li>Quantum Neuro Reset Therapy (QNRT)®</li>
            <li>Neurofeedback</li>
            <li>Biofeedback & PEMF Therapy</li>
          </ul>
          <p style={{ marginTop: "8px", color: "#ff4c4c", cursor: "pointer" }}>
            View All Services →
          </p>
        </div>
        <div style={{ minWidth: "220px", flex: "1 1 220px" }}>
          <h4 style={{ marginBottom: "12px", color: "#fff" }}>Visit Us</h4>
          <p>
            107 Aprill Drive Suite 5<br />
            Ann Arbor, MI 48103
          </p>

          <h4 style={{ marginTop: "20px", marginBottom: "12px", color: "#fff" }}>Office Hours</h4>
          <p>Monday: 8:30 AM – 5:30 PM</p>
          <p>Tuesday: 8:30 AM – 1:30 PM</p>
          <p>Wednesday: 12:30 PM – 5:30 PM</p>
          <p>Thursday: 8:30 AM – 5:30 PM</p>
          <p>Fri - Sun: Closed</p>
        </div>
      </div>
      <div
        style={{
          marginTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "20px",
        
          fontSize: "0.9rem",
          gap:"4rem",
          opacity: 0.8,
          marginLeft:"3px"
        }}
      >
      <p style={{
  marginBottom: "1rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
   
}}>
  <strong>Service Areas:</strong>
  <span>Ann Arbor |</span>
  <span>Chelsea |</span>
  <span>Dexter |</span>
  <span>Ypsilanti |</span>
  <span>Saline |</span>
  <span>Washtenaw County</span>
</p>
 <p 
  style={{
   
    marginTop: "2rem",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "2rem", 
    
  }}
>
  <span>© 2025 Restorative Wellness Center. All rights reserved.</span>

  <a
  href="/sitemap"
  style={{
    color: "inherit",
    textDecoration: "underline",
    marginRight: "40rem", 
  }}
>
  Sitemap
</a>

<a
  href="/sitemap.xml"
  style={{
    color: "inherit",
    textDecoration: "underline",
  
  }}
>
  XML Sitemap
</a>

</p>
</div>
    </footer>
  );
};

export default Footer;
