import React, { Component } from "react";

export default class Chrono extends Component {
  constructor() {
    super();

    this.state = { second: 0, minute: 0, hour: 0 };
  }

  componentDidMount = () => {
    console.log("chrono mounted");
    setInterval(() => {
      this.setState({ second: this.state.second + 1 });

      if (this.state.second === 59) {
        this.setState({ second: 0, minute: this.state.minute + 1 });
      }

      if (this.state.minute === 59) {
        this.setState({ minute: 0, hour: this.state.hour + 1 });
      }
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.hour}: {this.state.minute}:{this.state.second}
        </h1>
      </div>
    );
  }
}
