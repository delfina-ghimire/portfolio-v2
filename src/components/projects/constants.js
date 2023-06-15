import project1 from "../../assets/p1.png";
import project2 from "../../assets/p2.png";
import project3 from "../../assets/p3.png";
import project4 from "../../assets/p4.png";
import github from "../../assets/icons/github.svg";
import view from "../../assets/icons/detail.svg";
import live from "../../assets/icons/external-link.svg";

export const projects = [
  {
    image: project1,
    id: "project-1",
    title: "FriendsBook",
    desc: "A full-stack social media application with comprehensive CRUD functionality for both posts and users. Users can view their friends' posts on their timeline, follow or unfollow other users, and like or dislike posts. The application also provides news updates and personalized recommendations for users to follow.",
    techs: ["React", "MongoDB", "Express", "Node js"],
    icons: [
      {
        src: github,
        alt: "View Code",
        link: "https://github.com/clair-daisies/social-media-app",
      },
      {
        src: live,
        alt: "View Live",
        link: "https://social-media-app-fawn.vercel.app/auth",
      },
    ],
  },
  {
    image: project4,
    id: "project-2a",
    title: "Tigg Accounting Software",
    desc: "Tigg is a user-friendly cloud-based accounting software that combines accounting, billing, and bookkeeping. It simplifies financial management, streamlines tasks like invoicing and report generation, and offers comprehensive features.",
    techs: ["React", "Next.js", "Typescript", "REST", "Ant-Design"],
    icons: [
      {
        src: view,
        alt: "View Code",
        link: "/project-detail",
        localLink: true,
      },
      {
        src: live,
        alt: "View Live",
        link: "https://www.tiggapp.com/",
      },
    ],
  },
  {
    image: project2,
    id: "project-2",
    title: "SandBox - NFT Website",
    desc: "SandBox is a modern UX/UI site that allows you to explore, create, sell, and purchase NFTs. It consists of a well-tuned blend of multiple complex gradients and graphics.",
    techs: ["React", "Tailwind css"],
    icons: [
      {
        src: github,
        alt: "View Code",
        link: "https://github.com/delfina-ghimire/sandbox-NFT-marketplace",
      },
      {
        src: live,
        alt: "View Live",
        link: "https://sandbox-nft.netlify.app/",
      },
    ],
  },
  {
    image: project3,
    id: "project-3",
    title: "Avacodo: Ecommerce Website",
    desc: "It is a responsive multipage e-commerce site with an attractive modern theme and a complex layered footer. The code is structured in a scalable and organized file architecture, following the BEM naming convention.",
    techs: ["React", "MongoDB", "Express", "Node js"],
    icons: [
      {
        src: github,
        alt: "View Code",
        link: "https://github.com/delfina-ghimire/Avocado-Full-Ecommerce-Store",
      },
      {
        src: live,
        alt: "View Live",
        link: "https://avocado-full-ecommerce-store.vercel.app/",
      },
    ],
  },
];


