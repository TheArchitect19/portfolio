'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

interface NavbarLinkProps {
  href: string;
  text: string;
  icon?: string;
  onClick?: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, icon, text }) => {
  return (
    <Link
      href={href}
      className={'font-semibold text-[15px] hover:text-sky-600 dark:hover:text-sky-400 transition-colors ease-in-out duration-500'}
    >
      <span className='text-lg mr-0.5'> {icon} </span> {text}
    </Link>
  );
}

const Navbar = () => {
  const [navbarDisplay, setNavbarDisplay] = useState("hidden");

  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <nav className={`
        flex flex-row
        items-center
        justify-between
        px-4
        md:px-8
        lg:px-16
        pt-8
      `}>
        <h2
          className='text-3xl font-extrabold cursor-pointer'
          onClick={() => router.push("/")}
        >
          स्वप्निल
        </h2>

        <div className='flex items-center'>
          <div className='hidden flex-row items-center gap-10 lg:flex'>
            <NavbarLink href={"#about"} icon={"💁🏽‍♂️"} text={"About"} />
            <NavbarLink href={"#experience"} icon={"💾"} text={"Experience"} />
            <NavbarLink href={"#projects"} icon={"⚙️"} text={"Projects"} />
            <NavbarLink href={"#contact"} icon={"📞"} text={"Contact"} />
          </div>

          <button
            className='flex items-center justify-center w-8 h-8 ml-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors lg:hidden'
            onClick={() => setNavbarDisplay("flex")}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}

      <nav className={`${navbarDisplay} fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-inherit z-10`}>
        <button
          className='flex items-center justify-center w-8 h-8 absolute right-4 top-4 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors'
          onClick={() => setNavbarDisplay("hidden")}
        >
          <RxCross1 />
        </button>

        <div className='flex flex-col items-center gap-3'>
            <NavbarLink href={"/"} icon={"💁🏽‍♂️"} text={"About"} onClick={() => setNavbarDisplay("hidden")} />
            <NavbarLink href={"/"} icon={"⚙️"} text={"Skills"} onClick={() => setNavbarDisplay("hidden")} />
            <NavbarLink href={"/"} icon={"💾"} text={"Projects"} onClick={() => setNavbarDisplay("hidden")} />
            <NavbarLink href={"/"} icon={"📞"} text={"Contact"} onClick={() => setNavbarDisplay("hidden")} />
        </div>
      </nav>
    </>
  )
}

export default Navbar
