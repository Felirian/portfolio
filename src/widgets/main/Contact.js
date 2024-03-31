import React, {useRef} from 'react';
import styled from "styled-components";
import gsap from "gsap";
import {H1, H3} from "../../app/TextTags";
import {HoverLink} from "../../app/styles";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import FBXMan from "./FBXMan";
import {PerspectiveCamera} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const LINKS = [
  {Name: 'Telegram', href: 'https://t.me/FELiRiAN', slug: '@felirian'},
  {Name: 'Email', href: 'mailto:hhghv49@gmail.com', slug: 'hhghv49@gmail.com'},
  {Name: 'Git Hub', href: 'https://github.com/Felirian', slug: 'felirian.git'},
]

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger)
  const linkRef = useRef([]);
  const contactRef = useRef();
  const camera = useRef();

  useGSAP(() => {
    linkRef.current.forEach((link, index) => {
      const fromTl = gsap.timeline({
        scrollTrigger: {
          trigger: link,
          //markers: true,
          start: 'center 100%',
          end: 'center 70%',
          ease: "power1.inOut",
          scrub: 1,
        },
      });
      fromTl.from(link, {
        direction: 2,
        x: '100%',
        opacity: 0
      });
    });

  }, []);

  useGSAP(() => {
    const fromModel = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        //markers: true,
        start: 'center 100%',
        end: 'center 60%',
        ease: "power1.inOut",
        scrub: 2,
      },
    });

    fromModel.from(camera.current?.position, {
      x: -3,
      z: 2
    })


  }, [camera.current?.position]);

  return (
    <ContactWr id={'contact'} ref={contactRef}>
      <Canvas
        style={{
          width: '100%',
          height: '100vh',
          //backgroundColor: 'red',
          position: "absolute",
          left: 0,
          top: 0
        }}
      >
        <PerspectiveCamera position={[-0.5, 0, 3]} ref={camera}>
          <FBXMan/>
        </PerspectiveCamera>
      </Canvas>

      {LINKS.map((link, index) => (
        <LinkWr key={`link_${index}`} ref={(el) => (linkRef.current[index] = el)}>
          <H1>{link.Name}</H1>
          <HoverLink>
            <a href={link.href} target={'_blank'}>
              <H3>{link.slug}</H3>
            </a>
          </HoverLink>
        </LinkWr>
      ))}

    </ContactWr>
  );
};

const ContactWr = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vw;
  padding: 0 5vw;
  position: relative;
  //background-color: pink;
`
const LinkWr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1vw;
  width: fit-content;
`
export default Contact;