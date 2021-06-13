import { hot } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import "Assets/styles/main.scss";
import Routes from "./Routes";

const App = () => <Routes />;

ReactDOM.render(<App />, document.getElementById("app"));
