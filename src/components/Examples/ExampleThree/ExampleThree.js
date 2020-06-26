import React from "react";
import "./ExampleThree.scss";
import ExampleArea from "../../ExampleArea/ExampleArea";
import ExampleHeader from "../../ExampleHeader/ExampleHeader";

const ExampleThree = () => {
  return (
    <>
      <ExampleHeader
        title={"Niejawne deklarowanie struktury siatki"}
        description={""}
      />
      <ExampleArea>
        <div className="container-3">
          {/*Niejawne zadeklarowanie struktury siatki */}
          <div className="e1"></div>
          <div className="e2"></div>
          <div className="e3"></div>
          <div className="e4"></div>
        </div>
      </ExampleArea>
    </>
  );
};

export default ExampleThree;
