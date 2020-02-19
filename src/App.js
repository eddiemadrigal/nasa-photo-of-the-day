import React from "react";
import Title from "./components/Title";
import Pictures from "./components/Pictures";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title title={"NASA's Planet of the Day"}/>
      <Pictures />
    </div>
  );
}

export default App;
