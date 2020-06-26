import React from "react";
import "./ExampleEight.scss";
import ExampleArea from "../../ExampleArea/ExampleArea";
import ExampleHeader from "../../ExampleHeader/ExampleHeader";

const ExampleEight = () => {
  return (
    <>
      <ExampleHeader title={"Przeglad dzialania funkcji"} description={""} />
      <ExampleArea>
        <div className="container-8"></div>
      </ExampleArea>
    </>
  );
};

export default ExampleEight;
