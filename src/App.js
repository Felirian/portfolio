import React, {Suspense, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import MagicCursor from "./features/MagicCursor";
import {MagicCursorInfo, MagicCursorHover, BackGroundImageContext} from "./app/context";
import {GlobalStyle} from "./app/styles";
import {CODE_PROJECTS_DATA} from "./entities/CODE_PROJECTS";
import CodeID from "./pages/Code[ID]";
import BackGround from "./features/BackGround";
import Header from "./widgets/Header";
import CodeProjects from "./pages/CodeProjects";
import PhotoPage from "./pages/PhotoPage";

function App() {
  const [info, setInfo] = useState('')
  const [status, setStatus] = useState({
    hover: false,
    adhesion: false,
  })
  const [bgImage, setBgImage] = useState(null)



  return (
    <MagicCursorInfo.Provider value={[info, setInfo]}>
      <MagicCursorHover.Provider value={[status, setStatus]}>
        <BackGroundImageContext.Provider value={[bgImage, setBgImage]}>

          <GlobalStyle/>
          <BrowserRouter>
            <Suspense fallback={BackGround}>
              <Routes>
                <Route path={'/'} element={<Main/>}/>


                <Route path={'projects'}>
                  <Route path={'code'}>
                    <Route index element={<CodeProjects/>}/>

                    {CODE_PROJECTS_DATA.map((project, i) => (

                      <Route key={i} path={project.slug} element={
                        <CodeID currentProject={i}/>
                      }/>

                    ))}
                  </Route>
                  <Route path={'photo'} element={<PhotoPage/>}/>
                </Route>


                {/*<Route path="*" element={<Navigate to={'/'} replace/>}/>*/}
              </Routes>
            </Suspense>

            <Header/>
            <MagicCursor/>

          </BrowserRouter>

        </BackGroundImageContext.Provider>
      </MagicCursorHover.Provider>
    </MagicCursorInfo.Provider>
  );
}

export default App;
