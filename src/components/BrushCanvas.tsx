import { useContextBridge } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRouter } from 'next/router'
import * as THREE from 'three'

import { UserPreferencesContext } from 'contexts/UserPreferencesContext'

import Brush from './Brush'
import Camera from './Camera'

const meshColors = {
  '': 0xeeeeee,
  'the-foundation': 0xeeeeee,
  'the-place': 0xf2e4ce,
  news: 0xcee4e4,
  fellows: 0xebe8ff,
  events: 0xe6f2e4,
  board: 0xfbf9e6,
  library: 0xf8d8d8,
  contact: 0xececf8,
}

const BrushCanvas = () => {
  const router = useRouter()

  const index = router.pathname.slice(1)

  const brushColor = meshColors[index]

  const ContextBridge = useContextBridge(UserPreferencesContext)

  return (
    <div className="brush-canvas" data-page={index}>
      <Canvas
        gl={canvas => {
          const renderer = new THREE.WebGLRenderer({
            canvas,
            preserveDrawingBuffer: false,
            alpha: true,
            antialias: false,
          })

          const color = new THREE.Color(1, 1, 1)
          renderer.setClearColor(color, 0.0)

          router.events.on('routeChangeComplete', () => {
            renderer.clearColor()
          })

          return renderer
        }}
      >
        <ContextBridge>
          <Camera />
          <Brush color={brushColor} />
        </ContextBridge>
      </Canvas>
    </div>
  )
}

export default BrushCanvas
