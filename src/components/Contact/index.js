import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="contact-page" id="contact">
      <h2 className="name">
        <strong>Contact Me Today!</strong>
      </h2>
      <div className="email">
        <h4>Email: shital732@yahoo.com</h4>
      </div>
      <div className="contact-link">
        <a href="https://github.com/anish732" target="_blank">
          {" "}
          <i
            className="fa fa-github-square"
            style={{ color: "rgb(5, 116, 69)" }}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/shital-patel-72ba3a194/"
          target="_blank"
        >
          <i
            className="fa fa-linkedin-square"
            style={{ color: "rgb(5, 116, 69)" }}
          ></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
