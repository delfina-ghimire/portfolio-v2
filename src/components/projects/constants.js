import project1 from "../../assets/p1.png";
import project2 from "../../assets/p2.png";
import project3 from "../../assets/p3.png";
import project4 from "../../assets/p4.png";
import github from "../../assets/icons/github.svg";
import live from "../../assets/icons/external-link.svg";

export const projects = [
  {
    image: project1,
    id: "project-1",
    title: "FriendsBook",
    desc: "A Fullstack social media application with CRUD functionality for posts & users, view friends post on your timeline, follow/unfollow users, like/dislike posts, get news and follow recomendations.",
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
    image: project2,
    id: "project-2",
    title: "SandBox - NFT Website",
    desc: "SandBox is the Modern UX / UI Site that allows you to the explore, create, sale, and purchase the NFTs. It consists the tuned blend of multiple complex gradiends and graphics.",
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
    desc: "It is a Responsive Multipage Ecommerce site with an attractive modern theme, and complex layered footer. The code is arranged in scalable organized file architecture and is written using BEM naming convention.",
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
  {
    image: project4,
    id: "project-4",
    title: "Natours - Travel Website",
    desc: "A modern Travel Agency webpage built only using Html and css, written using BEM convention and followed 7-1 architecture pattern. Fluid Layouts, Responsive & flexible images,,Correct Units are also implemented.",
    techs: ["Html", "CSS"],
    icons: [
      {
        src: github,
        alt: "View Code",
        link: "https://github.com/delfina-ghimire/Natours-project",
      },
      {
        src: live,
        alt: "View Live",
        link: "https://natours-travel-website.netlify.app/",
      },
    ],
  },
];


