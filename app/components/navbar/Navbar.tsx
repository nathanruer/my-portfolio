import dynamic from 'next/dynamic';

const ThemeButton = dynamic(() => import("./ThemeButton"), {ssr: false})

import DesktopNavLink from './DesktopNavLink';
import Logo from './Logo';

import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai"

const Navbar = () => {
  return (
    <div className="w-full px-32 lg:px-16 md:px-12 sm:px-8 py-8 font-medium 
    flex items-center justify-between text-dark dark:text-light relative">
      <nav>
        <DesktopNavLink href="/" title="Home" className="mr-4"/>
        <DesktopNavLink href="/about" title="About" className="mx-4"/>
        <DesktopNavLink href="/projects" title="Projects" className="mx-4"/>
        <DesktopNavLink href="/contact" title="Contact" className="ml-4"/>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      <div className='flex items-center'>
        <AiFillLinkedin className="w-10 h-10 cursor-pointer
        hover:scale-110 transition duration-300 ease-in-out mr-2" />
        <AiFillTwitterCircle className="w-10 h-10 cursor-pointer
        hover:scale-110 transition duration-300 ease-in-out mx-2" />
        <AiFillGithub className="w-10 h-10 cursor-pointer
        hover:scale-110 transition duration-300 ease-in-out mx-2" />
        <ThemeButton className="ml-2"/>
      </div>
    </div>
  )
}

export default Navbar;