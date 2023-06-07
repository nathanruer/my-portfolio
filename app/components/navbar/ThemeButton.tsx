'use client';

import { useTheme } from "next-themes";

import MoonIcon from "@/public/svgs/MoonIcon";
import SunIcon from "@/public/svgs/SunIcon";

interface ThemeButtonProps {
  className?: string;
}

const ThemeButton:React.FC<ThemeButtonProps> = ({
  className,
}) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`flex items-center justify-center rounded-full p-1 bg-transparent
      border border-solid hover:scale-110 transition duration-300 ease-in-out
      ${theme === "light" ? "text-dark border-dark" : "text-light border-light"}
      ${className}`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeButton;