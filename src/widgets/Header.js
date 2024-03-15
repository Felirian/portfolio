import React, {useState} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import SvgSelector from "../shared/SvgSelector";
import {H3} from "../app/TextTags";
import {HoverLink} from "../app/styles";

const ROUTERS = [
  {path: '/', name: "Main"},
  {path: '/projects/code', name: "Code's projects"},
  {path: '/projects/photo', name: 'Photo'},
  // {path: '/price-list', name: 'Price list'},
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <HeaderWrapper>
      <Burger onClick={() => setOpen(!open)} isOpen={open}>
        <SvgSelector svg={'Burger'}/>
      </Burger>

      <Links>
        {ROUTERS.map((el, i)=>(
          <NavLink
            to={el.path}
            key={`header_link${i}`}
            onClick={()=>setOpen(!open)}
            style={{
              opacity: open ? 1 : 0,
              //border: 'pink 1px solid',
              transition: 'opacity 1s ease, transform 0.5s ease',
              transform: `translateX(${open ? '0vw' : '20vw'})`,
              transitionDelay: `${i * 0.1}s`
            }}
          >
            <HoverLink>
              <H3>{el.name}</H3>
            </HoverLink>
          </NavLink>
        ))}
      </Links>

    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`  
  display: block;
  height: 2.08vw;
  position: fixed;
  top: 0;
  right: 0;
  transition: 0.5s ease;
  z-index: 99;
  mix-blend-mode: difference;
`

const Links = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 3.13vw;
  gap: 2.08vw;   
`

const Burger = styled.div`
  right: 0;
  position: absolute;
  z-index: 100;
  rect {transition: 0.5s;}
  svg:hover #first {x: 6}
  svg:hover #second {x: 2}
  svg:hover #third {x: 6}
  
  #first {
    transform: 
      rotate(${(props) => (props.isOpen ? '45deg' : '0deg')}) 
      translateX(${(props) => (props.isOpen ? '3px' : '0px')}) 
      translatey(${(props) => (props.isOpen ? '-4px' : '0px')});
    transition: 0.5s;
  }

  #second {
    width: ${(props) => (props.isOpen ? '0' : '16')};
    transform: translateX(${(props) => (props.isOpen ? '12px' : '0px')});
    transition: 0.5s;
  }

  #third {
    transform: 
      rotate(${(props) => (props.isOpen ? '-45deg' : '0deg')}) 
      translateX(${(props) => (props.isOpen ? '-14px' : '0px')}) 
      translatey(${(props) => (props.isOpen ? '-2px' : '0px')});
    transition: 0.5s;
  }
`

export default Header;