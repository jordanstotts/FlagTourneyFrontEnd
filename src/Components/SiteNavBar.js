import React from "react";
import { Nav, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SiteNavBar = () => {
  return (
    <div className="site-nav-layout">
      <Nav>
        <div>
          <NavLink active href={"/"}>
            <img
              src="https://live.staticflickr.com/65535/51940837073_328437f02a_m.jpg"
              className="flag-icon"
            />
          </NavLink>
        </div>
        <div>
          <NavLink className="site-nav-link" active href={"/PlayerBios"}>
            Player Bios
          </NavLink>
        </div>
        <div>
          <NavLink className="site-nav-link" active href={"/FlagRecipients"}>
            Flag Recipients
          </NavLink>
        </div>
        <div>
          <NavLink className="site-nav-link" active href={"/BootRecipients"}>
            Boot Recipients
          </NavLink>
        </div>
        <div>
          <NavLink className="site-nav-link" active href={"/InsightToNextYear"}>
            Insight To Next Year
          </NavLink>
        </div>
        <div>
          <NavLink className="site-nav-link" active href={"/History"}>
            History
          </NavLink>
        </div>
        <div>
          <NavLink className="site-nav-link" active href={"/Rules"}>
            Rules
          </NavLink>
        </div>
      </Nav>
    </div>
  );
};

export default SiteNavBar;
