import "../init";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import { AppView } from "./AppView";

const app = new App();
window.app = app;

ReactDOM.render(<AppView app={app}/>, document.getElementById("app"));
  