import React, {useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MagicCursor from "./components/MagicCursor/MagicCursor";
import {MagicCursorInfo, MagicCursorHover} from "./shared/context";
import Main from "./pages/Main";
import {GlobalStyle} from "./styles/GlobalStyles";
import {ROUTERS} from "./shared/routers";
import {CSSTransition} from "react-transition-group";
import Header from "./components/Header";

function App() {
  const [info, setInfo] = useState('')
  const [hover, setHover] = useState(false)

  return (
    <MagicCursorInfo.Provider value={[info, setInfo]}>
      <MagicCursorHover.Provider value={[hover, setHover]}>
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            {ROUTERS.map((el, index) => (
              <Route path={el.path} key={`path_${index}`} element={
                <CSSTransition
                  timeout={1000}
                >
                  {el.Component}
                </CSSTransition>
              } />
            ))}
            <Route path={'/*'} element={<Main/>}/>

            <Route path="*" element={<Navigate to={'/'} replace/>}/>
          </Routes>
        </BrowserRouter>
        <Header/>
        <MagicCursor/>

      </MagicCursorHover.Provider>
    </MagicCursorInfo.Provider>
  );
}

export default App;
