import "../init";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { App } from "./App";

const AppView = observer(( { app } : { app : App }) => (
  <div>
    {app.seconds}
    <button onClick={app.start}>Start</button>
    <button onClick={app.stop}>Stop</button>
  </div>
));

const app = new App();
window.app = app;

ReactDOM.render(<AppView app={app}/>, document.getElementById("app"));
  