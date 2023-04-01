import "./index.css";
import logo from "../../assets/logo.png";

const navBarSection = [
  { link: "#About", title: "About" },
  { link: "#Skills", title: "Skills" },
  { link: "#Project", title: "Project" },
  { link: "#Blog", title: "Blog" },
  { link: "#Contact", title: "Contact" },
];
export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-5  bg-slate-50 ">
      <div>
        <a href="#">
          <img src={logo} alt="delfina frontend developer logo" width={150} />
        </a>
      </div>
      <nav>
        {navBarSection.map(({ link, title }) => (
          <a
            className="ml-8 text-3xl text-gray-900 hover:text-indigo-700"
            href={link}
          >
            {title}
          </a>
        ))}
      </nav>
    </header>
  );
}
 