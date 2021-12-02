import "../init";
import { action, makeObservable, observable } from "mobx";

class App1 {
  private _seconds = 0;
  get seconds() {
    return this._seconds;
  }
  
  private timer : number | undefined;

  start() {
    if (this.timer)
      throw Error("Already started");
    this._seconds = 0;
    this.timer = window.setInterval(() => this._seconds++, 1000);
  }

  stop() {
    if (!this.timer)
      throw Error("Not started yet");
    window.clearInterval(this.timer);
    this.timer = undefined;
  }
}

const app = new App1();
window.app = app;