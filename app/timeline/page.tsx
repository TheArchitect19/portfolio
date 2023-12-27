'use client'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import education from './education'

const Page = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col items-start gap-8 py-16 min-h-[92vh] w-[90%] xl:w-[85%] 2xl:w-[1300px]'>
        <h1 className='text-6xl font-bold'> Education </h1>

        <VerticalTimeline
          className='w-full'
          lineColor='rgb(21 94 117)'
        >
          {
            education.map((item, index) => {
              return (
                <VerticalTimelineElement
                  visible={true}
                  key={index}
                  date={item.date}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(245 158 11)' }}
                  iconStyle={{ background: 'rgb(33, 150, 243)', border: 'solid rgb(21 94 117)', color: '#fff' }}
                  icon={<item.icon size={30} />}
                  contentStyle={{ borderRadius: '7px', border: '1px dashed rgb(245 158 11)', boxShadow: '0 4px 10px -4px rgba(159,18,57,0.25)', background: 'rgba(39, 39, 42, 0.07)' }}
                >
                  <h3 className='text-amber-600 font-bold text-xl'> {item.title} </h3>
                  <h4 className='font-medium text-base'> {item.organization} </h4>
                  <h4 className='text-sm text-neutral-500'> {item.location} </h4>
                  <p className='text-base'> {item.description} </p>
                </VerticalTimelineElement>
              )
            })
          }
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Page
