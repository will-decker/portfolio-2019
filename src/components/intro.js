import React, { Suspense, useState, useEffect } from "react"
import { Link } from "gatsby"
import * as THREE from "three"
import { Environment } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import Model from "./WD_logo"

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => {
    camera.position.lerp(
      vec.set(mouse.x * -7, mouse.y * -7, camera.position.z),
      0.08
    )
    camera.lookAt(0, 0, 0)
  })
}

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="intro-container">
          <div id="intro-text">
            <div id="anim-text">
              <h1>Will Decker</h1>
              <h2>Creative Developer</h2>
            </div>
            <Link to="/#work">
              <div className="cta-btn">View My Work</div>
            </Link>
          </div>
        </div>
        <Canvas
          camera={{
            position: [0, -20, 40],
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
          {/* <EffectComposer>
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.8}
              height={1000}
            />
          </EffectComposer> */}
        </Canvas>
      </section>
    </>
  )
}

export default Intro
