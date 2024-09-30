import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Welcome from "./pages/Welcome/Welcome";
import Education from "./pages/Education/Education";
import AboutMe from "./pages/AboutMe/Aboutme";
import Skills from "./pages/Skills/Skills";
import GetInTouch from "./pages/Getintouch/Getintouch";
import MyWork from "./pages/Mywork/Mywork";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
        <Route path="mywork" element={<MyWork />} />
        <Route path="getintouch" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}

export default App;
