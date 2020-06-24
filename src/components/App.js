import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Navigation />
        <Main />
      </div>
    </Router>
  );
};

export default App;
