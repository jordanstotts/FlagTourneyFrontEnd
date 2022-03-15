import React from "react";
import "./Scorecard.css";

const Scorecard8 = ({ closeModal8 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src="https://live.staticflickr.com/65535/51891505986_d989d1c825_c.jpg" />
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal8(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard8;
