import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh
    Object_6: THREE.Mesh
    Object_8: THREE.Mesh
    Object_10: THREE.Mesh
    Object_13: THREE.Mesh
    Object_16: THREE.Mesh
    Object_18: THREE.Mesh
  }
  materials: {
    uv_checker_material_uv_grid_4096x4096: THREE.MeshStandardMaterial
    ['uv_checker_material_uv_grid_4096x4096.001']: THREE.MeshPhysicalMaterial
    ['SVGMat.004']: THREE.MeshStandardMaterial
    ['uv_checker_material_uv_grid_4096x4096.002']: THREE.MeshStandardMaterial
    ['uv_checker_material_uv_grid_4096x4096.004']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function Play5(props: React.ComponentProps<'group'>) {
  const { nodes, materials } = useGLTF('/models/ps5.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.uv_checker_material_uv_grid_4096x4096} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['uv_checker_material_uv_grid_4096x4096.001']} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.uv_checker_material_uv_grid_4096x4096} />
      <mesh geometry={nodes.Object_10.geometry} material={materials['SVGMat.004']} position={[0.124, 0.377, 0.103]} rotation={[-0.008, -0.091, 1.47]} scale={[0.025, 0.01, 0.025]} />
      <mesh geometry={nodes.Object_13.geometry} material={materials['uv_checker_material_uv_grid_4096x4096.002']} />
      <mesh geometry={nodes.Object_16.geometry} material={materials['uv_checker_material_uv_grid_4096x4096.004']} />
      <mesh geometry={nodes.Object_18.geometry} material={materials['Material.001']} position={[0.065, 0.357, -0.097]} rotation={[1.567, 0.044, 1.731]} scale={[0.428, 0.009, 0.428]} />
    </group>
  )
}

useGLTF.preload('/models/ps5.glb')