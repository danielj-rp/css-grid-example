import React from "react";
import "./ExampleHeader.scss";

const ExampleHeader = ({ title, description }) => {
  return (
    <>
      <h1 className="example-header">{title}</h1>
      {description && <p className="example-description">{description}</p>}
    </>
  );
};

export default ExampleHeader;
