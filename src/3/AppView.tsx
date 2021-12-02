import { observer } from "mobx-react";
import * as React from "react";
import { App } from "./App";
import { Button } from "../Button";

export const AppView = observer(({ app } : { app : App }) => (
  <div>
    {app.seconds}
    <Button command={app.start}>Start</Button>
    <Button command={app.stop}>Stop</Button>
  </div>
));
