import React from "react";
import {
  About,
  Hero,
  Blog,
  ContactMe,
  Footer,
  NavBar,
  Projects,
  Skills,
} from "../components";

export default function Home() {
  console.log("vite sucks");
  return (
    <div className="h-[100vh] w-[100vw]">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Blog />
      <Footer />
    </div>
  );
}
