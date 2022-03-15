import React from "react";
import "./Scorecard.css";

const Scorecard7 = ({ closeModal7 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src="https://live.staticflickr.com/65535/51891845154_968ed4b7fb_z.jpg" />
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal7(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard7;
