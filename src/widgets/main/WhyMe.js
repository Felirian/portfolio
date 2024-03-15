import React from 'react';
import styled from "styled-components";

const WhyMe = () => {


  return (
    <WhyMeWr>
      <Skills algin={'end'}>
        <h2>Hard skills</h2>
        <p>JavaScript</p>
        <p>C#</p>
        <p>Database</p>
      </Skills>
      <StickyWr>
        <h1>Why me?</h1>
      </StickyWr>
      <Skills algin={'start'}>
        <h2>Soft skill</h2>
        <p>Time management</p>
        <p>Continuous improvement</p>
        <p>Problem solving</p>
      </Skills>
    </WhyMeWr>
  );
};


const WhyMeWr = styled.div`
  display: flex;
  gap: 0.78vw;
  top: 0;
  position: relative;
  height: 100vh;
  
`
const StickyWr = styled.div`
  position: sticky;
  padding-top: 20vh;
  top: 0;
  left: 0;
  width: 15.86vw;
  height: 60px;
`
const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.56vw;
  align-items: ${(props)=> props.algin};
  justify-content: center;
  width: 100%;
  margin: 7.81vw 0;
`

export default WhyMe;