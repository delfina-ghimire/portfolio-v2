import React, { useEffect } from "react";
import "../App.css";
import "../index.css";
import { About, Footer, Hero, Navbar } from "../components";
import SectionTitle from "../components/commons/SectionTitle";

import { AboutProject } from "../components/projectDetail/AboutProject";

function ProjectDetail() {
  useEffect(() => {
    document.title = "delfina | Frontend Developer";
  }, []);

  return (
    <div className="p-0 sm:px-[5rem] ">
      <Navbar halfNav={true} />
      <div className="mt-20">
        <AboutProject />
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetail;
