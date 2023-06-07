'use client';

import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl w-full text-center md:text-6xl">
        My Skills
      </h2>
      <div className="w-full h-screen relative items-center 
      justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      hidden sm:flex">
        <SkillItem 
          name="Web" 
        />
        <SkillItem 
          name="CSS" 
          x="-5vw"
          y="-10vw"
        />
        <SkillItem 
          name="HTML" 
          x="-17.5vw"
          y="2vw"
        />
        <SkillItem 
          name="React" 
          x="0vw"
          y="15vw"
        />
        <SkillItem 
          name="JavaScript" 
          x="-20vw"
          y="-10vw"
        />
        <SkillItem 
          name="Typescript" 
          x="15vw"
          y="-5vw"
        />
        <SkillItem 
          name="Next.js" 
          x="20vw"
          y="-15vw"
        />
        <SkillItem 
          name="Node.js" 
          x="-27.5vw"
          y="5vw"
        />
        <SkillItem 
          name="Tailwind CSS" 
          x="25vw"
          y="5vw"
        />
        <SkillItem 
          name="Prisma" 
          x="-10vw"
          y="10vw"
        />
        <SkillItem 
          name="Mongo DB" 
          x="15vw"
          y="10vw"
        />
      </div>
      <div className="flex sm:hidden">
        {/* TODO */}
      </div>
    </>
  )
}

export default Skills