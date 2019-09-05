import React from "react";

const Dashboard = props => {
    const { BallsUp, StrikeUp, Hit, Foul } = props.play;

    return (
        <div>
            <button onClick={StrikeUp}>STRIKE</button>
            <button onClick={BallsUp}>BALL</button>
            <button onClick={Hit}>HIT</button>
            <button onClick={Foul}>FOUL</button>
        </div>
    );
};

export default Dashboard;