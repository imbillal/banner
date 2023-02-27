import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {ConfigProvider} from "antd";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                components: {
                    Collapse: {
                        padding: 4,
                        paddingSM: 4,
                    },
                    Slider: {
                        colorPrimaryBorder: "#722ed1",
                    },
                },
                token: {
                    colorPrimary: "#722ed1",
                },
            }}
        >
            <App />
        </ConfigProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
