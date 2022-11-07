import React from "react";
import "../App.css";

const Child = (props) => {
  console.log("props :>> ", props);
  return (
    <>
      <h1 className="text-center">{props.num}</h1>
    </>
  );
};

export default Child;
