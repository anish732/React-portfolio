import React from "react";
import "./style.css";
import { Button } from "reactstrap";

function FriendCard(props) {
  return (
    <div className="card" id="portfolio">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <h3>
              {" "}
              <strong> {props.name} :</strong>
            </h3>
          </li>
          <li>{props.occupation}</li>
          <li>
            <strong>Technologies: </strong>
            {props.Technologies}
          </li>
        </ul>
        <Button style={{ backgroundColor: "navy", marginBottom: "0" }}>
          {" "}
          <a href={props.demo}>
            {" "}
            <i
              className="fa fa-desktop hub"
              style={{ color: "white", fontSize: "35px", width: "60px" }}
            ></i>
          </a>
        </Button>
        <Button style={{ backgroundColor: "green" }}>
          {" "}
          <a href={props.github}>
            <i
              className="fa fa-github-square hub"
              style={{ color: "navy", fontSize: "35px", width: "60px" }}
            ></i>
          </a>
        </Button>
        <img src={props.logo}></img>
      </div>
    </div>
  );
}

export default FriendCard;
