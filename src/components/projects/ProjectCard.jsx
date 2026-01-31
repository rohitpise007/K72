import React from 'react'

const ProjectCard = (props) => {
  return (
       <>
       
          <div className="w-1/2 h-full group  relative transition-all hover:rounded-4xl overflow-hidden bg-blue-400"><img className='h-full w-full object-cover'src={props.image1} alt="img" />
          <div className='absolute opacity-0 transition-opacity group-hover:opacity-100 top-0 left-0 flex items-center justify-center h-full w-full  bg-black/20'>
          <h2 className='uppercase text-3xl font-[font1] text-white border-white border-2 rounded-full'>Vior le project</h2>
          </div>
          </div>
          <div className="w-1/2 h-full group  relative transition-all hover:rounded-4xl overflow-hidden bg-blue-400"><img className='h-full w-full object-cover'src={props.image2} alt="img" />
          <div className='absolute opacity-0  transition-opacity group-hover:opacity-100 top-0 left-0 flex items-center justify-center h-full w-full  bg-black/20'>
          <h2 className='uppercase text-3xl font-[font1] text-white border-white border-2 rounded-full'>Vior le project</h2>
          </div>
          </div>
    </>
            
    
       
  )
}

export default ProjectCard
