import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServiceSection";
import Founder from "./components/Founder";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServicesSection />
        <Founder />
      </main>
      <Footer />
    </div>
  );
}

export default App;
