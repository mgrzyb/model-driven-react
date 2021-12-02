import { App, BarPage, FooPage } from "./App";
import { observer } from "mobx-react";
import * as React from "react";

const ContentView = (props: { content: any }) => {
  if (!props.content)
    return <></>;
  if (props.content instanceof FooPage) return <FooPageView page={props.content}/>
  if (props.content instanceof BarPage) return <BarPageView page={props.content}/>
  return <>Cannot render view for content of type {props.content.constructor.name}</>
};

export const AppView = observer(( { app } : { app : App }) => (
  <div>
    My React App
    <div>
      <button onClick={app.showFoo}>Foo</button>
      <button onClick={app.showBar}>Bar</button>
    </div>
    <ContentView content={app.currentPage}/>
  </div>
));

const FooPageView = observer(( { page } : { page : FooPage }) => (
  <div>
    Foo: {page.foo}
  </div>
));

const BarPageView = observer(( { page } : { page : BarPage }) => (
  <div>
    Only one Bar
  </div>
));