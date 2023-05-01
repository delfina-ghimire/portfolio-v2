import SectionTitle from "../commons/SectionTitle";
import { BsArrowRight, BsArrowRightShort } from "react-icons/bs";
import { blogs } from "./constants";

const Blog = () => {
  return (
    <>
      <div>
        <div id="Blogs" className="py-[10rem] md:pb-[4rem]">
          <SectionTitle title="Blogs" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-6">
          {blogs.map((blog) => (
            <div class="flex flex-col cursor-pointer rounded-xl bg-white shadow-lg hover:shadow-xl py-5 px-5">
             <div className="flex-1">
             <div class="relative flex items-end overflow-hidden rounded-xl">
                <img key={blog?.id} src={blog?.image} alt="wallpaper" />
              </div>

              <div class="mt-5">
                <h2 class="text-slate-700 text-2xl">{blog.title}</h2>
                <p class="mt-1 text-lg text-slate-400">{blog.category}</p>
              </div>
              <div className="my-[1rem]">
                <p class="text-gray-500 text-[1.5rem]">{blog.desc}</p>
              </div>
              </div>
             
              <div class="flex items-center flex-wrap ">
                <button class={`text-white bg-gradient-to-r ${blog.colors.from} ${blog.colors.to} hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-2 rounded-lg text-xl flex flex-row`}>
                  <span>Read more</span>
                  <span><BsArrowRightShort size={20}/>
                  </span>

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="#"
          className="flex flex-row my-6 text-blue-500 hover:text-blue-400"
        >
          <span>Explore More</span>
          <span className="ml-2 mt-2">
            <BsArrowRight />
          </span>
        </a>
      </div>
      <div class="mt-6 mb-6 h-px bg-slate-200"></div>
    
    </>
  );
};

export default Blog;
