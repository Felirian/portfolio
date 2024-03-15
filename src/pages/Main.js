import React from 'react';
import styled from "styled-components";
import {Block} from "../app/styles";
import WhyMe from "../widgets/main/WhyMe";

const Main = () => {

  return (
    <MainWr>
      <h1>Main</h1>
      <Block>

      </Block>
      <WhyMe/>
      <Block>

      </Block>

    </MainWr>
  );
};

const MainWr = styled.div`

`

export default Main;