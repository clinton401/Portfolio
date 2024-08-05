
import { motion } from "framer-motion";

const AnimatedText = ({ text }: {text: string}) => {
  // Split the text into an array of letters
  const letters = text.split("");

  // Variants for the motion components
  const letterVariants = {
    hidden: {
      opacity: 0,
      x: -50, // Initial position (to the left)
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0, // Final position (origin)
      transition: {
        delay: i * 0.1, // Staggering the animation
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.div
      whileInView="visible"
      style={{ display: "flex", overflow: "hidden" }}
      className="flex-wrap justify-center"
    >
      {letters.map((letter: string, index: number) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:text-5xl text-2xl font-cinzel font-black text-center"
          style={{ display: "inline-block" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
