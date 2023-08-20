import Image from 'next/image'
import Link from 'next/link'
import { BiRightArrowAlt } from "react-icons/bi"
import { FaGithub, FaInstagram, FaKaggle, FaLinkedin, FaLinkedinIn, FaTwitter, FaTwitterSquare } from 'react-icons/fa'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Google',
    date: 'June 2019 - Present',
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    skills: ["React", "HTML", "JS", "TypeScript"]
  },
  {
    title: 'React.js Developer',
    company: 'Facebook',
    date: 'May 2017 - April 2019',
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    skills: ["Flutter", "GitHub", "React Native"]
  },
]

const projects = [
  {
    title: 'CollegeNotes & CollegeBlog',
    cover: '/images/collegenotes.jpg',
    date: 'January 2023 - July 2023',
    github: 'https://github.com/swapnilsachan03/collegenotes',
    external: 'https://www.collegnotes.co.in/',
    tech: ["Next.JS", "Tailwind CSS", "TS", "Prisma", "MongoDB"],
    description: "CollegeNotes helps students by providing good quality study notes for free, so that they don't have to struggle to find them. Students can also contribute their notes on the platform. CollegeBlog is a place where blogs related to college life and related topics can be found. It is a place where students can share their experiences and learn from others.",
  },
  {
    title: 'reCourse',
    cover: '/images/recourse.png',
    date: 'May 2023 - May 2023',
    github: 'https://github.com/swapnilsachan03/recourse',
    external: 'https://recourse.vercel.app/',
    tech: ["React", "Chakra UI", "Express", "Node.js", "MongoDB"],
    description: 'reCourse is a video lectures based education platform where creators can create their courses and upload lectures and the learners can access those courses under a unified subscription plan.',
  },
  {
    title: 'Airbnb Clone',
    cover: '/images/airbnb.png',
    date: 'May 2023 - May 2023',
    github: 'https://github.com/swapnilsachan03/airbnb-clone',
    external: 'https://rent-rooms.vercel.app/',
    tech: ["Next.JS", "Tailwind CSS", "TS", "Prisma", "MongoDB"],
    description: 'A minimal Airbnb Clone made using NextJS, Tailwind CSS, NextAuth, Prisma and MongoDB. It has all the basic functionality such as property listings, reservations, cancellations, search filters etc. All of this with an astonishingly clean and functional UI.',
  },
]

export default function Home() {
  return (
    <div className='
      md:px-8
      lg:px-16
      xl:px-0
      xl:w-[1000px]
      mb-16
    '>
      <div className='flex flex-col h-[92vh] items-start justify-center'>
        <p className='font-mono text-sky-500 mb-4'>Hi, my name is</p>
        <h1 className='font-bold text-6xl mb-4'> Swapnil Sachan. </h1>
        <h2 className='font-bold text-secondary text-6xl'> I code & build apps for web. </h2>

        <p className='w-[65%] mt-10 text-secondary'>
          I'm a student at <Link href="https://www.cuchd.in" target='_blank' className='font-medium text-white hover:text-sky-500 transition-colors ease-in-out duration-500'>Chandigarh University</Link> pursuing BE in Computer Science and Engineering. I'm a web development enthusiast and have built the <Link href="https://www.collegenotes.co.in" target='_blank' className='font-medium text-white hover:text-sky-500 transition-colors ease-in-out duration-500'>CollegeNotes</Link> website, all by myself! Currently, I'm focussing on solving <Link href="https://www.leetcode.com/swapnilsachan03" target='_blank' className='font-medium text-white hover:text-sky-500 transition-colors ease-in-out duration-500'>Leetcode</Link> and learning Data Structures & Algorithms.
        </p>

        <button className='flex flex-row items-center gap-2 px-3 py-2 mt-8 border-[2px] border-sky-500 hover:bg-sky-300/10 text-sky-500 font-semibold rounded-md transition-all duration-500'>
          <Link target="_blank" href="/resume.pdf"> Get My Resume </Link>
          <BiRightArrowAlt size={20} />
        </button>

        <div className='flex flex-row gap-4 mt-14'>
          <Link target="_blank" href="https://www.github.com/swapnilsachan03">
            <button className='gap-2 text-secondary hover:text-white hvr-float rounded-full transition-all duration-500'>
              <FaGithub size={25} />
            </button>
          </Link>
          
          <Link target="_blank" href="https://www.instagram.com/swapnilsachan03">
            <button className='gap-2 text-secondary hover:text-white hvr-float rounded-full transition-all duration-500'>
              <FaInstagram size={25} />
            </button>
          </Link>

          <Link target="_blank" href="https://www.twitter.com/swapnilsachan03">
            <button className='gap-2 text-secondary hover:text-white hvr-float rounded-full transition-all duration-500'>
              <FaTwitter size={25} />
            </button>
          </Link>

          <Link target="_blank" href="https://www.linkedin.com/in/swapnilsachan03">
            <button className='gap-2 text-secondary hover:text-white hvr-float rounded-full transition-all duration-500'>
              <FaLinkedinIn size={25} />
            </button>
          </Link>

          <Link target="_blank" href="https://www.kaggle.com/swapnilsachan03">
            <button className='gap-2 text-secondary hover:text-white hvr-float rounded-full transition-all duration-500'>
              <FaKaggle size={23} />
            </button>
          </Link>
        </div>
      </div>

      <div id='about' className='flex flex-col gap-6 pt-8'>
        <div className='flex flex-row gap-2 items-end'>
          <p className='font-mono text-2xl text-sky-500'>01.</p>
          {/* text-gray-700 dark:text-gray-200 */}
          <h2 className='font-bold text-3xl'> About Me </h2>
        </div>

        <div className='flex flex-row gap-6 justify-around'>
          <div className='flex flex-col gap-5 w-[60%]'>
            <p> Hello! My name is Swapnil and I enjoy creating things that live on the internet. My interest in web development started back in second year of my college when I decided to create a website to share notes for the students in my university — turns out building a website by linking HTML & CSS files taught me a lot about the foundations of modern web development! </p>

            <p> Fast-forward to today, I've transformed that small static website into a full fledged Next.js web app called CollgeNotes, and have built numerous other projects that you can see down below!. </p>
            
            <p> My main focus these days is on learning Data Structures & Algorithms and new-age technologies like Machine Learning, AI, etc. </p>
            <p> Here are a few technologies I'm most comfortable with: </p>

            <div className='flex flex-row gap-28 font-mono text-[15px]'>
              <ul>
                <li className='tech-list'> JavaScript (ES6+)</li>
                <li className='tech-list'> TypeScript </li>
                <li className='tech-list'> React.js </li>
              </ul>

              <ul>
                <li className='tech-list'> Next.js </li>
                <li className='tech-list'> MongoDB </li>
                <li className='tech-list'> Node.js & Express </li>
              </ul>
            </div>
          </div>

          <div className='w-[30%] h-[360px]'>
            <div className='w-full h-full relative rounded-md bg-sky-500'>
              <Image
                unoptimized
                src="/images/swapnil.jpg"
                alt="Picture of the author"
                className='h-full w-full object-cover rounded-md absolute bottom-3 right-3'
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div id='experience' className='flex flex-col gap-8 pt-28'>
        <div className='flex flex-row gap-2 items-end'>
          <p className='font-mono text-2xl text-sky-500'>02.</p>
          <h2 className='font-bold text-3xl'> Places I've Worked At </h2>
        </div>

        <div className='flex flex-col gap-10 px-12'>
          { experiences.map((experience, index) => (
            <div className='flex flex-row gap-2' key={index}>
              <div className='w-[25%]'>
                <p className='text-secondary text-sm mt-1'> { experience.date } </p>
              </div>

              <div className='flex flex-col gap-3'>
                <h3 className='font-semibold text-lg'>
                  { experience.title }
                  <span className='text-sky-500 font-semibold'> @{experience.company} </span>
                </h3>

                <ul className='list-disc list-inside'>
                  { experience.points.map((point, index) => (
                    <li key={index}> { point } </li>
                  )) }
                </ul>

                <div className='flex flex-row gap-2'>
                  { experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className='text-sm px-3 py-[5px] text-sky-500 bg-sky-300/10 rounded-full font-semibold'
                    >
                      {skill}
                    </span>
                  )) }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div id='projects' className='flex flex-col gap-8 pt-28'>
        <div className='flex flex-row gap-2 items-end'>
          <p className='font-mono text-2xl text-sky-500'>03.</p>
          <h2 className='font-bold text-3xl'> Things I've Built </h2>
        </div>

        <div className='flex flex-col gap-6 mx-16'>
          { projects.map((project, index) => (
            <div className='flex flex-row gap-6 p-4 rounded-xl border-t-[1px] border-transparent hover:border-neutral-600 hover:bg-neutral-800 hover:shadow-lg bg-opacity-40 transition-all duration-300' key={index}>
              <div className='w-[30%]'>
                <Image
                  unoptimized
                  src={project.cover}
                  alt="Picture of the author"
                  className='h-[150px] w-full object-cover rounded-md'
                  width={500}
                  height={500}
                />
              </div>

              <div className='flex flex-col gap-3 w-[75%]'>
                <h3 className='font-semibold text-lg peer-hover:text-sky-500'>
                  { project.title }
                </h3>

                <p className='text-secondary'>
                  { project.description }
                </p>

                <div className='flex flex-row gap-2'>
                  { project.tech.map((skill, index) => (
                    <span
                      key={index}
                      className='text-sm px-3 py-[5px] text-sky-500 bg-sky-300/10 rounded-full font-semibold'
                    >
                      {skill}
                    </span>
                  )) }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div id='contact' className='flex flex-col gap-8 h-[90vh] items-center justify-center'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <p className='font-mono text-sky-500'> 04. What's Next? </p>
          <h2 className='font-extrabold text-5xl'> Get In Touch </h2>
        </div>

        <div className='flex flex-col items-center justify-center gap-8 px-64'>
          <p className='text-center text-gray-400'>
            Currently, I'm just focusing on competitive coding, building my portfolio and learning new technologies. I'm also looking for new opportunities - if you have any or just want to chat, please feel free to reach out to me!
          </p>

          <button className='flex flex-row font-mono w-fit items-center gap-2 py-3 px-4 mt-8 border-[2px] border-sky-500 hover:bg-sky-300/10 text-sky-500 font-semibold rounded-md transition-all duration-500'>
            <Link target="_blank" href="mailto:swapnil.sachan2003@gmail.com"> Say Hello </Link>
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-3 items-center justify-center'>
        <p className='text-center text-sm font-light'> Made with ❤️ in TypeScript </p>

        <div className='flex flex-row gap-3'>
          <Link target="_blank" href="https://www.github.com/swapnilsachan03">
            <button className='gap-2 text-secondary hover:text-white rounded-full transition-all duration-500'>
              <FaGithub size={18} />
            </button>
          </Link>
          
          <Link target="_blank" href="https://www.instagram.com/swapnilsachan03">
            <button className='gap-2 text-secondary hover:text-white rounded-full transition-all duration-500'>
              <FaInstagram size={18} />
            </button>
          </Link>

          <Link target="_blank" href="https://www.twitter.com/swapnilsachan03">
            <button className='gap-2 text-secondary hover:text-white rounded-full transition-all duration-500'>
              <FaTwitter size={18} />
            </button>
          </Link>

          <Link target="_blank" href="https://www.linkedin.com/in/swapnilsachan03">
            <button className='gap-2 text-secondary hover:text-white rounded-full transition-all duration-500'>
              <FaLinkedin size={18} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
