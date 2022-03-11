import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="home-layout">
      <div>
        <Navbar color="faded" light>
          <NavbarToggler className="me-2" onClick={() => setIsOpen(true)} />
          {/* <NavbarToggler className="me-2" onClick={() => setIsOpen(!isOpen)} /> */}

          <NavbarBrand className="me-auto" href="/">
            <div className="home-header">
              The Annual "Where's My Ball?" Tournament
            </div>
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
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
          </Collapse>
        </Navbar>
      </div>
      <img
        className="home-flag-logo"
        src="https://live.staticflickr.com/65535/51906509736_1f30d6643b_m.jpg"
        alt="flag_logo"
      />
      <p className="home-flag-quote">
        It's not about winning the tournament, it's about making sure you don't
        lose
      </p>
    </div>
  );
};

export default HomeNavigation;
