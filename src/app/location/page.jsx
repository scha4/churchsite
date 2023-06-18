import React from "react";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";
import LocationHero from "../components/LocationHero";
import LocationSection from "../components/LocationSection";
function page() {
  return (
    <>
      <NavbarMain />
      <LocationHero />
      <LocationSection />
      <Footer />
    </>
  );
}

export default page;
