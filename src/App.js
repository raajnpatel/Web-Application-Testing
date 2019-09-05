
import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

function App() {
  const [strike, setStrike] = useState(0);
  const [balls, setBalls] = useState(0);
  const [score, setScore] = useState(0);

  const actions = {
    StrikeUp: () => {
      if (strike < 2) {
        return setStrike(strike + 1);
      } else {
        return setStrike(0), setBalls(0);
      }
    },
    BallsUp: () => {
      if (balls < 3) {
        return setBalls(balls + 1);
      } else {
        return setStrike(0), setBalls(0);
      }
    }
  };

  return (
      <div className="App">
        <h1>Play the game</h1>
        <Dashboard play={actions} />
        <Display strike={strike} balls={balls} />
      </div>
  );
}

export default App;