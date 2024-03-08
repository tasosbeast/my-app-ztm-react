import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import "./App.css";
import mrRobotImage from "./mr-robot.png";
import Scroll from "../components/scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    this.setState({ robots: robots });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <>
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <img src={mrRobotImage} alt="mr robot" width="500" height="300" />
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <CardList robots={filteredRobots} />;
        </Scroll>
      </>
    );
  }
}

export default App;
