import React from "react";

const style = {
  title: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: "green",
    color: "white",
    fontSize: 32
  },
  generatedName: {
    marginBottom: 20,
    fontSize: 48
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

function App() {
  return (
    <>
      <p style={style.title}>Animal Crossing Town Name Generator</p>
      <p style={style.generatedName}>Town Name</p>
      <button style={style.button}>Get a new name!</button>
      <p style={style.previousNameHeader}> Previous Names </p>
      <div style={style.previousNames}>
        <p>name1</p>
        <p>name2</p>
        <p>name3</p>
      </div>
    </>
  );
}

export default App;
