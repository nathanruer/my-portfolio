'use client';

import { useTheme } from "next-themes";

import MoonIcon from "@/public/svgs/MoonIcon";
import SunIcon from "@/public/svgs/SunIcon";

interface ThemeButtonProps {
  className?: string;
  mobile?: boolean;
}

const ThemeButton:React.FC<ThemeButtonProps> = ({
  className,
  mobile,
}) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`flex items-center justify-center rounded-full p-1
      border border-solid hover:scale-110 transition duration-300 ease-in-out
      bg-dark dark:bg-light
      ${theme === "light" ? "text-light border-light" : "text-dark border-dark"}
      ${mobile && '!bg-transparent'}
      ${className}`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeButton;