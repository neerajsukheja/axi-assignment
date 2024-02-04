import React, { useState } from "react";
import "./App.css";

interface State {
  lastClicked?: Date;
  buttonColor: "red" | "blue" | "green";
}

const App: React.FC = () => {
  // State initialization using the useState hook
  const [state, setState] = useState<State>({
    lastClicked: undefined,
    buttonColor: "red",
  });

  // Destructuring state
  const { lastClicked, buttonColor } = state;

  // Event handler for button click
  const onClick = () => {
    setState((prevState) => ({
      ...prevState,
      lastClicked: new Date(),
      buttonColor: getNextButtonColor(prevState.buttonColor),
    }));
  };

  // Function to determine the next button color in the sequence
  const getNextButtonColor = (currentColor: "red" | "blue" | "green"): "red" | "blue" | "green" => {
    switch (currentColor) {
      case "red":
        return "blue";
      case "blue":
        return "green";
      case "green":
        return "red";
      default:
        throw new Error("Invalid color");
    }
  };

  return (
    <div className="app-container">
      <button onClick={onClick} className={`button-${buttonColor}`}>
        Click
      </button>
      <p className="last-clicked">
        Last clicked:{" "}
        {lastClicked !== undefined ? lastClicked.toString() : "Never"}
      </p>
    </div>
  );
};

export default App;
