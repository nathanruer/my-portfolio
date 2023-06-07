'use client';

import { useRef } from "react";
import ExperienceDetails from "./ExperienceDetails"

import { motion, useScroll } from "framer-motion"
import Header from "@/app/components/Header";

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );

  return (
    <div className="mt-32 px-8 md:p-32">
      <Header title="Experience" />

      <div ref={ref} className="w-full mx-auto relative ">
        <motion.div 
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 w-[4px] h-full bg-dark origin-top
          dark:bg-light left-[35px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2
        pr-[35px]">
          <ExperienceDetails 
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />
          <ExperienceDetails
            position="Intern"
            company="Facebook"
            time="Summer 2021"
            address="Menlo Park, CA"
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
          />
          <ExperienceDetails
            position="Software Developer"
            company="Amazon"
            time="2020-2021"
            address="Seattle, WA"
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."
          />
          <ExperienceDetails
            position="Software Developer Intern"
            company="Microsoft"
            time="Summer 2019"
            address="Redmond, WA"
            work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component."
          />
          <ExperienceDetails
            position="Teaching Assistant"
            company="MIT"
            time="Fall 2018"
            address="Massachusetts Ave, Cambridge, MA"
            work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience