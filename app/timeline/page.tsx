import { Metadata } from 'next'
import Timeline from './Timeline'

export const metadata: Metadata = {
  title: 'Timeline  –  Swapnil Sachan',
  description: 'A brief history of my professional career and education.',
}

const Page = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col items-start gap-8 pt-12 sm:pt-14 pb-20 min-h-[92vh] w-[90%] xl:w-[85%] 2xl:w-[1300px]'>
        <h1 className='text-6xl font-bold'> Education </h1>

        <Timeline />
      </div>
    </div>
  )
}

export default Page
