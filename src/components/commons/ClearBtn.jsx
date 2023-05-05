import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ClearBtn = ({ btnText, link, diffPage }) => {
  return (
    <>
      <div
        href="#"
        className="flex flex-row my-6 w-[20rem]  text-blue-700 hover:text-blue-500"
      >
        <a target={diffPage === true ? "_blank" : undefined} href={link}>
          {btnText}
        </a>
        <span className="ml-2 mt-2 hover:ml-3">
          <BsArrowRight />
        </span>
      </div>
    </>
  );
};

export default ClearBtn;
