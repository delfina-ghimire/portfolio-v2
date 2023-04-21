import SectionTitle from "../commons/SectionTitle";
import aboutImg from "../../assets/delfina.png";
import styles from "../../style";

const About = () => {
  return (
    <>
      <div className="pb-[10rem]">
        <SectionTitle title="About Me" />
      </div>

      <section className={styles.sectionPadding}>
        <div className="flex items-center justify-center">
          <div className="w-[90rem] h-auto">
            <img className="w-full h-full" src={aboutImg} alt="" />
          </div>
          <div className="text-center py-4 px-[4rem] text-[2rem]">
            <p className="text-slate-500">
              <b>
                I'm a self taught web developer passionate about crafting
                scalable web products that looks and feels amazing.
              </b>
              <br />
              <br />
            </p>
            <p className="text-slate-500">
              I am passionate about combining beautiful code with <br />{" "}
              beautiful design that brings out intuitive, pixel perfect user
              experiences. Programming gives me superpower to give life to
              ideas. I am always learning, polishing and challenging my skills
              to be better than I was yesterday.
              <br />
              <br />
              <b> When I'm not in front of a computer screen,</b> I'm probably
              reading a new book, traveling or practicing Spanish.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;