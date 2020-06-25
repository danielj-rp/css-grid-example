import React from "react";
import "./ExampleOne.scss";
import ExampleArea from "../../ExampleArea/ExampleArea";
import ExampleHeader from "../../ExampleHeader/ExampleHeader";

const ExampleOne = () => {
  return (
    <>
      <ExampleHeader
        title={"Budowa siatki"}
        description={
          "kontener siatki, element siatki, linie siatki, ścieżki (tory), komórka siatki, obszar (powierzchnia) siatki, przerwy w siatce "
        }
      />
      <ExampleArea>
        <div className="container">
          <div className="item-1"></div>
          <div className="item-2"></div>
          <div className="item-3"></div>
        </div>
      </ExampleArea>
    </>
  );
};

export default ExampleOne;
