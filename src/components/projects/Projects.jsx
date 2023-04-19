import SectionTitle from "../commons/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "./constants";

const Projects = () => {
  return (
    <div>
      <SectionTitle title={"Projects"} />
      <section className="flex flex-col text-center justify-center rounded-lg cursor-pointer p-20">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;