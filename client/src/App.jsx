import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Welcome from "./pages/welcome/welcome";
import Education from "./pages/education/education";
import AboutMe from "./pages/aboutme/aboutme";
import Skills from "./pages/skills/skills";
import GetInTouch from "./pages/Getintouch/Getintouch";
import MyWork from "./pages/mywork/mywork";

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
