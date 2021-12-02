import "../init";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import { AppView } from "./Views";
import { autorun } from "mobx";

const app = new App();
window.app = app;

navigate();

window.addEventListener('popstate', function(e) {
  navigate();
});

function navigate() {
  switch (window.location.pathname) {
    case "/foo":
      app.showFoo();
      break;
    case "/bar":
      app.showBar();
      break;
  }
}

autorun(() => {
  if (app.currentPage === app.fooPage && window.location.pathname !== "/foo")
    window.history.pushState({}, "Foo", "/foo")

  if (app.currentPage === app.barPage && window.location.pathname !== "/bar")
    window.history.pushState({}, "Bar", "/bar")
});

ReactDOM.render(<AppView app={app}/>, document.getElementById("app"));
  