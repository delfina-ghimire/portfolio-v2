import blog1 from "../../assets/b1.png";
import blog2 from "../../assets/b2.png";
import blog3 from "../../assets/b3.png";
import github from "../../assets/icons/github.svg";
import live from "../../assets/icons/external-link.svg";

export const blogs = [
  {
    image: blog1,
    id: "blog-1",
    title: "What happens to CSS when we load up a webpage?",
    desc: "Do you find CSS simple and hard at the same time? If so, you’re not alone. Understanding the inner workings of CSS is key to unlocking its full potential. In this post, I’ll share the theoretical concepts of ‘How CSS actually works behind the scenes’ that have helped me to grasp CSS better.",
    category: "CSS3",
    colors: {
      from: 'from-orange-300',
      to: 'to-amber-400',
    },
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
    image: blog2,
    id: "blog-2",
    title: "Animation in React: React-Spring",
    desc: "If you’re looking to create animations in React, React Spring is one of the most popular animation libraries to create powerful animation easily.It can be used to animate HTML, SVG, Native Elements, Three.js, and more.",
    category: "React Animation",
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
    colors: {
      from: 'from-cyan-500',
      to: 'to-blue-600',
    },
  },
  {
    image: blog3,
    id: "blog-3",
    title: "Konva for Beginners: An Introduction",
    desc: "Konva is a 2D JavaScript drawing library built on the HTML5 canvas element for creating complex shapes, animations, and interactions on the web. It provides high performance, ease of use, and cross-platform compatibility, with React Konva offering a higher-level abstraction for use within React applications.",
    category: "Canvas / React",
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
    colors: {
      from: 'from-fuchsia-400',
      to: 'to-pink-500',
    },
  },
];
