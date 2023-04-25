const SectionTitle = (props) => {
  return (
    <section className="flex items-center justify-center relative -z-10">
      <h2 className="text-gray-900 md:text-6xl text-5xl font-bold leading-10">
        {props.title}
      </h2>
      <span className="w-16 md:h-1  h-[2px] absolute bg-indigo-700 md:bottom-[-20px] bottom-[-8px] left-[48%]"></span>
    </section>
  );
};

export default SectionTitle;
