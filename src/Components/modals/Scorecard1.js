import React from "react";
import "./Scorecard.css"

const Scorecard1 = ({ closeModal1 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal1(false)}> X </button>
        </div>
        <div className="title">
          <h1>Are you sure you want to continue</h1>
        </div>
        <div className="body">
          <img src="" />
          <p>scorecard 1</p>
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal1(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard1;
