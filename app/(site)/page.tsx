import Image from "next/image";
import AnimatedText from "../components/AnimatedText";

import ProfilePic from "@/public/images/profilePic.png";

export default function Home() {
  return (
    <div className="w-full p-16">
      <div className="flex">
        <div className="w-1/2 items-center self-center">
          <AnimatedText
            text="Turning vision into reality with code."
            className="text-left py-8"
          />
          <p>
            As a skilled full-stack Web3 developer, I am dedicated to turning ideas into innovative web applications.
            Explore my latest projects, showcasing my expertise in React.js and web development.
          </p>
        </div>

        <div className="w-1/2">
          <Image 
            src={ProfilePic} 
            alt="Nathan RUER" 
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
