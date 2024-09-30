import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div>
      <div id="skills-container">
        <h1>SKILLS</h1>
        <div className="skills-details">
          <p>Participated in a comprehensive course: HTML, CSS, JavaScript.</p>
          <p>
            Developed a solid foundation in both front-end and back-end
            technologies, such as Node.js.
          </p>
          <p>
            Completed multiple projects that simulated real-world applications.
          </p>
          <p>
            Collaborated with peers on a capstone project, enhancing skills in
            teamwork, problem-solving, and project management.
          </p>
          <p>
            Gained practical experience in UI/UX design, focusing on creating
            user-centric and responsive web interfaces.
          </p>
        </div>
      </div>

      <div id="workexperience-container">
        <h1>WORK EXPERIENCE</h1>
        <div className="workexperience-content">
          <div className="workexperience-details">
            <p>Front-end development: React JSX</p>
            <p>Back-end development: JavaScript, SQL</p>
            <p>
              Full stack integration and testing, UI/UX design principles and
              application
            </p>
            <p>Agile methodologies and version control using GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
