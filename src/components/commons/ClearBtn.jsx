import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ClearBtn = ({ btnText, link, diffPage, bordered }) => {
  return (
    <>
      <div
        href="#"
        className={`flex flex-row my-6 w-[20rem] px-4 py-3  text-blue-700 cursor-pointer hover:text-blue-500, hover:border-blue-300 hover:text-blue-500 transition-all ${
          bordered ? "border rounded-lg border-blue-500" : null
        }`}
      >
        <a target={diffPage === true ? "_blank" : undefined} href={link}>
          {btnText}
        </a>
        <span className="ml-2 mt-2 hover:ml-5 transition-all">
          <BsArrowRight />
        </span>
      </div>
    </>
  );
};

export default ClearBtn;
