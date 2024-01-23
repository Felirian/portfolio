import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import SvgSelector from "./SvgSelector/SvgSelector";

const Header = () => {
  return (
    <HeaderWrapper>
      <SvgSelector svg={'Burger'}/>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
    width: 100vh;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    
`

export default Header;