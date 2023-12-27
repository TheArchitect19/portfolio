'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { FiX } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

import ColorModeSwitcher from "./color_mode_switcher";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
};

export const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className="font-medium relative group text-black dark:text-white">
      {children}

      <span className={`h-[2px] inline-block bg-black dark:bg-white absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-300 ${pathname === href ? 'w-full' : 'w-0'}`}> &nbsp; </span>
    </Link>
  )
}

const Navbar = () => {
  const [navbarDisplay, setNavbarDisplay] = useState(false);

  let navbarStyle = '';
  if (!navbarDisplay) {
    navbarStyle = 'top-[-290px]';
  } else {
    navbarStyle = 'top-[95px]';
  }

  return (
    <div className='flex flex-col relative'>
      <div className='w-full px-7 py-4 relative flex justify-between items-center z-20'>
        <div className="flex flex-row items-center gap-16">
          <div className="bg-orange-800 rounded-full pt-2.5 pb-1.5 px-3 shadow-md shadow-orange-500/40">
            <Link href='/'>
              <h2 className="text-[28px] font-extrabold font-poppins text-white"> स्व </h2>
            </Link>
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
          <ColorModeSwitcher />

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
        className={`absolute right-8 z-10 w-44 flex flex-col gap-2 items-start justify-center bg-white dark:bg-zinc-800 rounded-xl shadow-xl transition-all duration-300 p-6 ${navbarStyle}`}
        onClick={() => {setNavbarDisplay(!navbarDisplay)}}
      >
        <CustomLink href="/"> Home </CustomLink>
        <CustomLink href="/timeline"> Timeline </CustomLink>
        <CustomLink href="/projects"> Projects </CustomLink>
        <CustomLink href="/services"> Services </CustomLink>
        <CustomLink href="/contact"> Contact </CustomLink>
      </div>
    </div>
  )
}

export default Navbar
