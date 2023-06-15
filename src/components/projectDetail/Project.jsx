import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSFill } from "react-icons/ri";

function InnerTitle({ title }) {
  return (
    <div className="font-[600]  text-[#777] text-[1.5rem] md:text-[1.7rem] mb-[1rem] no-underline items-center justify-center ">
      {title}
    </div>
  );
}

const Project = ({ id, image, title, desc, techs, responsibilities }) => {
  return (
    <>
      <article className="flex flex-col md:flex-row flex-1 p-4 mb-[4.5rem]   text-[1.5rem] md:text-[2rem] ">
        <div className="w-full md:w-[60%] p-8  pb-6 pt-5">
          <h3 className=" font-bold leading-4 mb-8 tracking-[0.5px] pt-4 md:pt-10">
            {title}
          </h3>
          <p className="text-[1.4rem] md:text-[1.7rem] text-[#777] font-[400] mb-[1.5rem]">
            {desc}
          </p>

          <InnerTitle title="Responsibilities" />

          <div className="font-[400]  text-[#777] text-[1.4rem] md:text-[1.6rem] mb-[1.5rem] no-underline flex flex-col   justify-center gap-2">
            {responsibilities?.map((responsibility, i) => {
              return (
                <span className="flex items-center" key={i + 5}>
                  {" "}
                  <RiArrowRightSFill />
                  {responsibility}
                </span>
              );
            })}
          </div>
          <InnerTitle title="Technologies" />
          <div className="font-[600]   text-[#777] text-[1.5rem] md:text-[1.4rem] mb-[1.5rem] no-underline flex flex-wrap gap-4 items-center ">
            {techs?.map((tech, i) => {
              return (
                <span
                  className="border border-blue-500 px-3 py-1 rounded-3xl"
                  key={i + 5}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        <div className="rounded-[1rem] pa-1">
          <img
            className="rounded-[1rem] border border-gray-200 shadow-sm "
            src={image}
            alt={title}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </article>
    </>
  );
};

export default Project;
