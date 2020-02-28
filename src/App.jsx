import React, { Component } from "react";
import names from "./Names";

const style = {
  header: {
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: "#ff8a80",
    color: "white",
    fontSize: 'calc(15px + (32 - 15) * ((100vw - 300px) / (1600 - 300)))',
    fontFamily: '"Rockwell", "Roboto Slab", serif'
  },
  headerBorder: {
    height: 6,
    backgroundColor: '#c85a54',
    marginBottom: 20,
  },
  generatedName: {
    marginBottom: 20,
    fontSize: 48,
    color: 'white'
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
        <p style={style.header}>Animal Crossing Town Name Generator</p>
        <div style={style.headerBorder}/>
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
