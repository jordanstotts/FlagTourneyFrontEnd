import React from "react";
import "./Scorecard.css"

const Scorecard9 = ({ closeModal9 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal9(false)}> X </button>
        </div>
        <div className="title">
          <h1>Are you sure you want to continue</h1>
        </div>
        <div className="body">
          <img src="" />
          <p>scorecard 9</p>
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal9(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard9;