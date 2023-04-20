import { useState } from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import { navBarSection } from "./constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-5 px-36 py-10a bg-slate-50 navbar">
      <div>
        <a href="#">
          <img src={logo} alt="delfina frontend developer logo" width={150} />
        </a>
      </div>
      <div>
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
    </nav>
  );
};

export default Navbar;
