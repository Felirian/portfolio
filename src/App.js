import React, {Suspense, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import MagicCursor from "./features/MagicCursor";
import {MagicCursorInfo, MagicCursorHover} from "./app/context";
import {GlobalStyle} from "./app/styles";
import {CODE_PROJECTS_DATA} from "./entities/CODE_PROJECTS";
import CodeID from "./pages/Code[ID]";
import {CSSTransition} from "react-transition-group";
import CodeProjectPreload from "./features/CodeProjectPreload";
import styled from "styled-components";

function App() {
  const [info, setInfo] = useState()
  const [status, setStatus] = useState({
    hover: false,
    adhesion: false,
  })

  return (
    <MagicCursorInfo.Provider value={[info, setInfo]}>
      <MagicCursorHover.Provider value={[status, setStatus]}>

        <GlobalStyle/>
        <BrowserRouter>

          <Routes>
            <Route path={'/'} element={<Main/>}/>

            <Route path={'projects'}>
              <Route path={'code'}>
                <Route index element={<h1>codes</h1>}/>

                {/*<Route path={':projectId'} element={<CodeID/>}/>*/}
                {CODE_PROJECTS_DATA.map((project, i)=> (

                    <Route key={i} path={project.slug} element={
                      <CodeID currentProject={i}/>
                    }/>

                ))}
              </Route>
              <Route path={'photo'} element={
                <h1>photo</h1>
              }/>
            </Route>

            <Route path="*" element={<Navigate to={'/'} replace/>}/>
          </Routes>

          <MagicCursor/>
        </BrowserRouter>
      </MagicCursorHover.Provider>
    </MagicCursorInfo.Provider>
  );
}

export default App;
