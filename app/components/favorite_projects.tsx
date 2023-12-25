import Link from 'next/link'

import { BiLinkExternal } from "react-icons/bi";

const FavoriteProjects = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto pb-10 md:pb-28 px-5 xl:px-0">
        <header className="flex flex-col md:flex-row justify-between items-center pt-16 lg:pt-28 md:mb-10 lg:my-0">
          <h1 className="text-5xl lg:text-7xl max-w-lg font-bold text-cyan-500 my-10 md:my-0 text-center">
            Featured Projects
          </h1>

          <Link
            href="/projects"
            className="mb-20 md:mb-0 px-4 py-3 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center border-2 border-dashed hover:border-solid border-cyan-500"
          >
            <BiLinkExternal size={22} />
            <p className='text-sm md:text-base'> View all </p>
          </Link>
        </header>

        <a
          href="https://collegenotes.swapnilsachan.tech"
          className="w-full block shadow-2xl lg:-mt-5"
        >
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/images/collegenotes.jpg"
              alt="collegenotes"
              className="transform hover:scale-125 transition duration-2000 ease-out"
            />
            <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
              CollegeNotes
            </h1>

            <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
              01
            </h1>
          </div>
        </a>
      </div>
    </div>
  )
}

export default FavoriteProjects
