import React from 'react';
import styled from "styled-components";
import TitleCanIDO from "./TitleCanIDO";

const WhatCanIDo = () => {


  return (
    <WhatCanIDoWr>

      <TitleCanIDO firstRow={'Web'} secondRow={'Devolpment'}/>


      {/*<Block>*/}
      {/*  <Title>Что я умею?</Title>*/}
      {/*</Block>*/}

      {/*<Block>*/}
      {/*  <H1>Web</H1>*/}
      {/*</Block>*/}

      {/*<Block>*/}
      {/*  <H2>React, React.Native, Next.js</H2>*/}
      {/*</Block>*/}

      {/*<Block>*/}
      {/*  <H1>Database</H1>*/}
      {/*</Block>*/}

      {/*<Block>*/}
      {/*  <H2>MySql, PostgreSql</H2>*/}
      {/*</Block>*/}

      {/*<Block>*/}
      {/*  <H1>Prog</H1>*/}
      {/*</Block>*/}

      {/*<Block>*/}
      {/*  <H2>C#, C++</H2>*/}
      {/*</Block>*/}


    </WhatCanIDoWr>
  );
};

const WhatCanIDoWr = styled.div`
  display: block;
  position: relative;

  width: 100%;
  height: 200vh;
  top: 0;

  //background-color: #2c2c2c;
`

export default WhatCanIDo;