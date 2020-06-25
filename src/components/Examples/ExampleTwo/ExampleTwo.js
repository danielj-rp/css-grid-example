import React from "react";
import "./ExampleTwo.scss";
import ExampleArea from "../../ExampleArea/ExampleArea";
import ExampleHeader from "../../ExampleHeader/ExampleHeader";

const ExampleTwo = () => {
  return (
    <>
      <ExampleHeader title={"ExampleTwo"} description={""} />
      <ExampleArea>
        <div className="container"></div>
      </ExampleArea>
    </>
  );
};

export default ExampleTwo;
