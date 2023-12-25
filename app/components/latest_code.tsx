'use client'

import { BiLinkExternal } from "react-icons/bi";

export default function LatestCode({ repositories }: any) {
  const repos = repositories.slice(0, 6);

  return (
    <section className="pb-14 md:pb-28">
      <div className="max-w-6xl mx-auto px-10 md:mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 lg:pt-28 md:my-10 lg:my-0">
          <h1 className="text-5xl lg:text-7xl max-w-lg font-bold text-cyan-500 my-10 md:my-0 text-center lg:text-left">
            Latest Code
          </h1>

          <a
            href={`https://github.com/swapnilsachan03`}
            className="mb-14 md:mb-0 px-4 py-3 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center border-2 border-dashed hover:border-solid border-cyan-500"
          >
            <BiLinkExternal size={22} />
            <p className='text-sm'> View GitHub </p>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-10 gap-6 lg:gap-8 gap-y-6 lg:gap-y-8">
        {repos &&
          repos.map((latestRepo: any, idx: number) => (
            <GithubRepoCard latestRepo={latestRepo} key={idx} />
          ))}
      </div>
    </section>
  )
}

const GithubRepoCard = ({ latestRepo }: any) => {
  return (
    <div className="bg-slate-300/10 border-[1px] border-teal-500 shadow-md rounded-lg p-4 md:p-5">
      <h1 className="font-semibold text-xl text-teal-600">
        {latestRepo.name}
      </h1>

      <p className="text-base font-medium my-4 text-gray-500">
        {latestRepo.description}
      </p>
      
      <a
        href={latestRepo.clone_url}
        className="font-semibold group flex flex-row space-x-2 w-full items-center text-teal-900"
      >
        <p>View Repository </p>
      
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  )
}
