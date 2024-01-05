import { Metadata } from 'next'
import Link from 'next/link';

import { IconType } from 'react-icons'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { MdOutlineEmail } from "react-icons/md";

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'My contact information and a form to reach me!',
}

interface ContactCardProps {
  title: string
  value: string
  icon: IconType
  href: string
  color: string
}

const ContactCard: React.FC<ContactCardProps> = ({
  title, value, icon: Icon, href, color
}) => {
  return (
    <Link href={href} target='_blank'>
      <div className={`flex flex-col items-center p-4 gap-5 rounded-lg shadow-md bg-neutral-50 dark:bg-neutral-800/50 border-b-[1px] border-zinc-200 dark:border-zinc-800 transition-colors ${color}`}>
        <p className='text-base font-semibold'> {title} </p>
        <Icon size={40} />
        <p className='font-medium'> {value} </p>
      </div>
    </Link>
  )
}

const Page = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col items-start gap-8 pt-12 sm:pt-14 pb-20 min-h-[92vh] w-[90%] xl:w-[85%] 2xl:w-[1300px]'>
        <h1 className='text-6xl font-bold'> Contact Me </h1>

        <div className='flex flex-col gap-3.5 font-medium md:w-[700px]'>
          <p> This form is a work in progress. Please come back later! </p>
        </div>

        <div className='w-full flex flex-row justify-center gap-10 mt-8'>
          <div className='hidden md:flex flex-col justify-between gap-8'>
            <ContactCard
              title='Connect on LinkedIn'
              value='@swapnilsachan03'
              icon={BsLinkedin}
              href='https://www.linkedin.com/in/swapnilsachan03'
              color='text-blue-500'
            />
            
            <ContactCard
              title='Mail me at'
              value='swapnil.sachan2003@gmail.com'
              icon={MdOutlineEmail}
              href='mailto:swapnil.sachan2003@gmail.com'
              color='text-red-500'
            />
            
            <ContactCard
              title='Follow me on X'
              value='@swapnilsachan03'
              icon={BsTwitter}
              href='https://www.x.com/swapnilsachan03'
              color='text-sky-500'
            />
          </div>

          <form action="#" className='w-[500px] flex flex-col gap-5'>
            <div className="flex flex-row">
              <div className="w-1/2 pr-2 ">
                <label htmlFor="firstName" className="block my-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                  First Name
                </label>

                <input
                  type="text"
                  className="shadow-sm border bg-transparent border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter First Name"
                  required
                />
              </div>

              <div className="w-1/2 pl-2">
                <label htmlFor="firstName" className="block my-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                  Last Name
                </label>

                <input
                  type="text"
                  className="shadow-sm bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block my-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Your email
              </label>
              
              <input
                type="email"
                className="shadow-sm bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block my-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Subject
              </label>

              <input
                type="text"
                className="block p-3 w-full text-sm text-gray-900 dark:text-gray-100 bg-transparent rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm "
                placeholder="What do you want to talk about?"
                required
              />
            </div>

            <div >
              <label htmlFor="message" className="block my-2 text-left text-sm font-medium text-gray-900 dark:text-gray-100 ">
                Your message
              </label>

              <textarea
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 dark:text-gray-100 bg-transparent rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 resize-none"
                placeholder="Type in your message here"
              />
            </div>

            <button type="submit" className="mt-2 p-2 float-right text-white font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors duration-300">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page
