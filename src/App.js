import React, { Component } from "react";
import Compteur from "./components/Compteur";
import Chrono from "./components/Chrono";

export default class App extends Component {
  constructor() {
    super();
    this.state = { show: true };
  }

  terminate = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>WorkshopState</h1>
        {this.state.show ? <Compteur /> : <Chrono />}

        <button onClick={this.terminate}>show compteur</button>
      </div>
    );
  }
}
