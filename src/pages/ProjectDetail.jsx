import React, { useEffect } from "react";
import "../App.css";
import "../index.css";
import { Navbar } from "../components";

function ProjectDetail() {
  useEffect(() => {
    document.title = "delfina | Frontend Developer";
  }, []);

  return (
    <div className="p-0 sm:px-[5rem] ">
      <Navbar halfNav={true} />
    </div>
  );
}

export default ProjectDetail;
