import dynamic from 'next/dynamic';

const ThemeButton = dynamic(() => import("./ThemeButton"), {ssr: false})

import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  return (
    <>
      <div className='hidden lg:block'>
        <DesktopNavbar />
      </div>
      <div className='flex lg:hidden'>
        <MobileNavbar />
      </div>
    </>
  )
}

export default Navbar;