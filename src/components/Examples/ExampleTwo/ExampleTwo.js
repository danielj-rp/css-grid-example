import React from "react";
import "./ExampleTwo.scss";
import ExampleArea from "../../ExampleArea/ExampleArea";
import ExampleHeader from "../../ExampleHeader/ExampleHeader";

const ExampleTwo = () => {
  return (
    <>
      <ExampleHeader
        title={"Jawne deklarowanie struktury siatki"}
        description={""}
      />
      <ExampleArea>
        {/* <div className="container-2">
          <div className="e1"></div>
        </div> */}
        <div className="container-2">
          <div className="e1">1</div>
          <div className="e2">2</div>
          <div className="e3">3</div>
          <div className="e4">4</div>
          <div className="e5">5</div>
          <div className="e6">6</div>
        </div>
      </ExampleArea>
    </>
  );
};

export default ExampleTwo;
