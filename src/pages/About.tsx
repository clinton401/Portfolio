import {FC, useContext} from 'react'
import ParentComp from '../components/ParentComp'
import GradientText from '../components/GradientText';
import { MyContext } from '../ContextComp';
import { motion } from "framer-motion"
import { scaleAnimation2 } from "../lib/framer-motion-utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const About: FC = () => {
    const contents = useContext(MyContext);
  return (
    <ParentComp landingHeading="About-me" landingText="IT'S ME CLINTON">
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
          viewport={{ once: true, amount: 0.3 }}
        >
        {contents && contents?.techStack.map(stack => {
            return <span className="rounded-full px-2 py-1 bg-gradient">{stack}</span>
          })}
        </motion.div>
      </GradientText>
      <GradientText
        heading="My experiences"
        experiences={contents?.experiences}
      />
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

export default About
