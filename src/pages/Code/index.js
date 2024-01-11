import React from 'react';
import ProjectCard from "../../components/Project/ProjectCard";
import {CODE_CASE} from "../../components/CasesList";
import styled from "styled-components";
const CodePage = () => {
  return (
    <CodeProjects>
      <Null/>
      <Null/>
      {CODE_CASE.map((el, index)=>(
        <ProjectCard
          key={index}
          name={el.name}
          title={el.title}
          info={el.info}
          stack={el.stack}
          href={el.href}
          pos={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
      <Null/>
      <Null/>
    </CodeProjects>
  );
};

const CodeProjects = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 7.81vw;
    margin-top: 7.81vw;
    margin-bottom: 7.81vw;
`
const Null = styled.div `
    height: 100vh;
    width: 100%;
`


export default CodePage;