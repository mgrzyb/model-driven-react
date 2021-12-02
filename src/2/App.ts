import { makeObservable, observable } from "mobx";

export class App {
  @observable
  private _seconds = 0;
  get seconds() {
    return this._seconds;
  }

  private timer : number | undefined;

  constructor() {
    makeObservable(this);
  }

  start = () => {
    if (this.timer)
      throw Error("Already started");
    this._seconds = 0;
    this.timer = window.setInterval(() => this._seconds++, 1000);
  }

  stop = () => {
    if (!this.timer)
      throw Error("Not started yet");
    window.clearInterval(this.timer);
    this.timer = undefined;
  }
}
