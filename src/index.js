import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import "./assets/css/style.css";

ReactDOM.hydrate(<App />, document.getElementById("mountNode"));
