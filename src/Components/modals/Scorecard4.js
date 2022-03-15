import React from "react";
import "./Scorecard.css";

const Scorecard4 = ({ closeModal4 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src="https://live.staticflickr.com/65535/51891596808_4afcb3b5d7_k.jpg" />
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal4(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard4;
