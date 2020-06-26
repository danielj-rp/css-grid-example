import React from "react";
import "./ExampleSix.scss";
import ExampleArea from "../../ExampleArea/ExampleArea";
import ExampleHeader from "../../ExampleHeader/ExampleHeader";

const ExampleSix = () => {
  return (
    <>
      <ExampleHeader
        title={"Przeglad wlasciwosci kontenera"}
        description={""}
      />
      <ExampleArea>
        <div className="container-6"></div>
      </ExampleArea>
    </>
  );
};

export default ExampleSix;
