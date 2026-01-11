import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
<footer className='footer'>
    <div className='footer-container'>
        <div className='flex flex-col justify-center md:items-start items-center'>
            <a href="https://catalystcare.in/self-help/blogs/why-students-struggle-to-focus-not-laziness-psychology-2025">Visit my blog</a>
        </div>
        <div className='socials'>
            {socialImgs.map((img)=>(
                <a className='icon' target='_blank' href={img.url} key={img.url}>
                    <img src={img.imgPath} alt="social media"/>
                </a>
            ))}
        </div>
        <div className='flex flex-col justify-center'>
            <p className='text-center md:text-end'>
            ©{new Date().getFullYear()} Yash. All rights reserved.
            </p>
        </div>
    </div>
</footer>
  )
}

export default Footer