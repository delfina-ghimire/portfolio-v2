import SectionTitle from "./SectionTitle";
import { skills } from "../constants";

const Skills = () => {
  return (
    <div>
      <SectionTitle title="Skills" />
      <section className="flex pt-28">
        {skills.map((skill) => (
          <div className="text-center relative  ">
            <div className="w-24 h-24  absolute left-[30%] ">
              <img
                className="w-full h-full"
                src={skill.icon}
                alt="development"
              />
            </div>
            <div className="mt-24">
              <h4 className="text-3xl px-8 py-6">{skill.title}</h4>
              <ul className="text-gray-600 text-center text-3xl leading-10">
                {skill.list.map((item) => (
                  <div>{item}</div>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
