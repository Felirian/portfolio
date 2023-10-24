import React, {useState} from "react";
import "./styles/styles.scss"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import TestPage from "./pages/TestPage";
import ConceptualPhoto from "./pages/ConceptualPhoto/ConceptualPhoto";
import MagicCursor from "./components/MagicCursor/MagicCursor";
import {MagicCursorInfo, MagicCursorHover} from "./components/context";

function App() {
  const [info, setInfo] = useState('')
  const [hover, setHover] = useState(false)
  return (
    <MagicCursorInfo.Provider value={[info, setInfo]}>
      <MagicCursorHover.Provider value={[hover, setHover]}>
        <BrowserRouter>
          <p className={'water_snack'}>@FELIRIAN</p>
          <Routes>
            <Route path={'/*'} element={<Main/>}/>
            <Route path={'/conceptual'} element={<ConceptualPhoto/>}/>
            <Route path={'/test'} element={<TestPage/>}/>
            <Route path="*" element={<Navigate to={'/'} replace/>}/>
          </Routes>
          <MagicCursor/>
        </BrowserRouter>
      </MagicCursorHover.Provider>
    </MagicCursorInfo.Provider>
  );
}

export default App;
