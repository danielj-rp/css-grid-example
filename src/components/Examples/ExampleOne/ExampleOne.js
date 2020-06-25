import React from "react";
import "./ExampleOne.scss";
import ExampleArea from "../../ExampleArea/ExampleArea";
import ExampleHeader from "../../ExampleHeader/ExampleHeader";

const ExampleOne = () => {
  return (
    <>
      <ExampleHeader title={"Example 1"} description={"description"} />
      <ExampleArea>
        <h1>example</h1>
      </ExampleArea>
    </>
  );
};

export default ExampleOne;
