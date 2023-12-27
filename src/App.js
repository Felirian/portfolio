import React, {lazy, Suspense, useState} from "react";
import "./styles/styles.scss"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import TestPage from "./pages/TestPage";
import ConceptualPhotos from "./pages/ConceptualPhotos/ConceptualPhotos";
import MagicCursor from "./components/MagicCursor/MagicCursor";
import {MagicCursorInfo, MagicCursorHover} from "./components/context";
import PagePreloader from "./components/PageProloader/PagePreloader";
import {useGSAP} from "@gsap/react";


const PortraitPhotosRoute = lazy(() => import('./pages/PortraitPhotos/PortraitPhotos'));

function App() {
  const [info, setInfo] = useState('')
  const [hover, setHover] = useState(false)
  return (
    <MagicCursorInfo.Provider value={[info, setInfo]}>
      <MagicCursorHover.Provider value={[hover, setHover]}>
        <BrowserRouter>
          <p className={'water_snack'}>@FELIRIAN</p>
          <Suspense fallback={<PagePreloader/>} >
            <Routes>
              <Route path={'/*'} element={<Main/>}/>
              <Route path={'/conceptual'} element={<ConceptualPhotos/>}/>
              <Route path={'/portrait'} element={
                <Suspense fallback={<PagePreloader/>} children={<PortraitPhotosRoute/>}/>
              }/>
              <Route path={'/test'} element={<TestPage/>}/>
              <Route path="*" element={<Navigate to={'/'} replace/>}/>
            </Routes>
          </Suspense>

          <MagicCursor/>
        </BrowserRouter>
      </MagicCursorHover.Provider>
    </MagicCursorInfo.Provider>
  );
}

export default App;
