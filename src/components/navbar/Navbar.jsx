import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import { navBarSection } from "./constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const shouldActivateHeader = window.scrollY > 0;
      if (!headerActive && shouldActivateHeader) {
        setHeaderActive(true);
      } else {
        if (!shouldActivateHeader && headerActive) {
          setHeaderActive(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerActive]);
  return (
    <nav>
      <div
        className={`fixed top-0 left-0 right-0 flex items-center justify-between p-8  px-36 py-10 ${
          headerActive ? "bg-white shadow-lg" : ""
        }`}
      >
        <div>
          <a href="#">
            <img src={logo} alt="delfina frontend developer logo" width={150} />
          </a>
        </div>
        <div>
          <div className="invisible md:visible">
            {navBarSection.map(({ link, title }) => (
              <a
                key={title}
                className="ml-8 text-3xl text-gray-900 hover:text-indigo-700"
                href={link}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
        {/* navbar for small device */}
        <div className="visible sm:invisible flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${toggle ? "flex" : "hidden"} 
            p-6 bg-red-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navBarSection.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-lora font-normal cursor-pointer text-[16px] text-white
                ${
                  index === navBarSection.length - 1 ? "mr-0" : "mb-4"
                }           
           `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
