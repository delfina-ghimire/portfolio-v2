import { useState } from "react";
const ProjectCard = ({ image, title, desc, techs, icons }) => {
  function Tooltip({ text, children }) {
    const [showTooltip, setShowTooltip] = useState(false);

    // TODO Style Tooltip
    return (
      <div className="relative">
        <div
          className="inline-block"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {children}
        </div>
        {showTooltip && (
          <div className="absolute top-[-35px] w-[8rem] z-10 px-3 py-3 font-lora text-[1rem] font-bold tracking-[1px] text-blue-900 rounded-lg border bg-gray-50  border-blue-900 shadow-sm">
            {text}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <article className="flex flex-1 text-center justify-center flex-row cursor-pointer p-4 mb-[4.5rem] border border-gray-300 shadow-md rounded-[1rem] ">
        <div className="rounded-[1rem] pa-1">
          <img
            className="rounded-[1rem] border border-gray-200 shadow-sm "
            src={image}
            alt={title}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="w-[60%] p-8 text-center pb-6 pt-5">
          <h3 className="text-[2rem] font-bold leading-4 mb-8 tracking-[0.5px]">
            {title}
          </h3>
          <p className="text-[1.7rem] text-[#777] font-[400] mb-[1.5rem]">
            {desc}
          </p>
          <div className="font-[600]  text-[#777] text-[1.7rem] mb-[1.5rem] no-underline flex gap-4 items-center justify-center">
            {techs?.map((tech) => {
              return <span key={tech}>{tech}</span>;
            })}
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            {icons?.map((icon) => {
              return (
                <div>
                  <a className="p-2 cursor-pointers" href={icon.link}>
                    <Tooltip text={icon.alt}>
                      <img src={icon.src} />
                    </Tooltip>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
