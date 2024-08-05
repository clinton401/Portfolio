import {motion } from "framer-motion"
import { FC, ReactNode } from "react";
import { gradientSpan, gradientH3 } from "../lib/framer-motion-utils";
 import type { ExperienceType } from "../ContextComp";
 type MyProps = {
   heading: string;
   text?: string;
   children?: ReactNode;
     experiences?: ExperienceType[];
   isContactPage?: boolean
 };
const GradientText: FC<MyProps> = ({
  heading,
  text,
  children,
  experiences,
  isContactPage
}) => {
  return (
    <motion.section className="flex flex-col  items-center py-8 px-sides gap-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={` ${isContactPage ? "w-full " : "md:w-1/2"}`}
      >
        <div className="overflow-hidden w-[200px] relative">
          <motion.h3
            variants={gradientH3}
            className="font-bold text-2xl w-auto md:text-left text-center font-cinzel"
          >
            {heading}
          </motion.h3>
          <motion.span
            variants={gradientSpan}
            className="absolute left-0 top-0 w-full h-full bg-black"
          ></motion.span>
        </div>
      </motion.div>
      {text && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2"
        >
          <div className="overflow-hidden md:w-auto relative">
            <motion.p
              variants={gradientH3}
              className=" md:text-left text-center"
            >
              {text}
            </motion.p>
            <motion.span
              variants={gradientSpan}
              className="absolute left-0 top-0 w-full h-full bg-black"
            ></motion.span>
          </div>
        </motion.div>
      )}
      {experiences && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2 flex flex-col gap-4"
        >
          {experiences.map((experience) => {
            return (
              <div
                className="overflow-hidden w-[250px] relative "
                key={experience.name}
              >
                <motion.ul className=" flex md:items-start items-center flex-col gap-2">
                  <li className="font-bold ">{experience.name}</li>
                  <li className="text-sm">{experience.description}</li>
                  <li className="text-sm">{experience.time}</li>
                </motion.ul>
                <motion.span
                  variants={gradientSpan}
                  className="absolute left-0 top-0 w-full h-full bg-black"
                ></motion.span>
              </div>
            );
          })}
        </motion.div>
      )}

      {children && children}
    </motion.section>
  );
};

export default GradientText