import { useFrame, useThree } from '@react-three/fiber'
import GSAP from 'gsap'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

import { useUserPreferences } from 'contexts/UserPreferencesContext'

import fragmentShader from 'assets/shaders/fragmentShader.glsl'
import vertexShader from 'assets/shaders/vertexShader.glsl'

interface IBrushRef {
  key: number
  mesh: THREE.Mesh
  material: THREE.ShaderMaterial
}

interface IBrushProps {
  color: number
}

// const current
const maxMeshs = 200
let currentFrame = 0

const defaultValue = Array.from({ length: maxMeshs }, (_, idx) => ({
  key: idx,
  mesh: null,
  material: null,
}))

const Brush = ({ color }: IBrushProps) => {
  const { userAgent } = useUserPreferences()
  const { size } = useThree()

  const brushSize = typeof userAgent?.device.type !== 'undefined' ? 30 : 60

  const meshesRef = useRef<IBrushRef[]>(defaultValue)

  const cursor = useRef({
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
  })

  useEffect(() => {
    const onMouseMove = (event: globalThis.MouseEvent) => {
      cursor.current.x = event.clientX - size.width / 2
      cursor.current.y = size.height / 2 - event.clientY
    }

    const onTouchMove = (event: TouchEvent) => {
      const target = event.targetTouches[0]

      cursor.current.x = target.clientX - size.width / 2
      cursor.current.y = size.height / 2 - target.clientY
    }

    if (typeof userAgent.device.type !== 'undefined') {
      window.addEventListener('touchmove', onTouchMove)
    } else {
      window.addEventListener('mousemove', onMouseMove)
    }

    return () => {
      if (typeof userAgent.device.type !== 'undefined') {
        window.removeEventListener('touchmove', onTouchMove)
      } else {
        window.removeEventListener('mousemove', onMouseMove)
      }
    }
  }, [userAgent, size])

  useFrame(() => {
    const currentIdx = currentFrame % maxMeshs

    const { mesh, material } = meshesRef.current[currentIdx]

    material.uniforms.uOpacity.value = 1.0

    const targetX = GSAP.utils.interpolate(
      cursor.current.prevX,
      cursor.current.x,
      0.1,
    )
    const targetY = GSAP.utils.interpolate(
      cursor.current.prevY,
      cursor.current.y,
      0.1,
    )

    mesh.position.x = cursor.current.prevX = targetX
    mesh.position.y = cursor.current.prevY = targetY

    currentFrame++

    const currColor = new THREE.Color(color).convertLinearToSRGB()
    material.uniforms.uColor.value = currColor
  })

  useEffect(() => {
    meshesRef.current.forEach(entry => {
      entry.material.needsUpdate = true
      entry.material.uniformsNeedUpdate = true
    })
  }, [])

  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(color) },
      uOpacity: { value: 1.0 },
    }),
    [],
  )

  return (
    <>
      {meshesRef.current.map((entry, idx) => (
        <mesh key={entry.key} ref={el => (meshesRef.current[idx].mesh = el)}>
          <circleGeometry attach="geometry" args={[brushSize, 64]} />
          <shaderMaterial
            ref={el => (meshesRef.current[idx].material = el)}
            attach="material"
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={uniforms}
            transparent={true}
            depthTest={false}
            depthWrite={false}
          />
        </mesh>
      ))}
    </>
  )
}

export default Brush
