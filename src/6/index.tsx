import "../init";
import * as React from "react";
import { InputHTMLAttributes } from "react";
import * as ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { makeObservable, observable } from "mobx";
import { int, isInt, toInt } from "./int";
import { IProperty, property } from "./Property";

export class App {
  @observable
  name = "";

  @observable
  count : int = toInt(0);

  constructor() {
    makeObservable(this);
  }
}

const AppView = observer(( { app } : { app : App }) => {
  const n : number = 123;
  if (isInt(n)) {
    const i: int = n;
  }
  
  return (
    <div>
      <TextInput bindTo={property(app, 'name')} />
      <NumberInput bindTo={property(app, 'count')} />
      <input value={app.count} onChange={e => app.count = parseInt(e.target.value)}/>
    </div>
  );
});

export const TextInput = observer((props : InputHTMLAttributes<HTMLInputElement> & { bindTo : IProperty<string> }) => {
  const { bindTo, value, onChange, ...rest } = props;
  return <input {...rest} value={value ?? bindTo?.get()} onChange={e => {
    onChange?.(e);
    bindTo && bindTo.set(e.target.value);
  }}/>;
})

export const NumberInput = observer((props : InputHTMLAttributes<HTMLInputElement> & { bindTo : IProperty<number> }) => {
  const { bindTo, value, onChange, ...rest } = props;
  return <input {...rest} value={value ?? bindTo?.get()} onChange={e => {
    onChange?.(e);
    bindTo && bindTo.set(Number(e.target.value));
  }}/>;
})

export const IntInput = observer((props : InputHTMLAttributes<HTMLInputElement> & { bindTo : IProperty<int> }) => {
  const { bindTo, value, onChange, ...rest } = props;
  return <input {...rest} value={value ?? bindTo?.get()} onChange={e => {
    onChange?.(e);
    bindTo && bindTo.set(parseInt(e.target.value));
  }}/>;
})

const app = new App();
window.app = app;

ReactDOM.render(<AppView app={app}/>, document.getElementById("app"));
  