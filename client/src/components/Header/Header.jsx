import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div id="header">
      <div onClick={() => navigate("/")} className="nav-btn">
        Home
      </div>
      <div onClick={() => navigate("/aboutme")} className="nav-btn">
        About Me
      </div>
      <div onClick={() => navigate("/education")} className="nav-btn">
        Education
      </div>
      <div onClick={() => navigate("/skills")} className="nav-btn">
        Skills
      </div>
      <div onClick={() => navigate("/mywork")} className="nav-btn">
        My Work
      </div>
      <div onClick={() => navigate("/getintouch")} className="nav-btn">
        GetInTouch
      </div>
    </div>
  );
};

export default Header;
