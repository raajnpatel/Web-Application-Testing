import React from "react";

const Dashboard = props => {
    const { BallsUp, StrikeUp } = props.play;

    return (
        <div>
            <button onClick={StrikeUp}>STRIKE</button>
            <button onClick={BallsUp}>BALL</button>
        </div>
    );
};

export default Dashboard;