import {Spin} from "antd";
import React from "react";

function Loaing() {
    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%",
            }}
        >
            <Spin spinning size="large" />
        </div>
    );
}

export default Loaing;
