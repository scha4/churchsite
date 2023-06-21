import React from "react";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";
import BeliefsHero from "../components/BeliefsHero";
import Cornerstone from "../components/Cornerstone";
import StatementOfFaith from "../components/StatementOfFaith";
function page() {
  return (
    <>
      <NavbarMain />
      <BeliefsHero />
      <Cornerstone />
      <StatementOfFaith />
      <Footer />
    </>
  );
}

export default page;
