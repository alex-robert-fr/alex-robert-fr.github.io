import { motion } from "framer-motion";

function getRandomPosition() {
  const position = Math.floor(Math.random() * 50 + 15);
  return `${position}%`;
}

const Bubble = () => {
  return (
    <motion.div
      className="will-change-auto fixed left-0 top-0 z-0 h-52 w-52 rounded-full bg-white opacity-30 blur-[50px]"
      animate={{
        left: [
          getRandomPosition(),
          getRandomPosition(),
          getRandomPosition(),
          getRandomPosition(),
          getRandomPosition(),
          getRandomPosition(),
        ],
        top: [
          getRandomPosition(),
          getRandomPosition(),
          getRandomPosition(),
          getRandomPosition(),
          getRandomPosition(),
          getRandomPosition(),
        ],
      }}
      transition={{
        duration: 40,
        ease: "easeInOut",
        repeatType: "mirror",
        repeat: Infinity,
      }}
    />
  );
};

export default Bubble;
