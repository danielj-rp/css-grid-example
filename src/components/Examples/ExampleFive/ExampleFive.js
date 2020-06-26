import React from "react";
import "./ExampleFive.scss";
import ExampleArea from "../../ExampleArea/ExampleArea";
import ExampleHeader from "../../ExampleHeader/ExampleHeader";

const ExampleFive = () => {
  return (
    <>
      <ExampleHeader title={"Nazywanie obszarow"} description={""} />
      <ExampleArea>
        <div className="container-5">
          <header className="header"></header>
          <navigator className="navgation"></navigator>
          <main class="main"></main>
          <aside className="aside"></aside>
          <footer className="footer"></footer>
        </div>
      </ExampleArea>
    </>
  );
};

export default ExampleFive;
