import React from "react";

const Display = (props) => {
    const {strike, balls} = props;
    return (
        <div>
            <h4>Ball Score: {balls}</h4>
            <h4>Strike Score: {strike}</h4>
        </div>
    )
};

export default Display;