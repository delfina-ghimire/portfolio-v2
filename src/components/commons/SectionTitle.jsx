const SectionTitle = (props) => {
  return (
    <section className="flex items-center justify-center relative">
      <h2 className="text-gray-900 text-6xl font-bold leading-10">
        {props.title}
      </h2>
      <span className="w-16 h-1 absolute bg-indigo-700 bottom-[-25px] left-[48%]"></span>
    </section>
  );
};

export default SectionTitle;
