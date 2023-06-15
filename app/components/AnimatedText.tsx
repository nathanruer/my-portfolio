'use client';

import {motion} from "framer-motion"

const quoteVariant = {
  initial: {
    opacity:1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    }
  }
}

const singleWordVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  }
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
}) => {
  return (
    <div className="w-full mx-auto flex items-center 
    justify-center text-center overflow-hidden">
      <motion.h1 
        className={`inline-block w-full font-bold capitalize 
        text-4xl sm:text-6xl p-1 ${className}`}
        variants={quoteVariant}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => 
          <motion.span 
            key={word + '-' + index}
            className="inline-block"
            variants={singleWordVariant}
          >
            {word}&nbsp;
          </motion.span>
        )}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
