import React from "react";
import { Col, Row } from "reactstrap";

import "./style.css";

function Title() {
  return (
    <div>
      <Row>
        <Col>
          <h3>
            React <img src="./images/logo192.png"></img>
          </h3>
          <h4>I love building applications in React.</h4>
        </Col>
        <Col>
          <h3>
            MongoDB | MySQL <img src="./images/sql.png"></img>
          </h3>
          <h4> I can handle data with Mongo or MySQL.</h4>
        </Col>
        <Col>
          <h3>
            Node.js | Express.js <img src="./images/node.png"></img>
          </h3>
          <h4>
            With the power of Node.JS I lay the foundation for my back-end
            projects.
          </h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>
            {" "}
            Git | GitHub <img src="./images/github.png"></img>
          </h3>
          <h4>
            Use github to share things on the internet then change them. Make
            things better.
          </h4>
        </Col>
        <Col>
          <h3>
            {" "}
            CSS3 <img src="./images/css3.png"></img>
          </h3>
          <h4>When things need to look good I get creative with CSS3.</h4>
        </Col>
        <Col>
          <h3>
            HTML 5 <img src="./images/HTML5.png"></img>
          </h3>
          <h4>Bringing the latest in HTML to build the web of the future.</h4>
        </Col>
      </Row>
    </div>
  );
}

export default Title;
