'use client';

import LiIcon from "@/app/about/components/LiIcon";
import React, { useRef } from "react";

import { motion } from "framer-motion"

interface ExperienceDetailsProps {
  position: string;
  company: string;
  time: string;
  address: string;
  work: string;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  position,
  company,
  time,
  address,
  work,
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li ref={ref} className="ml-16 md:ml-32 my-8 first:mt-0 last:mb-0
    flex flex-col">

      <LiIcon reference={ref} />
      <motion.div
        initial={{ y:50 }}
        whileInView={{ y:0 }}
        transition={{ duration: 0.5, type:"spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a 
            href="/"
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

export default ExperienceDetails;
