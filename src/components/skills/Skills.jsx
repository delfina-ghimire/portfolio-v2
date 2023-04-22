import SectionTitle from "../commons/SectionTitle";
import { skills } from "./constants";

const Skills = () => {
  return (
    <div>
      <SectionTitle title="Skills" />
      <section className="flex flex-col gap-16 md:gap-0 md:flex-row pt-10 md:pt-[10rem] pb-10 md:pb-0">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex-1 flex flex-col items-center justify-start  "
          >
            <div className="w-[100px] h-[100px] ">
              <img
                className="w-full h-full"
                src={skill.icon}
                alt={skill.title}
              />
            </div>
            <div className="text-center">
              <h4 className="text-[1.5rem] md:text-[2rem] font-bold px-8 -py-[-2rem] md:py-6">
                {skill.title}
              </h4>
              <ul className="text-gray-600 text-center text-2xl md:text-3xl leading-10">
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
