import { useEffect } from "react";
import SectionTitle from "../commons/SectionTitle";
import "./contact.css";
import shape from "../../assets/shape.png";
import mailbox from "../../assets/Mailbox.svg";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";

const socialLinks = [
  {
    key: "github",
    Icon: <FaGithub size={20} />,
  },
  { key: "facebook", Icon: <ImFacebook size={20} /> },
  { key: "twitter", Icon: <FaTwitter size={20} /> },
  { key: "linkedin", Icon: <FaLinkedin size={20} /> },
];

const ContactMe = () => {
  const handleFocus = (e) => {
    let parent = e.target.parentNode;
    parent.classList.add("focus");
  };

  const handleBlur = (e) => {
    let parent = e.target.parentNode;
    if (e.target.value === "") {
      parent.classList.remove("focus");
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);

      return () => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      };
    });
  }, []);

  return (
    <>
      <div id="Contact" className="pb-0 md:pb-[10rem]">
        <SectionTitle title={"Contact Me"} />
      </div>
      <section className="contact__container pt-10 mt-[100px]">
        <span className="big-circle" />
        <img src={shape} className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <img src={mailbox} alt="contact me" className="mailbox-img" />
            <p className="text">
              I'm open for collaboration or exciting new project or any
              questions? Feel Free to Shoot me an Email!
            </p>
            <div className="social-media">
              <p>Connect Online :</p>
              <div className="social-icons">
                {socialLinks.map(({ key, Icon }) => (
                  <a href="#" key={key}>
                    {Icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one" />
            <span className="circle two" />
            <form action="index.html" autoComplete="off">
              <h3 className="title">Say Hi!</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor>Full Name</label>
                <span>Full Name</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor>Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="text" name="subject" className="input" />
                <label htmlFor>Subject</label>
                <span>Subject</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" defaultValue={""} />
                <label htmlFor>Message</label>
                <span>Message</span>
              </div>
              <button className="form-btn">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
