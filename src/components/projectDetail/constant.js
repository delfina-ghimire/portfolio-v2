import project1 from "../../assets/tigg-pos.png";
import project2 from "../../assets/konva.png";
import project3 from "../../assets/p3.png";
import project4 from "../../assets/p4.png";
import github from "../../assets/icons/github.svg";
import live from "../../assets/icons/external-link.svg";

export const projectContent = [
  {
    image: project1,
    secondImg: project2,
    id: "project-1",
    title: "Tigg POS",
    desc: "It streamlines Point of Sale/Service (POS)  with advanced features including inventory management, sales tracking, and payment processing also providing a seamless transactional experience for businesses in the retail and service industries.",
    techs: [
      "Next.js",
      "Redux",
      "React Query",
      "Redux Toolkit",
      "Axios",
      "React Table",
      "React Hook Form",
      "Konva",
    ],
    responsibilities: [
      "Developed new pages and components, ensuring adherence to design concepts and wireframes.",
      "Collaborated closely with designers, managers, and the team to meet project requirements.",
      "Implemented new screens, integrating them seamlessly into the existing application.",
      "Research and development.",
      "Integrated the software with in-house APIs.",
    ],
    extraInfo:
      "I also had the opportunity to figure out a viable technology for generating a simulated restaurant floor plan. With my research, I found 'Konva' to be the perfect fit and I successfully developed a minimum viable product (MVP) featuring essential functionalities such as shape addition, drag-and-drop, shape editing, and deletion. ",
  },

  {
    image: project1,
    id: "project-2",
    title: "Tigg Admin Dashboard",
    desc: "It  a interface for authorized admins to manage, monitor, and configure Tigg web application. It provides features like user management, content editing, data and analytics, configuration, communication & updates and system monitoring.",
    techs: [
      "React",
      "Ant-design",
      "Axios",
      "React Hook Form",
      "React Router DOM",
      "React Spring",
      "swagger-ui-react",
    ],
    responsibilities: [
      "Revamped old UI and codebase",
      "Developed and implemented V2 features (such as new design and wireframe implementation,)  ",
      "Resolved production hotfixes promptly to address critical issues and ensure uninterrupted operation.",
      "Debugged and fixed software bugs to improve system stability and functionality.",
      "Integrated both in-house and third-party APIs such as ZeptoMail.",
    ],
  },
  {
    image: project1,
    id: "project-3",
    title: "Tigg Accounting Software",
    desc: "Major software.",
    techs: [
      "React",
      "Ant Design",
      "Axios",
      "Moment",
      "React Router DOM",
      "Firebase",
      "Styled Components",
      "Sass",
    ],
    responsibilities: [
      "Implemented new design to enhance the visual appeal and user experience.",
      "Conducted bug fixing to identify and resolve software issues, improving system stability and functionality.",
      "Successfully migrated old API calls to the new backend, ensuring seamless integration and continued operation.",
    ],
  },
];
