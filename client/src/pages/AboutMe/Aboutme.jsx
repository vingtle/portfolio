import React from "react";
import "./aboutme.css";
import ProfileImage1 from "../../assets/images/ProfileImage1.png";

const AboutMe = () => {
  return (
    <div id="aboutme-container">
      <div className="aboutme-content">
        <img src={ProfileImage1} alt="Profile" className="profile-image" />
        <div id="aboutme-text">
          <h1>ABOUT ME</h1>
          <p>Aspiring Web Developer Specializing in Front-End, Back-End</p>
          <p>As a dedicated and innovative UX/UI designer</p>
          <p>
            I bring a strong foundation in web development and digital
            multimedia,
          </p>
          <p>coupled with a user-centric approach to design.</p>
          <p>With extensive experience in creating interactive</p>
          <p>web applications and managing complex projects,</p>
          <p>
            I am proficient in transforming user needs into seamless, intuitive
            interfaces.
          </p>
          <p>Eager to contribute and grow in the Tech Industry </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
