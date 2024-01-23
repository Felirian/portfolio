import React, {useState} from 'react';
import styled, {keyframes} from "styled-components";
import {NavLink} from "react-router-dom";
import SvgSelector from "./SvgSelector/SvgSelector";
import {COLORS} from "../shared/variables";

const Header = () => {
  const [open, setOpen] = useState(false)


  return (
    <HeaderWrapper>

      <Burger onClick={() => setOpen(!open)} isOpen={open}>
        <SvgSelector svg={'Burger'}/>

      </Burger>

    </HeaderWrapper>
  );

};

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 100vh;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
`
const Burger = styled.div`
  right: 0;
  position: absolute;

  rect {transition: 0.5s;}
  svg:hover #first {x: 6}
  svg:hover #second {x: 2}
  svg:hover #third {x: 6}

  #first {
    transform: 
      rotate(${(props) => (props.isOpen ? '45deg' : '0deg')}) 
      translateX(${(props) => (props.isOpen ? '5px' : '0px')}) 
      translatey(${(props) => (props.isOpen ? '-2px' : '0px')});
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
      translateX(${(props) => (props.isOpen ? '-17px' : '0px')}) 
      translatey(${(props) => (props.isOpen ? '0px' : '0px')});
    transition: 0.5s;
  }
`

export default Header;