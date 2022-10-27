import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./component1";
//import Component2 from "app2/Component2";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Component1></Component1>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
