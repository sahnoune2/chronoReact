import React, { Component } from "react";

export default class Compteur extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  componentDidMount = () => {
    console.log("compteur mount");
  };

  componentDidUpdate = () => {
    console.log("compteur updated");
  };
  componentWillUnmount = () => {
    console.log("compteur unmouted");
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div
        id="count"
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid red",
          width: "40%",
          textAlign: "center",
        }}
      >
        <h1>{this.state.count}</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <button
            onClick={this.increment}
            style={{ width: "10%", backgroundColor: "green" }}
          >
            +
          </button>
          <button
            onClick={this.decrement}
            style={{ width: "10%", backgroundColor: "red" }}
          >
            -
          </button>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    );
  }
}
