import React from "react";
import "./Scorecard.css";

const Scorecard2 = ({ closeModal2 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src="https://live.staticflickr.com/65535/51891508146_ab22b14991_c.jpg" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal2(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard2;
