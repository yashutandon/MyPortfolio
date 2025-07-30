
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
                        <img src="/images/1.png" alt="Codely" />
                    </div>
                    <div className="text-content">
                        <h2>
                       AI-powered real-time code platform.
                        </h2>
                        <p className='text-white-50 md:text-xl' >Codely is a Lovable-inspired AI-powered coding platform that allows users to write prompts and get real-time code generation, execution, and debugging inside secure, Docker-based cloud sandboxes. Built with Next.js 15, Tailwind CSS v4, tRPC, and integrated with Clerk, OpenAI, Inngest, and Prisma ORM, Codely delivers a seamless developer experience directly in the browser without any local setup.</p>
                    </div>
                </div>
                {/* Rightside section */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2}>
                        <div>
                           <div className='image-wrapper bg-[#ffefdb]'>
                           <img src="/images/2.png" alt="Sarthi.ai" />
                           </div>
                           <h2> AI-Powered Smart Video Meeting Assistant </h2>
                        </div>
                    </div>
                    
                    <div className='project' ref={project3}>
                        <div>
                           <div className='image-wrapper bg-[#ffe7eb]'>
                           <img src="/images/3.png" alt="ClarityDocs" />
                           </div>
                           <h2>ClarityDocs - Your PDF Summary Assistant</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection