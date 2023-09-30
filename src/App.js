import React from "react";
import "./styles/styles.scss"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <BrowserRouter>
      <p className={'water_snack'}>@FELIRIAN</p>
      <Routes>
        <Route path={'/*'} element={<Main/>}/>
        <Route path={'/test'} element={<TestPage/>}/>
        <Route path="*" element={<Navigate to={'/'} replace/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
