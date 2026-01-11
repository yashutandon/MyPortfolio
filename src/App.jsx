import React from 'react'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'
import ShowcaseSection from './sections/ShowcaseSection'
import LogoSection from './sections/LogoSection'
import FeatureCard from './sections/FeatureCard'
import TechStack from './sections/TechStack'
import CodingProfiles from './sections/CodingProfiles'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Growth from './sections/Growth'
import ExperienceSection from './sections/ExperienceCard'

const App = () => {
  return (
<>
    <NavBar/>
    <Hero/>
    <ExperienceSection/>
    <ShowcaseSection/>
    <CodingProfiles/>
    <LogoSection/>
    <FeatureCard/>
    <TechStack/>
    {/* <Growth/> */}
    <Contact/>
    <Footer/>
</>
  )
}

export default App