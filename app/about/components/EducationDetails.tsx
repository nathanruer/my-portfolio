'use client';

import LiIcon from "@/app/about/components/LiIcon";
import React, { useRef } from "react";

import { motion } from "framer-motion"

interface EducationDetailsProps {
  type: string;
  time: string;
  place: string;
  info: string;
}

const EducationDetails: React.FC<EducationDetailsProps> = ({
  type,
  time,
  place,
  info,
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li ref={ref} className="ml-16 md:ml-32 my-8 first:mt-0 last:mb-0 mx-auto
    flex flex-col">

      <LiIcon reference={ref} />
      <motion.div
        initial={{ y:50 }}
        whileInView={{ y:0 }}
        transition={{ duration: 0.5, type:"spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

export default EducationDetails;
