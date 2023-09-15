import React from "react";
import "./styles/styles.scss"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import MapPage from "./pages/MapPage";
import TestPage from "./pages/TestPage";
import {ParallaxProvider} from 'react-scroll-parallax';
document.addEventListener('DOMContentLoaded', ev => {
  console.log('ready')
})
function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path={'/*'} element={<Main/>}/>
        <Route path={'/map'} element={<MapPage/>}/>
        <Route path={'/test'} element={<TestPage/>}/>
        <Route path="*" element={<Navigate to={'/'} replace/>}/>
      </Routes>

    </BrowserRouter>


  );
}

export default App;
