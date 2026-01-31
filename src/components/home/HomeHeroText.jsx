import React from 'react'
import Video from './Video'
const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center text-white'>
      <div className='text-[9vw] uppercase leading-[8vw] justify-center flex items-center'>L'étincelle</div>
      <div className='text-[9vw] uppercase leading-[8vw] justify-center flex items-start' >qui<div className='h-[8vw] -mt-5 rounded-full overflow-hidden  '><Video/></div>génère</div>
      <div className='text-[9vw] uppercase leading-[8vw] justify-center flex items-center' >la créativité</div>
    </div>
  )
}

export default HomeHeroText
