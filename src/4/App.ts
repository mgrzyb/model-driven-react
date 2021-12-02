import { action, makeObservable, observable } from "mobx";

export class App {
  @observable
  private _currentPage : any;
  get currentPage() {
    return this._currentPage;
  }
  
  readonly fooPage = new FooPage();
  readonly barPage = new BarPage();
  
  constructor() {
    makeObservable(this);
    this.showFoo();
  }
  
  showFoo = () => {
    this._currentPage = this.fooPage;
  }

  showBar = () => {
    this._currentPage = this.barPage;
  }
}

export class FooPage {
  
  @observable
  private _foo = ""
  get foo() {
    return this._foo;
  }
  
  constructor() {
    makeObservable(this);
    setInterval(() => this._foo = this.foo + "Foo", 5000);
  }
}

export class BarPage {
  
}