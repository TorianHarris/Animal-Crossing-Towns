import React from "react";
import NameGenerator from "./components/NameGenerator";

const style = {
  title: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: "green",
    color: "white",
    fontSize: 32
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
      <NameGenerator />
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
