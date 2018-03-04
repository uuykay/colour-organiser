import React, { Component } from "react";
import "./App.css";
import StarRating from "../StarRating/StarRating";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
  }

  render() {
    const { colors } = this.state;
    return (
      <div className="App">
        <AddColorForm />
        <ColorList colors={colors} />
      </div>
    );
  }
}

export default App;
