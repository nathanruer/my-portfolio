import Image from "next/image";
import Link from "next/link";

import AnimatedText from "../components/AnimatedText";

import profilePic from "@/public/images/profilePic.png";

export default function Home() {
  return (
    <div className="w-full px-16 py-8 lg:px-32 lg:py-16">
      <div className="flex-row lg:flex">
        <div className="w-full lg:w-1/2 h-auto">
          <Image 
            src={profilePic} 
            alt="Nathan RUER profile picture" 
            className="w-full h-full"
          />
        </div>

        <div className="w-full lg:w-1/2 items-center self-center">
          <AnimatedText
            text="Turning vision into reality with code."
            className="text-center lg:text-left py-8"
          />
          <p className="text-lg text-center lg:text-left">
            As a skilled full-stack Web3 developer, I am dedicated to turning ideas into innovative web applications.
            Explore my latest projects, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-center justify-center lg:justify-start py-8">
            <Link 
              href="mailto:abcd@gmail.com"
              target="_blank"
              className="py-2.5 px-6 flex items-center rounded-xl text-lg font-semibold
              bg-dark text-light dark:bg-light dark:text-dark border border-solid
              hover:scale-110 transition duration-300 ease-in-out hover:bg-transparent hover:dark:bg-transparent
              hover:border-dark hover:text-dark
              hover:dark:border-light hover:dark:text-light"
            >
              Contact me!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
