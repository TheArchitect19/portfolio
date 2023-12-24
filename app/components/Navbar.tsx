'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconType } from "react-icons";
import { BsPersonBadge, BsWindowDash } from "react-icons/bs";
import { FaMobileScreen, FaTimeline } from "react-icons/fa6";

import { FiMoon, FiX } from "react-icons/fi";
import { HiHomeModern, HiOutlineSquares2X2 } from "react-icons/hi2";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
};

interface MobileLinkProps {
  href: string;
  children: React.ReactNode;
  Icon: IconType;
  color: string;
};

export const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className="font-medium relative group">
      {children}

      <span className={`h-[2px] inline-block bg-black absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-300 ${pathname === href ? 'w-full' : 'w-0'}`}> &nbsp; </span>
    </Link>
  )
}

const MobileLink: React.FC<MobileLinkProps> = ({ href, children, Icon, color }) => {
  const pathname = usePathname();

  if (color === 'amber') color = 'bg-amber-600 text-white border-none'
  if (color === 'blue') color = 'bg-blue-600 text-white border-none'
  if (color === 'green') color = 'bg-green-600 text-white border-none'
  if (color === 'yellow') color = 'bg-yellow-600 text-white border-none'
  if (color === 'fuchsia') color = 'bg-fuchsia-600 text-white border-none'

  return (
    <Link
      href={href}
      className={`flex flex-col items-center rounded-lg w-28 gap-2 p-3 ${href === pathname ? 'hidden' : 'bg-white text-black border-2 border-black'}`}
    >
      <Icon size={30} />
      <span className='font-medium'> {children} </span>
    </Link>
  )
}

const Navbar = () => {
  const [navbarDisplay, setNavbarDisplay] = useState(false);

  let navbarStyle = '';
  if (!navbarDisplay) {
    navbarStyle = 'top-[-290px]';
  } else {
    navbarStyle = 'top-[90px]';
  }

  return (
    <div className='flex flex-col relative'>
      <div className='w-full px-7 py-4 relative bg-white flex justify-between items-center z-20'>
        <div className="flex flex-row items-center gap-16">
          <div className="bg-orange-800 rounded-full pt-2.5 pb-1.5 px-3 shadow-md shadow-orange-500/40">
            <h2 className="text-[28px] font-extrabold font-poppins text-white"> स्व </h2>
          </div>

          <div className='hidden flex-row md:flex md:gap-8 lg:gap-16'>
            <CustomLink href="/"> Home </CustomLink>
            <CustomLink href="/timeline"> Timeline </CustomLink>
            <CustomLink href="/projects"> Projects </CustomLink>
            <CustomLink href="/services"> Services </CustomLink>
            <CustomLink href="/contact"> Contact </CustomLink>
          </div>
        </div>

        <div className='flex flex-row gap-2'>
          <button className='rounded-xl p-2 bg-purple-600'>
            <FiMoon size={20} color="white" />
          </button>

          <button
            className='md:hidden rounded-xl p-2 bg-blue-600'
            onClick={() => setNavbarDisplay(!navbarDisplay)}
          >
            { !navbarDisplay ? (
              <HiOutlineSquares2X2 size={20} color="white" />
            ) : (
              <FiX size={20} color="white" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`absolute z-10 w-full flex flex-row md:flex-row gap-2 items-center justify-center bg-white rounded-xl shadow-xl shadow-blue-500/20 transition-all duration-300 p-8 ${navbarStyle}`}
        onClick={() => {setNavbarDisplay(!navbarDisplay)}}
      >
        <div className='flex flex-row gap-2'>
          <CustomLink href="/"> Home </CustomLink>
          <CustomLink href="/timeline"> Timeline </CustomLink>
          <CustomLink href="/projects"> Projects </CustomLink>
        </div>

        <div className='flex flex-row gap-2'>
          <CustomLink href="/services"> Services </CustomLink>
          <CustomLink href="/contact"> Contact </CustomLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
