import React, {useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import MagicCursor from "./features/MagicCursor";
import {MagicCursorInfo, MagicCursorHover} from "./app/context";
import {GlobalStyle} from "./app/styles";

function App() {
  const [info, setInfo] = useState('')
  const [hover, setHover] = useState(false)

  return (
    <MagicCursorInfo.Provider value={[info, setInfo]}>
      <MagicCursorHover.Provider value={[hover, setHover]}>

        <GlobalStyle/>
        <BrowserRouter>

          <Routes>
            <Route path={'/*'} element={<Main/>}/>
            <Route path="*" element={<Navigate to={'/'} replace/>}/>
          </Routes>

          <MagicCursor/>
        </BrowserRouter>
      </MagicCursorHover.Provider>
    </MagicCursorInfo.Provider>
  );
}

export default App;
