import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import { About, ContactMe, Hero, Navbar, Projects, Skills } from "./components";

function App() {
  useEffect(() => {
    document.title = "delfina | Frontend Developer";
  }, []);

  return (
    <div className="p-24">
      <Navbar />
      <div className="mt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
