import Image from "next/image";
import Link from "next/link";

import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

interface SocialLinkProps {
  href: string;
  Icon: IconType;
  color: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, Icon, color }) => {
  if (color == 'blue') color = 'text-blue-600'
  else if (color == 'gray') color = 'text-neutral-800'
  else if (color == 'sky') color = 'text-sky-500'
  else if (color == 'pink') color = 'text-pink-500'

  return (
    <div className={`${color} rounded-full p-2.5 hvr-bob`}>
      <Link href={href} className='transition-colors ease-in-out duration-200'> <Icon size={25} /> </Link>
    </div>
  )
}

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='flex flex-row w-[80%] justify-between'>
        <div className='flex flex-row gap-16'>
          <div className='flex flex-col'>
            <SocialLink href='/github' Icon={FaGithub} color='gray' />
            <SocialLink href='/github' Icon={FaTwitter} color='sky' />
            <SocialLink href='/github' Icon={FaInstagram} color='pink' />
            <SocialLink href='/github' Icon={FaLinkedin} color='blue' />
          </div>

          <div className='flex flex-col gap-6'>
            <h1 className='text-6xl font-bold'> Swapnil Sachan </h1>

            <div className='flex flex-row gap-3 items-center'>
              <div className='h-[1px] w-36 bg-black'></div>
              <h2 className='text-lg'> Full Stack Developer </h2>
            </div>
          </div>
        </div>

        <div>
          <Image src='/images/test.jpg' alt='profile' width={500} height={500} />
        </div>
      </div>
    </div>
  )
}
