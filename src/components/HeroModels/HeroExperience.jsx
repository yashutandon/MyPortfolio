import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particle';

const HeroExperience = () => {
  const isTablet=useMediaQuery({query:'(max-width:1024px)'});
  const isPhone=useMediaQuery({query:'(max-width:768px)'});
  return (
    <Canvas camera={{position:[0,0,15],fov:45}}>
     

      <OrbitControls
      enablePan={false}
      enableZoom={!isTablet && !isPhone}
      maxDistance={20}
      minDistance={5}
      minPolarAngle={Math.PI/5}
      maxAzimuthAngle={Math.PI/2}
      />

      <HeroLights/>
      <Particles count={1000}/>
      <group
      scale={isPhone ? 0.7:1}
      position = {[0,-3.5,0]}
      rotation={[0,-Math.PI/4,0]}
      >
      
      <Room/>
      </group>
    </Canvas>
  )
}

export default HeroExperience