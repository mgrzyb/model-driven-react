import { makeObservable, observable } from "mobx";
import { command } from "../Command";

export class App {
  @observable
  private _seconds = 0;
  get seconds() {
    return this._seconds;
  }

  @observable
  private timer: number | undefined;

  constructor() {
    makeObservable(this);
  }

  readonly start = command(
    () => {
      this._seconds = 0;
      this.timer = window.setInterval(() => this._seconds++, 1000);
    },
    () => !this.timer)

  readonly stop = command(
    () => {
      window.clearInterval(this.timer);
      this.timer = undefined;
    },
    () => !!this.timer);
}
