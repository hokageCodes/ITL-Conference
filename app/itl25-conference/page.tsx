import React from 'react'
import AboutSection from '@/components/about-us/About'
import PartnersSection from '@/components/partners/PartnersSection'
import ScheduleSection from '@/components/schedule/ScheduleSection'


export default function page () {
  return (
    <div className='pt-24'>
        <AboutSection />
        <PartnersSection />
        <ScheduleSection />
    </div>
  )
}
