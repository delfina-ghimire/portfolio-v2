import React, { useEffect } from "react";
import "../App.css";
import "../index.css";
import {
  About,
  Blog,
  ContactMe,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "../components";

function Home() {
  useEffect(() => {
    document.title = "delfina | Frontend Developer";
  }, []);

  return (
    <div className="p-0 sm:px-[5rem] ">
      <Navbar />
      <div className="mt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
