import { IconType } from 'react-icons'
import Link from 'next/link'

import { CustomLink } from './navbar'
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

interface SocialLinkProps {
  href: string;
  Icon: IconType;
  color: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, Icon, color }) => {
  if (color == 'blue') color = 'bg-blue-600'
  else if (color == 'pink') color = 'bg-pink-500'
  else if (color == 'green') color = 'bg-green-900'
  else if (color == 'sky') color = 'bg-sky-500'

  return (
    <div className={`${color} rounded-full p-2.5 hover:scale-110 ease-in-out duration-300`}>
      <Link href={href}> <Icon color='white' size={20} /> </Link>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='w-full flex flex-col gap-8 pb-8 items-center justify-center'>
      <div className='w-[90%] xl:w-[80%] h-[1px] bg-neutral-400' />
      <h3 className='text-3xl font-semibold'> Swapnil's </h3>

      <div className='flex flex-col gap-5 items-center'>
        <div className='flex flex-row gap-20'>
          <CustomLink href='/contact'> Contact </CustomLink>
          <CustomLink href='/projects'> Projects </CustomLink>
          <CustomLink href='/services'> Services </CustomLink>
        </div>

        <div className='flex flex-row gap-6'>
          <SocialLink href='/instagram' Icon={FiInstagram} color='pink' />
          <SocialLink href='/twitter' Icon={FiTwitter} color='sky' />
          <SocialLink href='/github' Icon={FiGithub} color='green' />
          <SocialLink href='/linkedin' Icon={FiLinkedin} color='blue' />
        </div>
      </div>

      <p className='text-sm text-gray-500'> © 2024 Swapnil Sachan. All rights reserved </p>
    </footer>
  )
}

export default Footer
