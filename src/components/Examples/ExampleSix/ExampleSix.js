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
        <div className="container-6">
          <div className="item1">1</div>
          <div className="item2">2</div>
          <div className="item3">3</div>
          {/* <div className="item4">3</div>
          <div className="item4">3</div>
          <div className="item4">3</div>
          <div className="item4">3</div>
          <div className="item4">3</div>
          <div className="item4">3</div>
          <div className="item4">3</div>
          <div className="item4">3</div> */}
        </div>
      </ExampleArea>
    </>
  );
};

export default ExampleSix;
