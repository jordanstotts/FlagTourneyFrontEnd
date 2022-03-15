import React from "react";
import "./Scorecard.css"

const Scorecard8 = ({ closeModal8 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal8(false)}> X </button>
        </div>
        <div className="title">
          <h1>Are you sure you want to continue</h1>
        </div>
        <div className="body">
          <img src="" />
          <p>scorecard 8</p>
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal8(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard8;