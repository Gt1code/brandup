import React from "react";
import Navbar from "./components/landing/nav-bar/Navbar";
import Hero from "./components/landing/hero/Hero";
import About from "./components/landing/about/About";
import ServicesSection from "./components/landing/about-services/ServiceSection";
import Founder from "./components/landing/founder/Founder";
import Testimonials from "./components/landing/testimonials/Testimonials";
import Faq from "./components/landing/faqs/Faq";
import Footer from "./components/landing/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServicesSection />
        <Founder />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
