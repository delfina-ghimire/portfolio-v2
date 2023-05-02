import SectionTitle from "../commons/SectionTitle";
import { BsArrowRight, BsArrowRightShort } from "react-icons/bs";
import { blogs } from "./constants";

const Blog = () => {
  return (
    <>
      <div>
        <div id="Blog" className="py-[10rem] md:pb-[4rem]">
          <SectionTitle title="Blogs" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-6">
          {blogs.map((blog) => (
            <div className="flex flex-col cursor-pointer rounded-xl bg-white shadow-lg hover:shadow-xl py-5 px-5">
              <div className="flex-1">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img key={blog?.id} src={blog?.image} alt="wallpaper" />
                </div>

                <div className="mt-10">
                  <h2 className="text-slate-700 font-semibold text-2xl">
                    {blog.title}
                  </h2>
                  <p className="mt-1 text-lg text-slate-400">{blog.category}</p>
                </div>
                <div className="mt-4 mb-[2rem]">
                  <p className="text-gray-500 text-[1.5rem]">{blog.desc}</p>
                </div>
              </div>

              <div className="flex items-center flex-wrap ">
                <button
                  className={`text-white bg-gradient-to-r ${blog.colors.from} ${blog.colors.to} hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-2 rounded-lg text-xl flex flex-row`}
                >
                  <a href={blog?.src} target="_blank">
                    Read more
                  </a>
                  <span>
                    <BsArrowRightShort size={20} />
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
          className="flex flex-row my-6 py-[5rem] text-blue-500 hover:text-blue-400"
        >
          <a target="_blank" href="https://medium.com/@around_delfi">
            Explore More
          </a>
          <span className="ml-2 mt-2">
            <BsArrowRight />
          </span>
        </a>
      </div>
      <div className="mt-6 mb-6 h-px bg-slate-200"></div>
    </>
  );
};

export default Blog;
