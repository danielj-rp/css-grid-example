import React from "react";
import "./ExampleSeven.scss";
import ExampleArea from "../../ExampleArea/ExampleArea";
import ExampleHeader from "../../ExampleHeader/ExampleHeader";

const ExampleSeven = () => {
  return (
    <>
      <ExampleHeader
        title={"Przeglad wlasciwosci elementu siatki"}
        description={""}
      />
      <ExampleArea>
        <div className="container-7">
          <div className="e7Item1">1</div>
          {/* <div className="e7Item2">2</div> */}
        </div>
      </ExampleArea>
    </>
  );
};

export default ExampleSeven;
