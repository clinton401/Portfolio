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
        text="I am a Frontend Web Developer with a passion for creating intuitive
          and dynamic user interfaces using HTML, CSS, JavaScript and
          TypeScript, especially with React. Currently, I’m expanding my skill
          set into backend development, learning server-side technologies and
          database management to become a Full Stack Developer. Excited to
          bridge the gap between frontend and backend to build comprehensive web
          solutions."
      />
      <GradientText heading="My Skills">
        <motion.div
          className="md:w-1/2 items-center flex flex-wrap md:justify-between justify-center w-full  gap-4"
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
          {contents &&
            contents?.skills.map((skill: string) => {
              return (
                <motion.img
                  key={skill}
                  variants={scaleAnimation2}
                  src={skill}
                  whileHover={{
                    rotate: "45deg",
                    transition: {
                      duration: 1,
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                    },
                  }}
                  alt="skills img"
                  className="w-[50px] object-cover"
                />
              );
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
