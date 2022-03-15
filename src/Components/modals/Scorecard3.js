import React from "react";
import "./Scorecard.css";

const Scorecard3 = ({ closeModal3 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src="https://live.staticflickr.com/65535/51891846454_c775f1d638_k.jpg" />
        </div>
        <div className="footer">
          <button className="cancelBtn" onClick={() => closeModal3(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard3;
