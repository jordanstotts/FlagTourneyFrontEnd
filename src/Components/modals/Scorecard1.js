import React from "react";
import "./Scorecard.css";

const Scorecard1 = ({ closeModal1 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="body">
          <img src="https://live.staticflickr.com/65535/51892164010_9823c5b395_c.jpg" />
          <div className="footer">
            <button className="cancelBtn" onClick={() => closeModal1(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard1;
