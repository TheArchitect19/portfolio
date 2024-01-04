import React from 'react'
import { IconType } from 'react-icons'
import { Metadata } from 'next'

import services from './services'

export const metadata: Metadata = {
  title: 'Services  –  Swapnil Sachan',
  description: 'These are the skills that I can provide to my clients.',
}

interface ServicesCardProps {
  title: string
  description: string
  icon: IconType
  background: string
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  title, description, icon: Icon, background
}) => {
  return (
    <div className='flex flex-col items-start p-6 w-full rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 shadow-md border-b-[1px] border-zinc-200 dark:border-zinc-800 transition-colors'>
      <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${background}`}>
        <Icon size={30} color='white' />
      </div>

      <div className='flex flex-col gap-2 mt-6'>
        <h3 className='font-bold text-2xl'> {title} </h3>
        
        <p className='font-light text-neutral-800 dark:text-neutral-300'>
          {description}
        </p>
      </div>
    </div>
  )
}

const Page = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col items-start pt-12 sm:pt-14 pb-20 min-h-[92vh] w-[90%] xl:w-[85%] 2xl:w-[1300px]'>
          <h1 className='text-6xl font-bold'> Services </h1>

          <div className='flex flex-col gap-3.5 font-medium md:w-[700px] mt-8'>
            <p> I specialize in building exceptional websites, applications, and everything in between. These are the services that I provide to my clients: </p>
          </div>

          <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 mt-14'>
            { services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                background={service.background}
              />
            ))}
          </div>
      </div>
    </div>
  )
}

export default Page
