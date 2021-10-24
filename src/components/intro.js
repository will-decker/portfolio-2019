import React, { Suspense, useState, useEffect } from "react"
import { useSpring, animated, config } from "@react-spring/three"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as THREE from "three"
import {
  Environment,
  Loader,
  Plane,
  Sphere,
  Icosahedron,
  Tetrahedron,
  MeshDistortMaterial,
} from "@react-three/drei"
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import Model from "./WD_logo"

const Rig = () => {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => {
    camera.position.lerp(
      vec.set(mouse.x * -7, mouse.y * -7, camera.position.z),
      0.04
    )
    camera.lookAt(0, 0, 0)
  })
}

const Blob = props => {
  const [active, setActive] = useState(true)

  return (
    <Sphere
      {...props}
      args={[13, 16, 16]}
      position={[0, 40, -350]}
      rotation={[0, Math.PI / 1.8, 0]}
      scale={[20, 12, 14]}
      onClick={event => setActive(!active)}
    >
      <MeshDistortMaterial
        attach="material"
        color="#e40475"
        distort={0.6}
        speed={0.5}
        metalness={0.5}
        roughness={0.7}
        wireframe={active}
      />
    </Sphere>
  )
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
            position: [0, -10, 40],
          }}
          // style={{ position: "fixed" }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[20, 20, 20]} intensity={0.4} />
          <pointLight position={[-20, 20, -20]} intensity={0.4} />

          <Suspense fallback={null}>
            <Environment preset={"warehouse"} background={false} />
            <Model />
          </Suspense>
          {/* <Plane args={[40, 40]} /> */}
          {/* <Sphere
            args={[15, 32, 16]}
            position={[0, 100, -500]}
            scale={[12, 12, 12]}
          >
            <meshBasicMaterial attach="material" color="#e40475" />
          </Sphere> */}

          <Blob />
          <Rig />
        </Canvas>
        <Loader
          containerStyles={{ backgroundColor: "#100324" }}
          barStyles={{ backgroundColor: "#43d0d4f1" }}
          dataInterpolation={p => `Loading ${p.toFixed(2)}%`}
          dataStyles={{ color: "#e40475" }}
        />
      </section>
    </>
  )
}

export default Intro
