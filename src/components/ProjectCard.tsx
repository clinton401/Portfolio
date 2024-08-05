import {FC} from 'react'
import type {ProjectType} from "../ContextComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { appearAnimation } from '../lib/framer-motion-utils';
const ProjectCard: FC<{project: ProjectType}> = ({project}) => {
    const {
    name,
    imgUrl,
    description,
technologies,
liveUrl,
githubUrl

} = project;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={appearAnimation}
      className="md:w-[25%] md:min-w-[300px] min-w-[200px] w-full max-w-[350px] flex flex-col gap-2 pb-2 border border-black rounded-md overflow-hidden"
    >
      <img
        src={imgUrl}
        alt={`${name} image`}
        loading="lazy"
        className="w-full aspect-[1/0.5] object-cover object-top "
      />
      <div className="flex flex-col justify-between flex-grow gap-3 w-full px-2">
        <h3 className="text-xl font-cinzel font-black text-left">{name}</h3>
        <p className="text-xs ">{description}</p>
        <div className="flex flex-wrap gap-2 ">
          {technologies.map((tech: string) => {
            return (
              <span key={tech} className="bg-gradient rounded-md p-2 text-xs">
                {tech}
              </span>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2 text-white items-center">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer "
            className="bg-black p-2 text-xs rounded-md"
          >
            <FontAwesomeIcon icon={faGlobe} className="mr-1" /> Website
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-2 text-xs rounded-md"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-1" /> Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard
