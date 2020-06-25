import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Main.scss";
import Start from "./../Start/Start";
import ExampleOne from "../Examples/ExampleOne/ExampleOne";

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Start} />
      </Switch>
      <Switch>
        <Route exact path="/example_1" component={ExampleOne} />
      </Switch>
      <Switch>
        <Route exact path="/example_2" component={ExampleOne} />
      </Switch>
      <Switch>
        <Route exact path="/example_3" component={ExampleOne} />
      </Switch>
    </main>
  );
};

export default Main;
