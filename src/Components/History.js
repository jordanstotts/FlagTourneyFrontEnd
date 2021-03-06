import React from "react";
import SiteNavBar from "./SiteNavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const History = () => {
  return (
    <div>
      <SiteNavBar />
      <div className="history-layout">
        <h1 className="history-header">History</h1>
        <div className="history-content">
          <p>
            The “Where's My Ball?" Tournament started in the summer of 2013
            after our freshmen year of college. We came up with the idea of
            having a traveling trophy go to the loser of an annual golf
            tournament. Thus the pink, I SUCK AT GOLF, flag was born. The flag
            is presented each year to the person with the worst score after 18
            holes of golf. The flag is then flown with pride for one year for
            all the world to see.
          </p>
          <br />
          <p>
            In 2018 we decided it was time to introduce a new trophy for those
            that suck at golf a little less than everyone else during the
            tournament. To go along with bragging rights for the entire year,
            the highly coveted boot trophy was created and is presented to the
            player that shoots the best score during the round. The boot trophy
            is a 2 liter glass boot that can be filled with whatever drink the
            champions heart desires. The boot was inspired by the Des Moines
            bar/restaurant Hessen Haus which has a similar boot called 'Das
            Boot' and is usually filled with the finest hefeweizen beer Iowa has
            to offer.
          </p>
          <br />

          <p>
            Starting in 2022, a new rule was introduced to include the golf God
            himself. The one and only, Mr. Austin Howe. Now in order to win the
            boot your handicap will come in to play. Our most recent handicaps
            will be taken from The Grint app the day of the tournament and will
            be used to determine the winner of what some say is one of the most
            sought after trophies in golf. Austin has joined us in years past
            but does in fact not suck at golf ever, so this rule allows for a much
            more competitive playing field (even though he will still probably win).
            Handicapped scores will not be used for the flag...if you suck, you
            suck.
          </p>
        </div>
        <img
          className="history-flag-logo"
          src="https://live.staticflickr.com/65535/51940837073_328437f02a_m.jpg"
          alt="flag_logo"
        />
      </div>
    </div>
  );
};

export default History;
