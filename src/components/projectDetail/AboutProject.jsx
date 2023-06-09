import SectionTitle from "../commons/SectionTitle";
import tiggBanner from "../../assets/banner.png";
import ClearBtn from "../commons/ClearBtn";

export function AboutProject() {
  return (
    <div>
      <div
        className="pb-10"
        style={{
          backgroundImage: `url(${tiggBanner})`,
          height: "!00%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-white">Tigg Accounting Software</h2>
      </div>
      {/* <img className="shadow-lg" src={tiggBanner} /> */}
      <p className="md:text-[1.8rem] text-[#777] font-[400] flex justify-center items-center text-center px-32  ">
        Tigg is a cloud-based accounting software that combines accounting,
        billing, and bookkeeping in one solution. It offers a user-friendly
        interface, simplifying financial management for new users. Tigg handles
        tasks like invoicing, accounts payable/receivable, and generates
        financial reports, streamlining processes amd efficiently manage
        finances with its comprehensive features and ease of use.
      </p>
      <div className="flex justify-center text-center">
        <ClearBtn
          btnText={"Checkout Tigg"}
          link={"https://www.tiggapp.com/"}
          diffPage={true}
        />
      </div>

      <div>
        <div>
          {" "}
          <h2>My Responsibilities test2</h2>
        </div>

        <p>
          Under the umbrella of Tigg, I got work on various code base which
          included :
        </p>
        <div>
          <button>Tigg POS</button>
          <button>Admin Panel</button>
          <button>Web App</button>
        </div>
        <div>
          <h2>Point of Sale / Service</h2>
          <p>Description</p>
          <h3>Responsibiliies</h3>
          <ul>
            <li>lists of responsibilities</li>
          </ul>
          <h3>Technologies uses</h3>
        </div>
      </div>
      <div>image carousel</div>
    </div>
  );
}
