import Image from "next/image";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai"

interface ProjectProps {
  type: string;
  title: string;
  img: any;
  link?: string;
  github: string;
}

const Project:React.FC<ProjectProps> = ({
  type,
  title,
  img,
  link,
  github,
}) => {
  return (
    <article className="w-full flex-col items-center justify-between rounded-3xl
    border border-solid border-dark dark:border-light bg-light dark:bg-dark 
    shadow-2xl p-3 md:p-6 xl:p-12">
      <Image 
        src={img}
        alt={title}
        className="w-full h-auto rounded-lg"
      />

      <div className="w-full my-6 flex flex-col items-start justify-between">
        <span className="text-primary dark:text-primaryDark font-medium text-lg lg:text-xl xl:text-2xl">
          {type}
        </span>

        { link ? ( 
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-xl lg:text-2xl xl:text-4xl font-bold">
              {title}
            </h2>
          </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-xl lg:text-2xl xl:text-4xl font-bold">
            {title}
          </h2>
        )}

        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
          >
            <AiFillGithub className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer
            text-dark dark:text-light" />
          </Link>

          { link &&
          <Link
            href={link}
            target="_blank"
            className="ml-2 lg:ml-4 rounded-lg py-1 px-3 lg:py-2 lg:px-6 text-lg font-semibold
            bg-dark text-light dark:bg-light dark:text-dark border border-solid
            hover:scale-110 transition duration-300 ease-in-out hover:bg-transparent hover:dark:bg-transparent
            hover:border-dark hover:text-dark
            hover:dark:border-light hover:dark:text-light"
          >
            Visit Website
          </Link>
          }
        </div>
      </div>
    </article>
  )
}

export default Project