import { useContext } from "react";
import { MyContext } from "../ContextComp";
// import LandingPage from "../components/LandingPage";
import GradientText from "../components/GradientText";
import ProjectCard from "../components/ProjectCard";
// import { scaleAnimation2 } from "../lib/framer-motion-utils";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import ParentComp from "../components/ParentComp";
function Home() {
  const contents = useContext(MyContext);
  return (
    <ParentComp
      landingText="FRONTEND WEB DEVELOPER"
      landingHeading="OWOSENI-CLINTON"
    >
      <GradientText
        heading="About Me"
        text="I’m a Full Stack Developer with a passion for building seamless, user-friendly digital experiences. I specialize in crafting dynamic interfaces using HTML, CSS, JavaScript, and TypeScript with React, while also handling backend development with server-side technologies, databases, and authentication systems like Passport.js and JWT.

In addition to web development, I’m also exploring app development to extend the reach of my projects across platforms. Over time, I’ve scaled my projects by adding features like real-time interactions, role-based access control, and efficient data management — continually refining both the user experience and system performance.

Driven by curiosity and creativity, I love turning ideas into polished, full-featured applications that make an impact."
      />

      <GradientText heading="My Skills">
        <motion.div
          className="md:w-1/2 items-center flex flex-wrap md:justify-start justify-center w-full  gap-4"
          initial="hidden"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contents && contents?.techStack.map(stack => {
            return <span className="rounded-full px-2 py-1 bg-gradient">{stack}</span>
          })}
       
        </motion.div>
      </GradientText>
      <GradientText heading="My Projects">
        <div className="flex flex-wrap   px-sides justify-center gap-x-[5%] gap-y-6">
          {contents?.projects.slice(0, 3).map((project) => {
            return <ProjectCard key={project.name} project={project} />;
          })}
        </div>
      </GradientText>

      <section className="flex items-center justify-center pt-6 gap-4 md:gap-8 px-sides w-full  flex-wrap ">
        <button
          className="Btn text-sm font-normal"
          onClick={() => contents?.navigation("/projects")}
        >
          <FontAwesomeIcon icon={faArrowRightLong} className="mr-2" />
          All Projects
        </button>
        <button
          className="Btn text-sm font-normal"
          onClick={() => contents?.navigation("/contact")}
        >
          <FontAwesomeIcon icon={faArrowRightLong} className="mr-2" />
          Contact Me
        </button>
      </section>
    </ParentComp>
  );
}

export default Home;
