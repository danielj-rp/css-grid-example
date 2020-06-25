import React from "react";
import "./ExampleThree.scss";
import ExampleArea from "../../ExampleArea/ExampleArea";
import ExampleHeader from "../../ExampleHeader/ExampleHeader";

const ExampleThree = () => {
  return (
    <>
      <ExampleHeader title={"ExampleThree"} description={""} />
      <ExampleArea>
        <div className="container"></div>
      </ExampleArea>
    </>
  );
};

export default ExampleThree;
