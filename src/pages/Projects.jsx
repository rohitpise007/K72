import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";


const Projects = () => {
  const projects =[
    {image1:'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
    image2:'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93'},{
    image1:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
    image2:'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'},{
    image1:'https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5',
    image2:'https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec'}]
      
    gsap.registerPlugin(ScrollTrigger);
    
    useGSAP(function(){
        gsap.from('hero',{
          height:10,
          stagger:{
            amount:0.5,
          },
          ScrollTrigger:{
          trigger:'.lol',
          markers:true,
          start:'top 100%',
          end:'top -150%',
          scrub:true
          },
       
          
        })
      })
  
    return (
    <div className=' p-4'>
      <div className='bg-red-200 pt-[25vh] '>
        <h2 className=' font-[font1] text-[8vw] uppercase '>Projects </h2>
      </div>
       <div className='lol'>
        
          {projects.map(function(elem){
          return  <div className=' hero w-full h-[850px]  mb-4 flex  gap-[20px] '>
          <ProjectCard image1={elem.image1} image2={elem.image2}/>
          </div>})}
  
       </div>
      
      </div>
      
  )
}

export default Projects
