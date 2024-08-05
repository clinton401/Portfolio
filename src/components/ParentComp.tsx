import {FC, ReactNode} from 'react'
import LandingPage from './LandingPage';
import { parentCompAnimation } from '../lib/framer-motion-utils';
import {motion} from "framer-motion"
type ComponentProps = {
    children: ReactNode,
    landingHeading: string,
    landingText: string
}

const ParentComp: FC<ComponentProps> = ({
  children,
  landingHeading,
  landingText,
}) => {
  return (
    <motion.main
      variants={parentCompAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full pb-[50px]"
    >
      <LandingPage heading={landingHeading} text={landingText} />
      {children}
    </motion.main>
  );
};

export default ParentComp
