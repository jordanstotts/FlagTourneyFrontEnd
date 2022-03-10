import React from "react";
import "./Scorecard.css"

const Scorecards = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Are you sure you want to continue</h1>
        </div>
        <div className="body">
          <p>The next page is awesome</p>
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Scorecards;
