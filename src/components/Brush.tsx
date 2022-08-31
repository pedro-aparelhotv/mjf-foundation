import { useFrame, useThree } from '@react-three/fiber'
import GSAP from 'gsap'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

import fragmentShader from 'assets/shaders/fragmentShader.glsl'
import vertexShader from 'assets/shaders/vertexShader.glsl'

interface IBrushProps {
  color: number
}

const Brush = ({ color }: IBrushProps) => {
  const { size } = useThree()

  const cursor = useRef({
    x: 0,
    y: 0,
  })

  const meshRef = useRef<THREE.Mesh>()
  const matRef = useRef<THREE.ShaderMaterial>()

  useEffect(() => {
    const onMouseMove = event => {
      cursor.current.x = event.clientX
      cursor.current.y = event.clientY
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  useFrame(() => {
    const targetX = cursor.current.x - size.width / 2
    const targetY = size.height / 2 - cursor.current.y

    meshRef.current.position.x = GSAP.utils.interpolate(
      meshRef.current.position.x,
      targetX,
      0.1,
    )
    meshRef.current.position.y = GSAP.utils.interpolate(
      meshRef.current.position.y,
      targetY,
      0.1,
    )

    const currColor = new THREE.Color(color)

    matRef.current.uniforms.uColor.value = currColor
  })

  useEffect(() => {
    matRef.current.transparent = true
    matRef.current.needsUpdate = true
    matRef.current.uniformsNeedUpdate = true
  }, [])

  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(color) },
    }),
    [],
  )

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <circleGeometry attach="geometry" args={[50, 64]} />
      <shaderMaterial
        ref={matRef}
        attach="material"
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export default Brush
