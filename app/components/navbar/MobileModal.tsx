'use client';

import { motion } from "framer-motion"

import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai"
import { useTheme } from "next-themes";
import MobileNavLink from "./MobileNavLink";
import ThemeButton from "./ThemeButton";

interface MobileModalProps {
  handleClick: () => void;
}

const MobileModal:React.FC<MobileModalProps> = ({
  handleClick,
}) => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
      animate={{ scale: 1, opacity: 1}}
      className="min-w-[70vw] flex flex-col justify-between items-center fixed
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75
      rounded-lg backdrop-blur-md py-32"
    >
      <nav className="flex items-center flex-col justify-center">
        <MobileNavLink href="/" title="Home" toggle={handleClick} />
        <MobileNavLink href="/about" title="About" toggle={handleClick} />
        <MobileNavLink href="/projects" title="Projects" toggle={handleClick} />
      </nav>

      <nav className="flex items-center justify-center flex-wrap mt-2">
        <AiFillLinkedin className="w-10 h-10 cursor-pointer
        hover:scale-110 transition duration-300 ease-in-out mr-2
        text-light dark:text-dark" />
        <AiFillTwitterCircle className="w-10 h-10 cursor-pointer
        hover:scale-110 transition duration-300 ease-in-out mx-2
        text-light dark:text-dark" />
        <AiFillGithub className="w-10 h-10 cursor-pointer
        hover:scale-110 transition duration-300 ease-in-out mx-2
        text-light dark:text-dark" />
        <ThemeButton mobile />
      </nav>
    </motion.div>
  )
}

export default MobileModal