import React from "react";
import ReactDOM from "react-dom";

import StarGame from "./components/StarGame";

ReactDOM.hydrate(<StarGame />, document.getElementById("mountNode"));
