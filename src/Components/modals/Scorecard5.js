import React from "react";
import "./Scorecard.css"

const Scorecard5 = ({ closeModal5 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal5(false)}> X </button>
        </div>
        <div className="title">
          <h1>Are you sure you want to continue</h1>
        </div>
        <div className="body">
          <img src="" />
          <p>scorecard 5</p>
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal5(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard5;