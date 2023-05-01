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
    desc: "Do you find CSS simple and hard at the same time? If so, you’re not alone. Understanding the inner workings of CSS is key to unlocking its full potential. In this post, I’ll share the theoretical concepts of ‘How CSS actually works behind the scenes’. . .",
    category: "CSS3",
    colors: {
      from: "from-orange-300",
      to: "to-amber-400",
    },
    src: "https://medium.com/@around_delfi/what-happens-to-css-when-we-load-up-a-webpage-a80f99f0248",
  },
  {
    image: blog2,
    id: "blog-2",
    title: "Animation in React: React-Spring",
    desc: "If you’re looking to create animations in React, React Spring is one of the most popular animation libraries to create powerful animation easily.It can be used to animate HTML, SVG, Native Elements, Three.js, and more. . .",
    category: "React Animation",
    src: "https://medium.com/@around_delfi/animation-in-react-react-spring-3265f2bb94fe",
    colors: {
      from: "from-cyan-500",
      to: "to-blue-600",
    },
  },
  {
    image: blog3,
    id: "blog-3",
    title: "Konva for Beginners: An Introduction",
    desc: "Konva is a 2D JavaScript drawing library built on the HTML5 canvas element for creating complex shapes, animations, and interactions on the web. It provides high performance, ease of use, and cross-platform compatibility. . .",
    category: "Canvas / React",
    src: "https://medium.com/@around_delfi/a-beginners-guide-to-konva-an-introduction-ca9e98adda88",
    colors: {
      from: "from-fuchsia-400",
      to: "to-pink-500",
    },
  },
];
