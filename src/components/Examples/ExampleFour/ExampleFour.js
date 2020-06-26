import React from "react";
import "./ExampleFour.scss";
import ExampleArea from "../../ExampleArea/ExampleArea";
import ExampleHeader from "../../ExampleHeader/ExampleHeader";

const ExampleFour = () => {
  return (
    <>
      <ExampleHeader title={"Wymuszenie struktury siatki"} description={""} />
      <ExampleArea>
        <div className="container-4">
          <div className="e1"></div>
        </div>
      </ExampleArea>
    </>
  );
};

export default ExampleFour;
