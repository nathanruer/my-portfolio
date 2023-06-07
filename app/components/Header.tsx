interface HeaderProps {
  title: string;
  className?: string;
}

const Header:React.FC<HeaderProps> = ({
  title,
  className,
}) => {
  return (
    <h2 className={`font-bold text-4xl sm:text-6xl mb-16 w-full text-center md:mb-32
    ${className}`}>
      {title}
    </h2>
  )
}

export default Header