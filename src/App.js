import React from "react";
import "./styles/styles.scss"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import MapPage from "./pages/MapPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/*'} element={<Main />} />
        <Route path={'/map'} element={<MapPage />} />
        <Route path={'/test'} element={<TestPage />} />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
