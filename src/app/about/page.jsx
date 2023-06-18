import React from "react";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
function page() {
  return (
    <>
      <NavbarMain />
      <AboutHero />
      <AboutSection />
      <Footer />
    </>
  );
}

export default page;
