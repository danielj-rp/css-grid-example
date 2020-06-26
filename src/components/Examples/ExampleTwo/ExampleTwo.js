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
        <div className="container-2">
          <div className="e1"></div>
        </div>
      </ExampleArea>
    </>
  );
};

export default ExampleTwo;
