import {FC, useContext, useState, useEffect} from 'react'
import ParentComp from '../components/ParentComp'
import { MyContext, type ProjectType } from '../ContextComp';
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { appearAnimation } from '../lib/framer-motion-utils';
const Project: FC = () => {
const [projectFilter, setProjectFilter] = useState<string>("all");
const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);
    const contents = useContext(MyContext);

    function projectFilterSetter(filter: string): void {
        setProjectFilter(filter);
    }
   useEffect(() => {
     if (contents?.projects) {
       const filterProjects = (filter: string) => {
         if (filter === "all") {
           return contents.projects;
         }
         return contents.projects.filter(
           (project) => project.filters === filter
         );
       };

       setFilteredProjects(filterProjects(projectFilter));
     }
   }, [contents, projectFilter]);


  return (
    <ParentComp landingHeading="My-Project" landingText="MADE WITH LOVE">
      {" "}
      <section className="w-full px-sides flex justify-center items-center py-8">
        <motion.ul
          variants={appearAnimation}
          initial="hidden"
          
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className=" border justify-center rounded-full border-white font-bold duration-300 transition-colors ease-in font-cinzel border-3 bg-black  flex gap-x-3 gap-y-4 md:gap-4 flex-wrap p-4"
        >
          <li>
            <button
              onClick={() => projectFilterSetter("all")}
              className={`p-2 ${
                projectFilter === "all" ? "bg-[#1da1f2] text-white" : "bg-white"
              } duration-300 transition-colors ease-in  rounded-full `}
            >
              All
            </button>
          </li>

          <li>
            <button
              onClick={() => projectFilterSetter("HTML & CSS")}
              className={`p-2 ${
                projectFilter === "HTML & CSS"
                  ? "bg-[#1da1f2] text-white"
                  : "bg-white"
              } duration-300 transition-colors ease-in  rounded-full `}
            >
              HTML & CSS
            </button>
          </li>
          <li>
            <button
              onClick={() => projectFilterSetter("React")}
              className={`p-2 ${
                projectFilter === "React"
                  ? "bg-[#1da1f2] text-white"
                  : "bg-white"
              } duration-300 transition-colors ease-in  rounded-full `}
            >
              React
            </button>
          </li>
        </motion.ul>
      </section>
      <motion.section initial="hidden"
        whileInView="visible"
         className="flex flex-wrap pb-8  px-sides justify-center gap-x-[5%] gap-y-6">
        {filteredProjects.length > 0 &&
          filteredProjects.map((project) => {
            return <ProjectCard key={project.name} project={project} />;
          })}
      </motion.section>
      <section className="flex items-center justify-center pt-6 gap-4 md:gap-8 px-sides w-full  flex-wrap ">
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

export default Project
