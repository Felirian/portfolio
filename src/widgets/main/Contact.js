import React, {Suspense, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {Earth} from "./Earth";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {PerspectiveCamera} from "@react-three/drei";

const Contact = () => {
  const contactRef = useRef();
  const camera = useRef();
  //let pos = 2
  gsap.registerPlugin(ScrollTrigger)


  useGSAP(() => {
    // const earthTr = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: contactRef.current,
    //     markers: true,
    //     start: 'top 90%',
    //     end: 'center 50%',
    //     ease: "power1.inOut",
    //     scrub: true,
    //   }
    // })
    // console.log(camera.current?.position);
    // //earthTr.fromTo(pos, 0, 4)
  }, []);


  return (
    <ContactWr ref={contactRef}>

      <Canvas>
        <PerspectiveCamera position={[0,0, 3]} fov={50} far={2000} rotation={[0, 0, 0]} ref={camera}>
          <Suspense fallback={null} >
            <Earth/>
          </Suspense>
        </PerspectiveCamera>
      </Canvas>

    </ContactWr>
  );
};
const ContactWr = styled.div`
  width: 100%;
  height: 100vh;
`
export default Contact;