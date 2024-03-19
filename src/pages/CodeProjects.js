import React from 'react';
import {CODE_PROJECTS_DATA} from "../entities/CODE_PROJECTS";
import {NavLink} from "react-router-dom";
import {H3} from "../app/TextTags";

const CodeProjects = () => {
  return (
    <div>
      in process
      {CODE_PROJECTS_DATA.map((project, index) => (
        <NavLink to={`/projects/code/${project.slug}`} key={`project_${index}`}>
          <H3>{project.name}</H3>
        </NavLink>
      ))}
    </div>
  );
};

export default CodeProjects;