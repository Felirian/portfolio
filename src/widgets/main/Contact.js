import React, {useRef} from 'react';
import styled from "styled-components";
import gsap from "gsap";
import {H1, H2, H3} from "../../app/TextTags";
import {HoverLink} from "../../app/styles";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

const LINKS = [
  {Name: 'Telegram', href: 'https://t.me/FELiRiAN', slug: '@felirian'},
  {Name: 'Email', href: 'mailto:hhghv49@gmail.com', slug: 'hhghv49@gmail.com'},
  {Name: 'Git Hub', href: 'https://github.com/Felirian', slug: 'felirian.git'},
]

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger)
  const linkRef = useRef([]);

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

  return (
    <ContactWr id={'contact'}>
      {LINKS.map((link, index)=> (
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
`
const LinkWr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1vw;
  width: fit-content;
`
export default Contact;