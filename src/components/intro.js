import React, { Suspense } from "react"
import { Link } from "gatsby"
import * as THREE from "three"
import { Environment } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => {
    camera.position.lerp(
      vec.set(mouse.x * -5, mouse.y * -4, camera.position.z),
      0.08
    )
    camera.lookAt(0, 0, 0)
  })
}

const Intro = () => (
  <>
    <section id="intro">
      <div className="intro-container">
        <div className="intro-text">
          <h1>Will Decker</h1>
          <h2>Web Developer</h2>
          <Link to="/#work">
            <div className="cta-btn">View My Work</div>
          </Link>
        </div>
      </div>
      <Canvas
        camera={{
          position: [0, -20, 60],
        }}
        // style={{ height: '50vh' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[20, 20, 20]} intensity={0.4} />
        <pointLight position={[-20, 20, -20]} intensity={0.4} />

        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
        <Suspense fallback={null}>
          <Environment preset={"sunset"} background={false} />
          <Model />
        </Suspense>
        <Rig />
      </Canvas>
    </section>
  </>
)

export default Intro
