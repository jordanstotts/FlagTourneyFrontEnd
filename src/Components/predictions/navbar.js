import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { Link, NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div className="prediction-nav">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/InsightToNextYear">
       <img className="prediction-nav-logo" style={{"width" : 25 + '%'}} src="https://live.staticflickr.com/65535/51906509736_1f30d6643b_m.jpg"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="prediction-nav-link" to="/create">
               Create Prediction
             </NavLink>
           </li>
         </ul>
       </div>
     </nav> */}
      <p className="insight-subhead">Let us know where you think everyone places!</p>
      <Link className="prediction-link" to="/create">
        Make Prediction
      </Link>
    </div>
  );
}