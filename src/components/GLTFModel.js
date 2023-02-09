import React from 'react'
import { useGLTF } from '@react-three/drei'

useGLTF.preload('/models/david.stl.glb')

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/david.stl.glb')

  // useFrame(() => {
  //   console.log(nodes.Asset3DLoadersceneRoot.position)
  // })

  return (
    <group {...props} dispose={null} scale={4.5} position={[-100, -500, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Asset3DLoadersceneRoot.geometry}
        material={nodes.Asset3DLoadersceneRoot.material}
      />
    </group>
  )
}
