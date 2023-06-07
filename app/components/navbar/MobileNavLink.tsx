import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

interface CustomLinkMobileProps {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}

const CustomLinkMobile: React.FC<CustomLinkMobileProps> = ({ 
  href, 
  title, 
  className,
  toggle,
}) => {
  const path = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <a 
      href={href} 
      className={`${className} relative group text-light dark:text-dark my-2`} 
      onClick={handleClick}
    >
      <>
        {title}

        <span className={`h-[2px] inline-block w-0 bg-light dark:bg-dark
        absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] 
        ease duration-300
        ${path === href ? 'w-full' : 'w-0'}`}>
          &nbsp;
        </span>
      </>
    </a>
  );
};

export default CustomLinkMobile;
