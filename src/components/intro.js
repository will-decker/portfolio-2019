import React, { Suspense, useState, useEffect } from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as THREE from "three"
import { Environment } from "@react-three/drei"
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"

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
            <AnchorLink to="/#work">
              <div className="cta-btn">View My Work</div>
            </AnchorLink>
          </div>
        </div>
        <Canvas
          camera={{
            position: [0, -20, 40],
          }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[20, 20, 20]} intensity={0.4} />
          <pointLight position={[-20, 20, -20]} intensity={0.4} />

          <Suspense fallback={null}>
            <Environment preset={"warehouse"} background={false} />
            <Model />
          </Suspense>

          <Rig />
        </Canvas>
      </section>
    </>
  )
}

export default Intro
