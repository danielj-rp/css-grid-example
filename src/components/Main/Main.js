import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Main.scss";
import Start from "./../Start/Start";
import ExampleOne from "../Examples/ExampleOne/ExampleOne";
import ExampleTwo from "../Examples/ExampleTwo/ExampleTwo";
import ExampleThree from "../Examples/ExampleThree/ExampleThree";
import ExampleFour from "../Examples/ExampleFour/ExampleFour";
import ExampleFive from "../Examples/ExampleFive/ExampleFive";

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
        <Route exact path="/example_2" component={ExampleTwo} />
      </Switch>
      <Switch>
        <Route exact path="/example_3" component={ExampleThree} />
      </Switch>
      <Switch>
        <Route exact path="/example_4" component={ExampleFour} />
      </Switch>
      <Switch>
        <Route exact path="/example_5" component={ExampleFive} />
      </Switch>
    </main>
  );
};

export default Main;
