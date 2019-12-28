import React from "react";
import "./style.css";
import "../../images";

function About() {
  return (
    <div className="about-page" id="about">
      <div className="about-me">
        <h2>
          Full Stack Web Developer with an extensive and successful background
          in management. A quick learner who is constantly seeking to improve
          skill set through solving technical challenges and exceeding project
          requirements.Highly adaptable to any situation and thrive in team
          collaborations as well as solo projects.
        </h2>
        <br></br>
      </div>
      <div className="img">
        <img src="../../images/logo192.png" className="logo" alt="react"></img>
        <img src="../images/ajax.jpg" className="logo" alt="ajax"></img>
        <img src="../images/node.png" className="logo" alt="node"></img>
        <img src="../images/mongo.jpg" className="logo-1" alt="mongo"></img>
        <img src="../images/sql.png" alt="sql"></img>
      </div>
    </div>
  );
}

export default About;