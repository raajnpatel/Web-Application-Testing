import React, { useState } from "react";
import Display from "./Display";

const Dashboard = () => {
    const [strike, setStrike] = useState(0);
    const [balls, setBalls] = useState(0);

    function strikeScore() {
        return setStrike(strike + 1);
    }
    function ballScore() {
        return setBalls(balls + 1);
    }

    return (
        <div>
            Add some buttons
            <Display />
            <button onClick={strikeScore}>STRIKE</button>
            <button onClick={ballScore}>BALL</button>
        </div>
    );
};

export default Dashboard;