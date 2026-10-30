import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh
  }
  materials: {
    PolyUnwrapperCheckerMaterial: THREE.MeshStandardMaterial
  }
}

export function EscudoBarca(props: React.ComponentProps<'group'>) {
  const { nodes, materials } = useGLTF('/models/fc_barcelona-leo.glb') as unknown as GLTFResult
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh 
            geometry={nodes.defaultMaterial.geometry} 
            material={materials.PolyUnwrapperCheckerMaterial} 
            rotation={[-Math.PI / 2, 0, 0]} 
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/fc_barcelona-leo.glb')