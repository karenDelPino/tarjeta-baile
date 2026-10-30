import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
    Object_6: THREE.Mesh
    Object_7: THREE.Mesh
    Object_8: THREE.Mesh
    Object_9: THREE.Mesh
    Object_10: THREE.Mesh
    Object_11: THREE.Mesh
    Object_12: THREE.Mesh
  }
  materials: {
    ['arms.png']: THREE.MeshStandardMaterial
    ['belt.png']: THREE.MeshStandardMaterial
    ['eyes_1.png']: THREE.MeshStandardMaterial
    ['face.png']: THREE.MeshStandardMaterial
    ['hair.png']: THREE.MeshStandardMaterial
    ['hands.png']: THREE.MeshStandardMaterial
    ['mouth.png']: THREE.MeshStandardMaterial
    ['pants.png']: THREE.MeshStandardMaterial
    ['shirt.png']: THREE.MeshStandardMaterial
    ['shoes.png']: THREE.MeshStandardMaterial
    ['sole.png']: THREE.MeshStandardMaterial
  }
}

export function Personaje(props: React.ComponentProps<'group'>) {
  const { nodes, materials } = useGLTF('/models/personaje.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['arms.png']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['belt.png']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['eyes_1.png']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['face.png']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['hair.png']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['hands.png']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['mouth.png']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['pants.png']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['shirt.png']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['shoes.png']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['sole.png']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/personaje.glb')