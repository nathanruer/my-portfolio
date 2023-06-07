'use client';

import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link href="/">
        <div className="w-16 h-16 bg-light dark:bg-dark text-dark dark:text-light
        border border-solid border-dark dark:border-light
        flex items-center justify-center rounded-full text-2xl font-bold
        hover:scale-110 transition duration-300 ease-in-out">
          NR
        </div>
      </Link>
    </div>
  );
};

export default Logo;
