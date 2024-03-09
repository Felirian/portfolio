import React, {useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import MagicCursor from "./features/MagicCursor";
import {MagicCursorInfo, MagicCursorHover} from "./app/context";
import {GlobalStyle} from "./app/styles";
import {CODE_PROJECTS_DATA} from "./entities/CODE_PROJECTS";
import CodeID from "./pages/Code[ID]";
import CodeProjectWrapper from "./features/CodeProjectWrapper";

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
                {CODE_PROJECTS_DATA.map((route, i)=> (
                  <Route key={i} path={route.slug} element={
                    // <CodeID />
                    <CodeProjectWrapper currentProject={i} />
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
