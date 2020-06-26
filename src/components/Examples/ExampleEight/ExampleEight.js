import React from "react";
import "./ExampleEight.scss";
import ExampleArea from "../../ExampleArea/ExampleArea";
import ExampleHeader from "../../ExampleHeader/ExampleHeader";

const ExampleEight = () => {
  return (
    <>
      <ExampleHeader title={"Przeglad dzialania funkcji"} description={""} />
      <ExampleArea>
        <div className="container-8">
          <div className="item1Example8">1</div>
          <div className="item2Example8">2</div>
          <div className="item3Example8">3</div>
        </div>
      </ExampleArea>
    </>
  );
};

export default ExampleEight;
