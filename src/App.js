import './App.css'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import DavidModels from './components/GLTFModel'

const DavidCanvas = () => (
  <Canvas
    orthographic
    camera={{
      fov: 20,
      position: [-200, 0, 100],
    }}
  >
    <OrbitControls
      autoRotate={true}
      autoRotateSpeed={5}
      dampingFactor={0.5}
      rotation={true}
      enableZoom={true}
      enablePan={false}
    />

    <DavidModels />
    {/* <fog attach='fog' args={['#FF6128', 5, 30]} /> */}
    <fog attach='fog' args={['#39ed77', 400, 2000]} />
    <ambientLight intensity={0.15} />

    <directionalLight
      intensity={0.5}
      position={[100, 0, 100]}
      color='#CFED71'
    />
    <directionalLight intensity={0.5} position={[-100, 0, 0]} color='#7143DA' />

    {/* <directionalLight intensity={0.5} position={[0, 100, 0]} color='#B0F3F1' />
    <directionalLight intensity={0.5} position={[-100, 0, 0]} color='#B0F3F1' /> */}

    {/* <pointLight position={[-50, -100, -100]} color='#39ed77' />
    <pointLight position={[0, 1000, 0]} color='#B0F3F1' /> */}

    {/* <pointLight castShadow={true} position={[4, -1000, 100]} color='#FFCFDF' /> */}
    {/* <pointLight position={[-4, 4, -4]} color="#B0F3F1" /> */}
  </Canvas>
)

function App() {
  return (
    <div className='wrapper'>
      <DavidCanvas />
    </div>
  )
}

export default App
