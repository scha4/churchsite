import React from "react";
import GiveHero from "./GiveHero";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";
function page() {
  return (
    <>
      <NavbarMain />
      <GiveHero />
      <Footer />
    </>
  );
}

export default page;
