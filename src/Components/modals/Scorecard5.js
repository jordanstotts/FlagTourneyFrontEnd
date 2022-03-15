import React from "react";
import "./Scorecard.css";

const Scorecard5 = ({ closeModal5 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src="https://live.staticflickr.com/65535/51891596008_cdd18f08e3_c.jpg" />
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal5(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard5;
