import React from "react";
import "./Scorecard.css";

const Scorecard9 = ({ closeModal9 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src="https://live.staticflickr.com/65535/51891595598_e00abe8d15_c.jpg" />
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal9(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard9;
