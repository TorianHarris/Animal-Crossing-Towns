import React, { Component } from "react";

const style = {
  generatedName: {
    marginBottom: 20,
    fontSize: 48,
    color: 'red'
  },
  button: {
    marginBottom: 30
  }
};

export default class NameGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: ' '
    };
  }

  render() {
    return (
      <>
  <p style={style.generatedName}>{this.state.currentName}</p>
        <button style={style.button}>Get a new name!</button>
      </>
    );
  }
}
