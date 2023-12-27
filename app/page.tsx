import Link from "next/link";

import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify, FaTwitter } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi";

import FavoriteProjects from "@/app/components/favorite_projects";

import LatestCode from "@/app/components/latest_code";
import getLatestRepos from "@/lib/getlatestRepos";

interface SocialLinkProps {
  href: string;
  Icon: IconType;
  color: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, Icon, color }) => {
  if (color == 'blue') color = 'text-blue-600'
  else if (color == 'gray') color = 'text-neutral-800 dark:text-white'
  else if (color == 'sky') color = 'text-sky-500'
  else if (color == 'pink') color = 'text-pink-500'
  else if (color == 'green') color = 'text-green-500'

  return (
    <div className={`${color} rounded-full p-2.5 hvr-bob`}>
      <Link href={href} className='transition-colors ease-in-out duration-200' target='_blank'> <Icon size={26} /> </Link>
    </div>
  )
}

export default async function Home() {
  const token = process.env.GITHUB_AUTH_TOKEN;
  const repositories: any = await getLatestRepos(token as string);

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between min-h-[92vh] w-[90%] xl:w-[85%] 2xl:w-[1300px] py-16 lg:py-0'>
        <div className='flex  flex-col-reverse xl:flex-row gap-10 2xl:gap-20'>
          <div className='flex flex-row self-start xl:flex-col xl:self-center justify-center'>
            <SocialLink href='https://www.linkedin.com/in/swapnilsachan03' Icon={FaLinkedin} color='blue' />
            <SocialLink href='https://www.github.com/swapnilsachan03' Icon={FaGithub} color='gray' />
            <SocialLink href='https://www.twitter.com/swapnilsachan03' Icon={FaTwitter} color='sky' />
            <SocialLink href='https://www.instagram.com/swapnilsachan03' Icon={FaInstagram} color='pink' />
            <SocialLink href='https://open.spotify.com/user/0xxxne1qdv17su3g35305idgd?si=1a2083b468df4969' Icon={FaSpotify} color='green' />
          </div>

          <div className='flex flex-col gap-12 items-start'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-[40px] md:text-6xl font-bold'> Swapnil Sachan </h1>

              <div className='flex flex-row gap-3 items-center'>
                <div className='h-[1px] w-36 bg-black dark:bg-white'></div>
                <h2 className='text-base md:text-lg'> Full Stack Developer </h2>
              </div>
            </div>

            <p className='text-base font-medium lg:w-[600px] transition-colors ease-in-out duration-200'>
              I'm a student at <Link href='https://www.cuchd.in/' className='text-red-500 hover:text-red-600'> Chandigarh University </Link> pursuing BE in Computer Science and Engineering. I'm a web development & machine learning enthusiast and have built many projects, such as the <Link href='https://collegenotes.swapnilsachan.tech' className='text-lime-500 hover:text-lime-300'> CollegeNotes </Link> website, PDFContext, etc. Currently, I'm focussing on solving <Link href='https://www.leetcode.com/swapnilsachan03' className='text-fuchsia-500 hover:text-fuchsia-300'> Leetcode </Link> and learning Data Structures & Algorithms.
            </p>

            <Link href='/resume.pdf' target='_blank'>
              <button className='flex flex-row items-center gap-3 bg-stone-800 hover:bg-stone-700 transition-all ease-in-out duration-300 text-white rounded-xl py-3 px-5'>
                <p> Resume </p>
                <HiOutlineDocumentText size={26} />
              </button>
            </Link>
          </div>
        </div>

        <div className='home__img' />
      </div>

      <FavoriteProjects />
      <LatestCode repositories={repositories} />
    </div>
  )
}
