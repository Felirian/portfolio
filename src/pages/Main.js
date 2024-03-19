import React from 'react';
import styled from "styled-components";
import {Block} from "../app/styles";
import WhyMe from "../widgets/main/WhyMe";
import MainTitle from "../widgets/main/MainTitle";
import WhatCanIDo from "../widgets/main/WhatCanIDo";
import Contact from "../widgets/main/Contact";

const Main = () => {

  return (
    <MainWr>
      <MainTitle/>
      <WhyMe/>
      <Block/>
      <WhatCanIDo/>
      <Contact/>
    </MainWr>
  );
};

const MainWr = styled.div`

`

export default Main;