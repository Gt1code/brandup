import React from "react";
import Navbar from "./comp/Navbar";
import Hero from "./comp/Hero";
import About from "./comp/About";
import ServicesSection from "./comp/ServiceSection";
import Founder from "./comp/Founder";
import Testimonials from "./comp/Testimonials";
import Faq from "./comp/Faq";
import Footer from "./comp/Footer";

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
