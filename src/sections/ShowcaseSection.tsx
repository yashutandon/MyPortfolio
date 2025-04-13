
import React, { useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger);



const ShowcaseSection = () => {
    const sectionRef = useRef(null); 
    const project = useRef(null); 
    const project2= useRef(null);
    const project3= useRef(null);  

    
    
    
    useGSAP(()=>{
        const projects=[project.current,project2.current,project3.current];
        projects.forEach((card,index)=>{
            gsap.fromTo(
                card,
                {
                    y:50, opacity:0
                },
                {
                    y:0 , opacity:1,
                    duration:1,
                    delay:0.3 * (index + 1),
                    scrollTrigger:{
                        trigger:card,
                        start:'top bottom-=100'
                    }
                }
            )
        })
           gsap.fromTo(
             sectionRef.current,
             {opacity:0},
             {opacity:1,
             duration:1.5}
            )
    },[])
  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full '>
            <div className='showcaselayout'>
                {/* Leftside section */}
                <div className='first-project-wrapper' ref={project}>
                    <div className='image-wrapper'>
                        <img src="/images/project.png" alt="MockPrepAi" />
                    </div>
                    <div className="text-content">
                        <h2>
                        AI-powered mock interview platform with real-time feedback and analysis.
                        </h2>
                        <p className='text-white-50 md:text-xl' >An app built with Next.js, TypeScript, Tailwind CSS, Framer Motion, OpenAI (GPT-3.5 + Gemini), Firebase (Auth + Firestore), Vapi, Zod. </p>
                    </div>
                </div>
                {/* Rightside section */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2}>
                        <div>
                           <div className='image-wrapper bg-[#ffefdb]'>
                           <img src="/images/project2.png" alt="MockPrepAi" />
                           </div>
                           <h2>Library Management Platform</h2>
                        </div>
                    </div>
                    
                    <div className='project' ref={project3}>
                        <div>
                           <div className='image-wrapper bg-[#ffe7eb]'>
                           <img src="/images/project3.png" alt="YC Directory" />
                           </div>
                           <h2>YC Directory - A Startup Showcase App</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection