'use client';

import Header from "@/app/components/Header";
import SkillItemLg from "./SkillItemLg";
import SkillItemSm from "./SkillItemSm";

const Skills = () => {
  return (
    <>
      <Header title="Skills" className="!mb-0"/>

      <div className="w-full h-screen relative items-center 
      justify-center rounded-full bg-circularLight dark:bg-circularDark
      sm:h-[40vh] md:h-[50vh] xl:h-[60vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      hidden sm:flex">
        <SkillItemLg
          name="Web" 
        />
        <SkillItemLg
          name="CSS" 
          x="-5vw"
          y="-10vw"
        />
        <SkillItemLg
          name="HTML" 
          x="-17.5vw"
          y="2vw"
        />
        <SkillItemLg
          name="React" 
          x="0vw"
          y="15vw"
        />
        <SkillItemLg
          name="JavaScript" 
          x="-20vw"
          y="-10vw"
        />
        <SkillItemLg
          name="Typescript" 
          x="15vw"
          y="-5vw"
        />
        <SkillItemLg
          name="Next.js" 
          x="20vw"
          y="-15vw"
        />
        <SkillItemLg
          name="Node.js" 
          x="-27.5vw"
          y="5vw"
        />
        <SkillItemLg
          name="Tailwind CSS" 
          x="25vw"
          y="5vw"
        />
        <SkillItemLg
          name="Prisma" 
          x="-10vw"
          y="10vw"
        />
        <SkillItemLg
          name="Mongo DB" 
          x="15vw"
          y="10vw"
        />
      </div>

      <div className="sm:hidden grid grid-cols-3 gap-4 text-center mt-16 md:mt-32 px-8">
        <SkillItemSm name="HTML" />
        <SkillItemSm name="CSS" />
        <SkillItemSm name="Javascript" />
        <SkillItemSm name="Typescript" />
        <SkillItemSm name="Node.js" />
        <SkillItemSm name="React.js" />
        <SkillItemSm name="Next.js" />
        <SkillItemSm name="Prisma" />
        <SkillItemSm name="MongoDB" />
      </div>
    </>
  )
}

export default Skills