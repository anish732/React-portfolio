import React from "react";
import { Col, Row } from "reactstrap";

import "./style.css";

function Title() {
  return (
    <div>
      <h3>Below is a list of some of the technologies I'm familiar with.</h3>

      <Row>
        <Col>
          <h3>React</h3>
          <h4>I love building applications in React.</h4>
        </Col>
        <Col>
          <h3>MongoDB | MySQL</h3>
          <h4> I can handle data with Mongo or MySQL.</h4>
        </Col>
        <Col>
          <h3>Node.js | Express.js</h3>
          <h4>
            With the power of Node.JS + I lay the foundation for my back-end
            projects.
          </h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3> Git | GitHub </h3>
          <h4>
            Use github to share things on the internet then change them. Make
            things better.
          </h4>
        </Col>
        <Col>
          <h3> CSS3</h3>
          <h4>When things need to look good I get creative with CSS3.</h4>
        </Col>
        <Col>
          <h3>HTML 5</h3>
          <h4>Bringing the latest in HTML to build the web of the future.</h4>
        </Col>
      </Row>
    </div>
  );
}

export default Title;
