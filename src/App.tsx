import { useState, useEffect } from "react";
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import RoutesComp from './RoutesComp'
import htmlImg from "./assets/html (1).png";
import cssImg from "./assets/css-3.png";
import jsImg from "./assets/js (1).png";
import tsImg from "./assets/typescript.png";
import reactImg from "./assets/react.png";
import nextImg from "./assets/nextjs.svg";
import tailwindImg from "./assets/tailwind-css.svg";
import gitImg from "./assets/git.png";
import glamoraImg from "./assets/glamora.png";
import audiovistaImg from "./assets/audiovista.png";
import cinematicoImg from "./assets/cinematico.png";
import getlinkedImg from "./assets/getlinked.png";
import worldsearchImg from "./assets/worldsearch.png";
import spacetourImg from "./assets/spacetour.png";
import cannanImg from "./assets/cannann.png";
import foodplugImg from "./assets/foodplug.png";
import gestureImg from "./assets/gesture.png";
import ContextComp from './ContextComp';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);
   const navigate = useNavigate();
  const skills = [
    htmlImg,
    cssImg,
    jsImg,
    tsImg,
    reactImg,
    nextImg,
    tailwindImg,
    gitImg,
  ];
  const projects = [
    {
      name: "Glamora",
      imgUrl: glamoraImg,
      description:
        "A cosmetic eCommerce platform offering a wide range of premium beauty products, from skincare to makeup, designed to meet all your beauty needs ",
      technologies: [
        "NextJS",
        "TypeScript",
        "Redux",
        "TailwindCSS",
        "Shadcn UI",
      ],
      filters: "React",
      liveUrl: "https://glamora-three.vercel.app",
      githubUrl: "https://github.com/clinton401/Glamora",
    },
    {
      name: "Audiovista",
      imgUrl: audiovistaImg,
      description:
        "A Spotify clone that lets you create playlists, like songs, and log in to your account for personalized recommendations and a seamless browsing experience of your favorite artists and albums.",
      technologies: ["React", "JavaScript", "TailwindCSS"],
      filters: "React",
      liveUrl: "https://audiovista.netlify.app",
      githubUrl: "https://github.com/clinton401/Audiovista",
    },
    {
      name: "Cinematico",
      imgUrl: cinematicoImg,
      description:
        "A movie search platform where you can find and watch trailers, explore detailed information about films, and stay updated with the latest trending movies and TV shows.",
      technologies: ["React", "JavaScript", "TailwindCSS", "Axios", "SwiperJS"],
      filters: "React",
      liveUrl: "https://cinematico.netlify.app",
      githubUrl: "https://github.com/clinton401/Cinematico",
    },
    {
      name: "Worldsearch",
      imgUrl: worldsearchImg,
      description:
        "A country search website where you can explore and find detailed information about countries",
      technologies: ["React", "JavaScript"],
      filters: "React",
      liveUrl: "https://worldsearch.netlify.app",
      githubUrl: "https://github.com/clinton401/worldsearch",
    },
    {
      name: "Getlinked",
      imgUrl: getlinkedImg,
      description: "A dynamic landing page for a hackathon project.",
      technologies: ["React", "JavaScript"],
      filters: "React",
      liveUrl: "https://glinked.netlify.app/",
      githubUrl: "https://github.com/clinton401/getlinked",
    },
    {
      name: "Spacetour",
      imgUrl: spacetourImg,
      description: "A smiple personal project.",
      technologies: ["React", "JavaScript"],
      filters: "React",
      liveUrl: "https://spaceetour.netlify.app",
      githubUrl: "https://github.com/clinton401/spacetour",
    },
    {
      name: "Joy & Sharon",
      imgUrl: cannanImg,
      description:
        "A charming wedding website showcasing event details, venue information, and a gallery of the couple's pictures.",
      technologies: ["HTMl", "CSS", "JavaScript", "SwiperJS"],
      filters: "HTML & CSS",
      liveUrl: "https://spaceetour.netlify.app",
      githubUrl: "https://github.com/clinton401/spacetour",
    },
    {
      name: "Foodplug",
      imgUrl: foodplugImg,
      description: "A food eCommerce website.",
      technologies: ["HTMl", "CSS", "JavaScript"],
      filters: "HTML & CSS",
      liveUrl: "https://cannan.netlify.app",
      githubUrl: "https://github.com/clinton401/josha",
    },
    {
      name: "GestureClash",
      imgUrl: gestureImg,
      description:
        "A fun and interactive rock-paper-scissors game website where you can play against the computer in a classic game of chance.",
      technologies: ["React", "JavaScript"],
        filters: "React",
      liveUrl: "https://gestureclash.netlify.app",
      githubUrl: "https://github.com/clinton401/rock-paper-scissors",
    },
  ];
  const experiences = [{
    name: "Xerax labs.inc",
    description: "Junior frontend web developer",
    time: "2022"
  }, {
    name: "Getlinked Hackaton",
    description: "Frontend web developer",
    time: "2023"
  }]

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection("up");
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  function navigation(route: string) {
   
    navigate(route);
  }

  const values = {
    skills,
    projects,
    scrollDirection,
    navigation,
    experiences
  };
  return (
    <div className="w-full overflow-hidden font-poppins ">
      <ContextComp values={values}>
        <Navbar />
        <RoutesComp />
        <Footer />
      </ContextComp>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  );
}

export default App
