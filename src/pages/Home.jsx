import React from "react";
import {
  About,
  Blog,
  ContactMe,
  Footer,
  NavBar,
  Projects,
  Skills,
} from "../components";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] ">
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Blog />
      <Footer />
    </div>
  );
}
