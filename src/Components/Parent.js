import React, { useState } from "react";
import { Link } from "react-router-dom";
import Child from "./Child";

const Parent = () => {
  const [num, SetNum] = useState(0);
  const increaseNumber = () => {
    SetNum(num + 1);
  };
  const decreaseNumber = () => {
    if (num > 0) {
      SetNum(num - 1);
    } else {
      alert("you can't go to negative number");
      SetNum(num);
    }
  };
  return (
    <div className="parent">
      <div className="styleParent">
        <Child num={num} />
        <div className="d-flex justify-content-between mx-0">
          <button onClick={increaseNumber} className="btn btn-primary mx-3">
            Increase
          </button>
          <button onClick={decreaseNumber} className="btn btn-primary">
            Decrease
          </button>
        </div>
      </div>
      <Link to="/form" className="my-5">
        <button className="btn btn-primary">Go to Form</button>
      </Link>
    </div>
  );
};

export default Parent;
