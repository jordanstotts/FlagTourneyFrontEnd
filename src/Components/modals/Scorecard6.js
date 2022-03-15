import React from "react";
import "./Scorecard.css";

const Scorecard6 = ({ closeModal6 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src="https://live.staticflickr.com/65535/51891845359_83dbe430ed_b.jpg" />
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal6(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard6;
