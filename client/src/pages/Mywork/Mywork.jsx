import React from "react";
import "./mywork.css";

const MyWork = () => {
  return (
    <div id="mywork-container">
      <h1>MY WORK</h1>
      <p>
        This is the result of my work during my program Web-Dev at
        WildCodeSchool.
      </p>
      <div className="mywork-links">
        <a
          href="https://github.com/WildCodeSchool-2024-02/JS-Paris-BrainWaves-P2-QuizzAddict"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/WildCodeSchool-2024-02/JS-Paris-BrainWaves-P2-QuizzAddict
        </a>

        <a
          href="https://github.com/vingtle/PROJECT-01"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/vingtle/PROJECT-01
        </a>

        <a
          href="https://github.com/WildCodeSchool-2024-02/JS-Paris-BrainWaves-P3-Devlog.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/vingtle/JS-Paris-BrainWaves-P3-Devlog
        </a>
      </div>
    </div>
  );
};

export default MyWork;
