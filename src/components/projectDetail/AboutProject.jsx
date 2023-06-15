import SectionTitle from "../commons/SectionTitle";
import tiggBanner from "../../assets/banner.png";
import ClearBtn from "../commons/ClearBtn";
import Project from "./Project";
import { projectContent } from "./constant";

export function AboutProject() {
  return (
    <div>
      <div
        className="mb-10"
        style={{
          backgroundImage: `url(${tiggBanner})`,
          height: "30rem",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-white">Tigg Accounting Software</h2>
      </div>
      {/* <img className="shadow-lg" src={tiggBanner} /> */}
      <p className="md:text-[1.8rem] text-[#777] font-[400] flex justify-center items-center px-10  ">
        Tigg is a cloud-based accounting software that combines accounting,
        billing, and bookkeeping in one solution. It offers a user-friendly
        interface, simplifying financial management for new users. Tigg handles
        tasks like invoicing, accounts payable/receivable, and generates
        financial reports, streamlining processes amd efficiently manage
        finances with its comprehensive features and ease of use.
      </p>
      <div className="px-10">
        <ClearBtn
          btnText={"Checkout Tigg"}
          link={"https://www.tiggapp.com/"}
          diffPage={true}
        />
      </div>

      {projectContent.map((projectContent) => (
        <Project key={projectContent.key} {...projectContent} />
      ))}
    </div>
  );
}
