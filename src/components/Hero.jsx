import hero from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="h-screen bg-white mb-40 flex">
      <div className="bg-white h-[80vh] w-6/12 flex flex-col pl-12 ">
        <h2 className="items-center text-gray-900 text-3xl font-extrabold justify-center leading-10 text-left uppercase pt-32 pb-20 tracking-[2px]">
          Hey, I'm delfina. 👋
        </h2>
        <h1 className="text-gray-900 text-6xl font-semibold leading-10 pb-32 tracking-[2px]">
          I <span className="text-indigo-700">design &amp; build</span> <br />
          things for the web.
        </h1>
        <h4 className="leading-10 text-3xl font-bold text-[#444]">
          Get in Touch 👉{" "}
          <span className="cursor-pointer shadow-md">
            delfina.ghimire@gmail.com
          </span>
        </h4>
      </div>
      <div className="w-6/12 bottom-[2%] right-[1%] border-black">
        <img className="w-full h-full" src={hero} alt="" srcSet="" />
      </div>
    </section>
  );
};

export default Hero;
