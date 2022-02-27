import React from "react";
import { Nav, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SiteNavBar = () => {
  return (
    <div className="site-nave-layout">
      <Nav>
        <div>
          <NavLink active href={"/"}>
            <img
              src="https://live.staticflickr.com/65535/51892917062_2d52b126c5_m.jpg"
              className="flag-icon"
            />
          </NavLink>
        </div>
        <div>
          <NavLink active href={"/PlayerBios"}>
            Player Bios
          </NavLink>
        </div>
        <div>
          <NavLink active href={"/FlagRecipients"}>
            Flag Recipients
          </NavLink>
        </div>
        <div>
          <NavLink active href={"/BootRecipients"}>
            Boot Recipients
          </NavLink>
        </div>
        <div>
          <NavLink active href={"/InsightToNextYear"}>
            Insight To Next Year
          </NavLink>
        </div>
        <div>
          <NavLink active href={"/History"}>
            History
          </NavLink>
        </div>
        <div>
          <NavLink active href={"/Rules"}>
            Rules
          </NavLink>
        </div>
      </Nav>
    </div>
  );
};

export default SiteNavBar;
