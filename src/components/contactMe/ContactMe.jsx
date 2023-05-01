import { useEffect, useState } from "react";
import SectionTitle from "../commons/SectionTitle";
import "./contact.css";
import shape from "../../assets/shape.png";
import mailbox from "../../assets/Mailbox.svg";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import emailjs from "@emailjs/browser";
import { emailJS } from "../../../config";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleSubmit = () => {
    emailjs
      .send(
        emailJS.serviceID,
        emailJS.templateID,
        {
          from_name: formData?.name,
          message: formData?.message,
          subject: formData?.subject,
          from_email: formData?.email,
        },
        emailJS.publicID
      )
      .then(
        (result) => {
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
              <h3 className="title">Say Hi!</h3>
              <div className="input-container">
                <input
                  value={formData?.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                  name="name"
                  className="input"
                />
                <label>Full Name</label>
                <span>Full Name</span>
              </div>
              <div className="input-container">
                <input
                  value={formData?.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  name="email"
                  className="input"
                />
                <label>Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  value={formData?.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  type="text"
                  name="subject"
                  className="input"
                />
                <label>Subject</label>
                <span>Subject</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  value={formData?.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  name="message"
                  className="input"
                  defaultValue={""}
                />
                <label>Message</label>
                <span>Message</span>
              </div>
              <button onClick={() => handleSubmit()} className="form-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
