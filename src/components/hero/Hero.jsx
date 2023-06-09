import { useState } from "react";
import hero from "../../assets/hero.svg";
import "./style.css";
import ClearBtn from "../commons/ClearBtn";

const Hero = () => {
  return (
    <section className="my-0 md:my-40 flex md:flex-row flex-col  bg-white">
      <div className="w-full md:w-6/12 flex-1 flex-col pl-24">
        <h2 className="font-playfair items-center text-[1.5rem] md:text-[2rem] font-extrabold justify-center leading-10 text-left uppercase pt-32 pb-5 md:pb-20  tracking-[2px]">
          Hey, I'm delfina. 👋
        </h2>
        <h1 className="font-playfair  text-gray-900 text-[4rem] md:text-[6.7rem] font-semibold  md:pb-32 tracking-[2px] leading-[4rem]  md:leading-[7.8rem]">
          I <span className="text-indigo-700">design &amp; build</span> <br />
          things for the web.
        </h1>
        <h4 className="invisible md:visible leading-10 text-[2rem] font-bold text-[#444]">
          Get in Touch 👉{" "}
          <span
            onClick={() => {
              navigator.clipboard.writeText("delfina.ghimire@gmail.com");
            }}
            className="cursor-pointer shadow-sm link link-underline link-underline-black "
          >
            delfina.ghimire@gmail.com
          </span>
          <div className="mt-[7rem] font-thin text-[1.5rem]">
            <ClearBtn btnText={"View my works"} link={"#Projects"} />
          </div>
        </h4>
      </div>

      <div className=" flex-1 w-[100%] md:w-6/12 pb-8 md:pb-0">
        <img className="w-full h-full" src={hero} alt="" srcSet="" />
      </div>
    </section>
  );
};

export default Hero;
