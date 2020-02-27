import React, { Component } from "react";
import names from "./Names";

const style = {
  title: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: "green",
    color: "white",
    fontSize: 32,
    fontFamily: '"Rockwell", "Roboto Slab", serif'
  },
  generatedName: {
    marginBottom: 20,
    fontSize: 48,
    color: "red"
  },
  button: {
    marginBottom: 30
  },
  previousNameHeader: {
    color: "grey",
    textDecoration: "underline"
  },
  previousNames: {
    color: "grey"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: "",
      previousNames: []
    };
  }

  render() {
    const getRandName = () => {
      const randName = names[Math.floor(Math.random() * names.length)].name;
      const prevNames = this.state.previousNames;
      if (this.state.currentName !== "") {
        if (prevNames.length >= 3) prevNames.pop();
        prevNames.unshift(this.state.currentName);
      }
      this.setState({ currentName: randName, previousNames: prevNames });
    };
    return (
      <>
        <p style={style.title}>Animal Crossing Town Name Generator</p>
        <p style={style.generatedName}>{this.state.currentName}</p>
        <button onClick={getRandName} style={style.button}>
          Get a new name!
        </button>
        <p style={style.previousNameHeader}> Previous Names </p>
        <div style={style.previousNames}>
          {this.state.previousNames.map((names, i) => (
            <p key={i}>{names}</p>
          ))}
        </div>
      </>
    );
  }
}

export default App;
