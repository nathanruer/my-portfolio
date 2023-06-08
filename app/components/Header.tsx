interface HeaderProps {
  title: string;
  className?: string;
}

const Header:React.FC<HeaderProps> = ({
  title,
  className,
}) => {
  return (
    <h2 className={`font-bold text-2xl sm:text-4xl w-full text-center
    text-dark/80 dark:text-light/80
    ${className}`}>
      {title}
    </h2>
  )
}

export default Header