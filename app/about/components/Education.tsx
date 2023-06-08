'use client';

import { useRef } from "react";
import EducationDetails from "./EducationDetails"

import { motion, useScroll } from "framer-motion"
import Header from "@/app/components/Header";

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );

  return (
    <div className="my-32 px-8 md:p-32">
      <Header title="Education" className="mb-16 md:mb-32"/>

      <div ref={ref} className="w-full mx-auto relative md:w-full">
        <motion.div 
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 w-[4px] h-full bg-dark origin-top
          dark:bg-light left-[35px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2
        pr-[35px]">
          <EducationDetails 
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence. During my studies, I also participated in research projects focused on machine learning and natural language processing."
          />
          <EducationDetails 
            type="Master Of Computer Science"
            time="2020-2022"
            place="Stanford University"
            info="Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding. Additionally, I took advanced courses in topics such as Reinforcement Learning, Computer Vision, and Big Data Analytics."
            />
          <EducationDetails 
            type="Online Coursework"
            time="2016-2020"
            place="Coursera And EdX"
            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering. These online courses provided practical experience in implementing machine learning algorithms and working with large datasets."
          />
        </ul>
      </div>
    </div>
  )
}

export default Education;