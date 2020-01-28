import React, { Component } from "react";
import { Link } from "react-scroll";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-dark"
        style={{ backgroundColor: "#b8b8b8" }}
      >
        <Link
          className="me"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-270}
          duration={700}
        >
          About
        </Link>
        <Link
          className="me"
          activeClass="active"
          to="experties"
          spy={true}
          smooth={true}
          offset={-270}
          duration={700}
        >
          My Expertise
        </Link>

        <Link
          className="me"
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
        >
          My creations
        </Link>
        <Link
          className="me"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-299}
          duration={700}
        >
          Contact
        </Link>
      </nav>
    );
  }
}

export default Navbar;
