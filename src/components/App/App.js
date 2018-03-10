import React, { Component } from "react";
import "./App.css";
import { v4 } from "uuid";
import ColorList from "../ColorList/ColorList";
import AddColorForm from "../AddColorForm/AddColorForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ];
    this.setState({ colors });
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(
      color =>
        color.id !== id
          ? color
          : {
              ...color,
              rating
            }
    );
    this.setState({ colors });
  }

  removeColor(id) {
    // filter is returning anything not equal to the id that is intended to be deleted
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({ colors });
  }

  render() {
    const { addColor } = this;
    const { colors } = this.state;
    return (
      <div className="App">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors} />
      </div>
    );
  }
}

export default App;
