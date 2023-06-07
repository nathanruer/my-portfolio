'use client';

import { useState } from 'react';
import MobileModal from './MobileModal';
import Logo from './Logo';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header className="w-full p-8 md:px-12 xl:px-32 lg:px-16
      font-medium flex items-center justify-between text-dark dark:text-light relative">
        <button 
          className="flex-col justify-center items-center" 
          onClick={handleClick}
        >
          <span className={`bg-dark dark:bg-light block transition-all
          h-0.5 duration-300 ease-out w-6 rounded-sm
          ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>

          <span className={`bg-dark dark:bg-light block transition-all
          h-0.5 duration-300 w-6 rounded-sm my-0.5
          ${isOpen ? 'opacity-0' : 'opacity-100'}
          `}></span>

          <span className={`bg-dark dark:bg-light block transition-all
          h-0.5 duration-300 w-6 rounded-sm
          ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
      </header>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      { isOpen ? <MobileModal handleClick={handleClick}/> : null }
    </>
  )
}

export default MobileNavbar