import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import FriendCard from "../FriendCard";
import friends from "../../friends.json";
import Contact from "../Contact";
import About from "../About";
import "./style.css";
import Title from "../Title";
class Body extends Component {
  state = {
    friends
  };
  render() {
    return (
      <Container>
        <section className="about">
          <Row>
            <h1 className="heading"> About me</h1>
            <About />
          </Row>
        </section>
        <section className="experties">
          <Row>
            <h1 className="heading">My Expertise</h1>
            <Title />
          </Row>
        </section>
        <Row>
          <h1 className="portfoio"> My Creations </h1>
        </Row>
        <Row>
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              Technologies={friend.Technologies}
              demo={friend.demo}
              github={friend.github}
              logo={friend.logo}
            />
          ))}
        </Row>
        <Row>
          <h1 className="portfoio">Contact</h1>
        </Row>
        <Row>
          <Contact />
        </Row>
      </Container>
    );
  }
}

export default Body;
