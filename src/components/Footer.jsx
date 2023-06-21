import { BsMedium } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    key: "github",
    Icon: <FaGithub size={24} />,
    link: "https://github.com/delfina-ghimire",
  },
  {
    key: "medium",
    Icon: <BsMedium size={24} />,
    link: "https://medium.com/@around_delfi",
  },
  {
    key: "twitter",
    Icon: <FaTwitter size={24} />,
    link: "https://twitter.com/around_delfi",
  },
  {
    key: "linkedin",
    Icon: <FaLinkedin size={24} />,
    link: "https://www.linkedin.com/in/delfina-ghimire-a9a999188/",
  },
];

const Footer = () => {
  return (
    <footer id="#socials">
      <div className="mt-6 mb-6 h-px bg-slate-200"></div>
      <div className="w-full text-2xl text-center py-[6rem] ">
        <div className="flex justify-center gap-3 pb-5">
          {socialLinks.map(({ key, Icon, link }) => (
            <a
              className="text-blue-700 hover:text-blue-500 hover:scale-150 hover:shadow-sm "
              href={link}
              key={key}
            >
              {Icon}
            </a>
          ))}
        </div>
        <p>
          Copyright &copy; 2023. Design & Developed with ❤️ by
          <a href="#" className="text-blue-700">
            {" "}
            delfina.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
