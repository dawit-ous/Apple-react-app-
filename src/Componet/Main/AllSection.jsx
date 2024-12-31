import React from 'react'
import AlertSection from './AlertSection'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFifth from './SectionFifth'
import SectionSix from './SectionSix'
import YouTubeVideos from '../Youtobevideos/YouTobeVidios'

export default function AllSection() {
  return (
    <div>
        <AlertSection/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFifth/>
      <SectionSix />
      <YouTubeVideos/>
    </div>
  )
}
