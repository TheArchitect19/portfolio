import Link from 'next/link';
import Image from 'next/image';

import { FaGithub } from 'react-icons/fa6';
import { BsGlobe } from "react-icons/bs";

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
          <h3 className='font-bold text-[36px] text-orange-900'> {title} </h3>

          <div className='flex flex-row gap-16'>
            { github && (
              <Link href={github} target='_blank'>
                <button className='flex flex-row gap-2 items-center text-neutral-700'>
                  <FaGithub size={24} />
                  <p className='font-medium underline underline-offset-2'> GitHub </p>
                </button>
              </Link>
            )}

            { link && (
              <Link href={link} target='_blank'>
                <button className='flex flex-row gap-2 items-center text-neutral-700'>
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
          className='absolute top-7 left-7 sm:top-10 sm:left-10 rounded-xl min-h-[420px] object-cover'
        />
      </div>
    </div>
  )
}

const Page = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col items-start gap-8 py-16 min-h-[92vh] w-[90%] xl:w-[85%] 2xl:w-[1300px]'>
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
              github='https://github.com'
              src='/images/collegenotes.jpg'
            >
              <p>
                CollegeNotes is a platform for students to share their notes and study materials with other students. It is built using the MERN stack and is hosted on AWS EC2.
              </p>
            </ProjectDetails>
            
            <ProjectDetails
              title='PDFContext'
              link='https://collegenotes.swapnilsachan.tech'
              github='https://github.com'
              src='/images/test.jpg'
            >
              <p>
                PDFContext is a platform for students to share their notes and study materials with other students. It is built using the MERN stack and is hosted on AWS EC2.
              </p>
            </ProjectDetails>

            <ProjectDetails
              title='Online Judge'
              link='https://collegenotes.swapnilsachan.tech'
              github='https://github.com'
              src='/images/collegenotes.jpg'
            >
              <p>
                CollegeNotes is a platform for students to share their notes and study materials with other students. It is built using the MERN stack and is hosted on AWS EC2.
              </p>
            </ProjectDetails>
          </div>
      </div>
    </div>
  )
}

export default Page
