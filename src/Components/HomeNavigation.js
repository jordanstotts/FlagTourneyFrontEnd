import React from "react";
import { Nav, NavLink } from "reactstrap";

const HomeNavigation = () => {
  return (
    <div>
      <Nav vertical>
        <div>
          <NavLink active href={ '/PlayerBios' } >Player Bios</NavLink>
        </div>
        <div>
          <NavLink active href={ '/FlagRecipients' }>Flag Recipients</NavLink>
        </div>
        <div>
          <NavLink active href={ '/BootRecipients' }>Boot Recipients</NavLink>
        </div>
        <div>
          <NavLink active href={ '/InsightToNextYear' }>Insight To Next Year</NavLink>
        </div>
        <div>
          <NavLink active href={ '/History' }>History</NavLink>
        </div>
        <div>
          <NavLink active href={ '/Rules' }>Rules</NavLink>
        </div>
      </Nav>
    </div>
  );
};

export default HomeNavigation;
