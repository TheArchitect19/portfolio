'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMoon } from "react-icons/fi";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
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

const Navbar = () => {
  return (
    <div className='w-full px-7 py-4 relative flex justify-between items-center bg-slate-300'>
      <div className="flex flex-row items-center gap-16">
        <div className="bg-black rounded-full pt-2.5 pb-1.5 px-3">
          <h2 className="text-[28px] font-extrabold font-poppins text-white"> स्व </h2>
        </div>

        <CustomLink href="/"> Home </CustomLink>
        <CustomLink href="/timeline"> Timeline </CustomLink>
        <CustomLink href="/projects"> Projects </CustomLink>
        <CustomLink href="/services"> Services </CustomLink>
        <CustomLink href="/contact"> Contact </CustomLink>
      </div>

      <button className='rounded-xl p-2 bg-purple-600'>
        <FiMoon size={20} color="white" />
      </button>
    </div>
  )
}

export default Navbar
