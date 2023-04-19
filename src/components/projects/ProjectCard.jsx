const ProjectCard = ({ image, title, desc, techs }) => {
  console.log("hello", techs);
  return (
    <div>
      <article className="flex flex-1 text-center justify-center flex-row rounded-lg cursor-pointer p-4  mb-2">
        <div className="w-[100%] md:w-[40%] h-64 object-contain rounded-lg pa-1">
          <img
            className="w-full rounded-lg object-cover"
            src={image}
            alt={title}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="w-[60%] p-8 text-center pb-6 pt-5">
          <h3 className="text-3xl font-bold leading-4 mb-8">{title}</h3>
          <p className="text-3xl font-light mb-6">{desc}</p>
          <div className="font-semibold text-3xl mb-6 no-underline flex items-center justify-center">
            {techs?.map((tech) => {
              return <span key={tech}>{tech}</span>;
            })}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
