import React from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ServicesSection from "./components/ServiceSection.jsx";
import LocationSection from "./components/LocationSection.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Testimonial />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
