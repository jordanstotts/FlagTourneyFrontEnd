import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="prediction-nav">
      <p className="insight-subhead">
        Let us know where you think everyone places!
      </p>
      <Link className="prediction-link" to="/create">
        Make Prediction
      </Link>
    </div>
  );
}
