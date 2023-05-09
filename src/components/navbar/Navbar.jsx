import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import { navBarSection } from "./constants";
import { useSpring, animated } from "@react-spring/web";
import resume from "../../assets/docs/delfina_ghimire_frontend_resume.pdf";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  const styles = useSpring({
    from: {
      x: openSidebar ? 100 : 1,
      opacity: openSidebar ? 0 : 1,
      delay: 1000,
    },
    to: {
      x: openSidebar ? 0 : 100,
      opacity: openSidebar ? 1 : 0,
      delay: 500,
    },
    config: {
      mass: 1,
      friction: 26,
      tension: 170,
    },
  });

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
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <div
        className={`flex fixed top-0 left-0 right-0 z-[1200] items-center justify-between p-10 md:px-36 py-10  ${
          headerActive ? "bg-white shadow-lg" : ""
        }`}
      >
        <div>
          <a href="#">
            <img src={logo} alt="delfina frontend developer logo" width={150} />
          </a>
        </div>
        <div>
          <div className="hidden sm:flex text-xl md:text-3xl text-gray-900">
            {navBarSection.map(({ link, title }) => (
              <a
                key={title}
                className="ml-8 py-2 hover:text-indigo-700 "
                href={link}
              >
                {title}
              </a>
            ))}
            <a
              href={resume}
              download="delfina_frontend_resume"
              className="px-4 ml-7 text-center py-2 border border-blue-500 hover:text-indigo-700 "
            >
              Resume
            </a>
          </div>
        </div>

        {/* navbar for small devices */}
        <div className="relative sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menu}
            alt="menu"
            className="w-[36px] h-[36px] object-contain cursor-pointer bg-gray-600 rounded-md p-2  shadow-sm"
            onClick={() => {
              setOpenSidebar(true);
            }}
          />
          {openSidebar ? (
            <>
              <animated.div
                className="absolute -top-[20px] -right-[20px] h-[100vh] w-[50vw] flex flex-1"
                style={styles}
              >
                <img
                  src={close}
                  alt="menu"
                  className="w-[36px] h-[36px] object-contain cursor-pointer bg-transparent rounded-md p-2  shadow-sm absolute right-2 top-3 border border-gray-300"
                  onClick={() => {
                    setOpenSidebar((prev) => !prev);
                  }}
                />
                <ul className="list-none flex flex-col justify-center items-center flex-1 gap-4  bg-gray-500 border border-white-300 shadow-lg ">
                  {navBarSection.map(({ link, title }) => (
                    <a
                      key={title}
                      className="font-lora font-normal cursor-pointer text-[20px] text-white"
                      href={link}
                    >
                      {title}
                    </a>
                  ))}
                </ul>
              </animated.div>
              <div
                className="fixed inset-0 z-40 bg-black opacity-40"
                onClick={() => setOpenSidebar(false)}
              ></div>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

