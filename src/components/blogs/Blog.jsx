import SectionTitle from "../commons/SectionTitle";
import { BsArrowRight } from "react-icons/bs";

const Blog = () => {
  return (
    <>
      <div>
        <div id="Blogs" className="py-[10rem] md:pb-[4rem]">
          <SectionTitle title="Blogs" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img
                src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
                alt="wallpaper"
              />
            </div>

            <div class="mt-1 p-2">
              <h2 class="text-slate-700">The Malta Hotel</h2>
              <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>
            </div>
            <div className="my-[1rem]">
              <p class="text-gray-500 text-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt sapiente totam sequi repellendus molestiae. Accusamus
                quasi, temporibus libero nostrum tempore tempora, blanditiis
                minima cum praesentium deleniti facilis ex alias magnam.
              </p>
            </div>
            <div class="flex items-center flex-wrap ">
              <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center flex-wrap ">
        <button class="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
          Learn more
        </button>
      </div>
      <div className="flex justify-center text-center border border-red-900">
        <a
          href="#"
          className="flex flex-row w-96 mt-6 text-purple-500 hover:text-purple-400"
        >
          <span>Read More</span>
          <span className="ml-2 mt-2">
            <BsArrowRight />
          </span>
        </a>
      </div>
      <div class="mt-6 mb-6 h-px bg-slate-200"></div>
      <div class="flex items-center justify-center flex-wrap ">
        <button class="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
          Learn more
        </button>
      </div>
    </>
  );
};

export default Blog;
