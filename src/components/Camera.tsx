import { OrthographicCamera } from '@react-three/drei'
import { useFrame, useThree } from 'react-three-fiber'

const Camera = () => {
  const { size } = useThree()

  const frustumSize = size.height
  const aspect = size.width / size.height

  useFrame(state => {
    state.camera.lookAt(0, 0, 0)
    state.camera.updateProjectionMatrix()
  })

  return (
    <OrthographicCamera
      makeDefault
      args={[
        (frustumSize * aspect) / -2,
        (frustumSize * aspect) / 2,
        frustumSize / 2,
        frustumSize / -2,
        -1000,
        100,
      ]}
      position={[0, 0, 4]}
    />
  )
}

export default Camera
