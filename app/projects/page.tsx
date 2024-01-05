import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

import { FaGithub } from 'react-icons/fa6';
import { BsGlobe } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Projects",
  description: 'Some projects made by me using various technologies that I know.',
}

interface ProjectDetailsProps {
  title: string;
  children: React.ReactNode;
  link?: string;
  github?: string;
  src: string;
};

const ProjectDetails: React.FC<ProjectDetailsProps>  = ({
  title, children, link, github, src
}) => {
  return (
    <div className='w-full flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 flex flex-col gap-8 mb-8 md:pb-0 md:pr-10'>
        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-[36px] text-orange-700 dark:text-orange-400'> {title} </h3>

          <div className='flex flex-row gap-16'>
            { github && (
              <Link href={github} target='_blank'>
                <button className='flex flex-row gap-2 items-center text-neutral-700 dark:text-neutral-400'>
                  <FaGithub size={24} />
                  <p className='font-medium underline underline-offset-2'> GitHub </p>
                </button>
              </Link>
            )}

            { link && (
              <Link href={link} target='_blank'>
                <button className='flex flex-row gap-2 items-center text-neutral-700 dark:text-neutral-400'>
                  <BsGlobe size={24} />
                  <p className='font-medium underline underline-offset-2'> Website </p>
                </button>
              </Link>
            )}
          </div>
        </div>

        {children}
      </div>

      <div className='w-full md:w-1/2 relative rounded-2xl h-[420px] bg-gradient-to-bl from-orange-300 to-sky-400 overflow-hidden'>
        <Image
          src={src}
          alt={title}
          width={1000} height={1000}
          unoptimized
          className='absolute top-7 left-7 sm:top-10 sm:left-10 rounded-xl min-w-[700px] aspect-auto'
        />
      </div>
    </div>
  )
}

const Page = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col items-start gap-8 pt-12 sm:pt-14 pb-20 min-h-[92vh] w-[90%] xl:w-[85%] 2xl:w-[1300px]'>
          <h1 className='text-6xl font-bold'> Projects </h1>

          <div className='flex flex-col gap-3.5 font-medium md:w-[700px] lg:w-[750px]'>
            <p> My primary focus these days is learning Data Structures & system design, but I have built several minor and major projects in the past. </p>
            
            <p> I'm passionate about building projects that can be used by the community and solve real-world problems or, if they help me learn how some of the bigger systems work, apart from that and I'm always looking for new ideas to work on. </p>

            <p> Here are some projects I've worked on that I think are worth mentioning. </p>
          </div>

          <div className='flex flex-col gap-16 w-full mt-10'>
            <ProjectDetails
              title='CollegeNotes'
              link='https://collegenotes.swapnilsachan.tech'
              src='/images/collegenotes.jpg'
            >
              <p>
                CollegeNotes is a website built for college & university students to share their notes. On CollegeBlog, various blogs related to college life, exam preparation, study guides, etc. are available for users to read.
              </p>
            </ProjectDetails>
            
            <ProjectDetails
              title='ContextPDF'
              link='https://contextpdf.swapnilsachan.tech'
              github='https://github.com/swapnilsachan03/contextpdf'
              src='/images/contextpdf.png'
            >
              <p>
                ContextPDF is a LLM powered application which provides a seamless chat experience where users can upload PDF files, create chats around them, and interact with an AI assistant.
              </p>
            </ProjectDetails>

            <ProjectDetails
              title='OpenJudge'
              link='https://openjudge.swapnilsachan.tech'
              github='https://github.com/swapnilsachan03/openjudge'
              src='/images/openjudge.png'
            >
              <p>
                OpenJudge is a website where users can solve programming problems from various online judges like Codeforces, Codechef, etc. and get their solutions verified by the website.
              </p>
            </ProjectDetails>
          </div>
      </div>
    </div>
  )
}

export default Page
