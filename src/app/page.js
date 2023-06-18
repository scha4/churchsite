"use client";

import VideoBack from "./components/VideoBack";
import NavbarMain from "./components/Navbar";
import Hero from "./components/Hero";
import Ministry from "./components/Ministry";
import Footer from "./components/Footer";
import Sermons from "./components/Sermons";
import MissionStatement from "./components/MissionStatement";
import Location1 from "./components/Location1";

export default function Home() {
  return (
    <>
      <NavbarMain />
      <VideoBack />
      <Hero />
      <Ministry />
      <MissionStatement />
      <Sermons />
      <Location1 />
      <Footer />
    </>
  );
}
