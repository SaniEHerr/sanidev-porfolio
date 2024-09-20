import React, { useEffect } from "react";
import "./App.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/Home";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Project from "./pages/Project";
import Learning from "./pages/Learning";

function App() {

  return (
    <>
      <GlobalStyles />
      <CustomCursor />
      <AnimatePresence>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/projects" element={<Work />} />
          <Route exact path="/projects/:projectID" element={<Project />} />
          <Route exact path="/learning" element={<Learning />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes> 
      </AnimatePresence>
    </>
  );
}

export default App;