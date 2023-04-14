const ProjectCard = ({ img, title, desc, tech }) => {
  return (
    <div>
      <article className="flex text-center justify-center flex-row rounded-lg cursor-pointer p-4  mb-2">
        <div className="w-64 object-contain rounded-lg pa-1">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={img}
            alt={title}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="p-8 text-center pb-6 pt-5">
          <h3 className="text-3xl font-bold leading-4 mb-8">{title}</h3>
          <p className="text-3xl font-light mb-6">{desc}</p>
          <ul className="font-semibold text-3xl mb-6 no-underline flex items-center justify-center">
            {tech.map((tech) => {
              <li>{tech}</li>;
            })}
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
