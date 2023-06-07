'use client';

import { useTheme } from "next-themes";

import MoonIcon from "@/public/svgs/MoonIcon";
import SunIcon from "@/public/svgs/SunIcon";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button 
      onClick={() => setTheme(theme==="light" ? "dark" : "light")}
      className={`ml-3 flex items-center justify-center rounded-full p-1
      ${theme==="light" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      {theme === "dark" ? 
        <SunIcon />
        : 
        <MoonIcon />
      }
    </button>
  )
}

export default ThemeButton