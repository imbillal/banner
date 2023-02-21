import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Preview from "./Preview";
import reportWebVitals from "./reportWebVitals";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Preview from "./Preview";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
