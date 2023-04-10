import React from "react";
import SectionTitle from "./SectionTitle";
import aboutImg from "../assets/delfina.png";

const About = () => {
  return (
    <>
      <SectionTitle title="About Me" />
      <section>
        <div className="flex items-center justify-center">
          <div className="w-64 h-auto">
            <img className="w-full h-full" src={aboutImg} alt="" />
          </div>
          <div className="text-center py-5 px-5">
            <p className="text-slate-500">
              <b>
                I'm a self taught web developer passionate about crafting
                scalable web products that looks and feels amazing.
              </b>
              <br />
              <br />
            </p>
            <p className="text-slate-500">
              I am passionate about combining beautiful code with <br />{" "}
              beautiful design that brings out intuitive, pixel perfect user
              experiences. Programming gives me superpower to give life to
              ideas. I am always learning, polishing and challenging my skills
              to be better than I was yesterday.
              <br />
              <br />
              <b> When I'm not in front of a computer screen,</b> I'm probably
              reading new book, traveling, practicing Spanish or volunteering.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
