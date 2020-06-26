import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Main.scss";
import Start from "./../Start/Start";
import ExampleOne from "../Examples/ExampleOne/ExampleOne";
import ExampleTwo from "../Examples/ExampleTwo/ExampleTwo";
import ExampleThree from "../Examples/ExampleThree/ExampleThree";
import ExampleFour from "../Examples/ExampleFour/ExampleFour";
import ExampleFive from "../Examples/ExampleFive/ExampleFive";
import ExampleSix from "../Examples/ExampleSix/ExampleSix";
import ExampleSeven from "../Examples/ExampleSeven/ExampleSeven";
import ExampleEight from "../Examples/ExampleEight/ExampleEight";

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
      <Switch>
        <Route exact path="/example_6" component={ExampleSix} />
      </Switch>
      {/* <Switch>
        <Route exact path="/example_7" component={ExampleSeven} />
      </Switch>
      <Switch>
        <Route exact path="/example_8" component={ExampleEight} />
      </Switch> */}
    </main>
  );
};

export default Main;
