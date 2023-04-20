import hero from "../assets/hero.svg";


const Hero = () => {
  return (
    <section className="h-screen mb-40 flex bg-white">
      <div className="h-[60vh] w-6/12 flex flex-col pl-24">
        <h2 className="font-playfair items-center  text-2xl font-extrabold justify-center leading-10 text-left uppercase pt-32 pb-20  tracking-[2px]">
          Hey, I'm delfina. 👋
        </h2>
        <h1 className="font-playfair text-gray-900 text-6xl font-semibold leading-[4rem] pb-32 tracking-[2px]">
          I <span className="text-indigo-700">design &amp; build</span> <br />
          things for the web.
        </h1>
        <h4 className="leading-10 text-xl font-bold text-[#444]">
          Get in Touch 👉{" "}
          <span className="cursor-pointer shadow-md">
            delfina.ghimire@gmail.com
          </span>
        </h4>
      </div>
      <div className="w-6/12 bottom-[2%] right-[1%] ">
        <img className="w-full h-full" src={hero} alt="" srcSet="" />
      </div>
    </section>
  );
};

export default Hero;
