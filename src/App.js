import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

class App extends Component {
  // Setting this.state.friends to the friends json array

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Body />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
