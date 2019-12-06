import React, { Component } from "react";

class App extends Component {
  render() {
    const { step } = this.props;

    switch (step) {
      case 1:
        return <h1>Student Schedule</h1>
      case 2:
        return <h1>Staff Schedule</h1>;
      case 3:
        return <h1>Mess Schedule</h1>;
      case 4:
        return <h1>Locations</h1>;
      case 5:
        return <h1>College Info</h1>;
      default:
        return <h1>error</h1>;
    }
  }
}

export default App;
