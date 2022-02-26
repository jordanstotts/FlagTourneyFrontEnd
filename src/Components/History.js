import React from "react";

const History = () => {
  return (
    <div className="history-layout">
      <h1>History</h1>
      <div className="history-content">
        <p >
          The “Where's My Ball Tournament” started in the summer of 2013 after
          our freshmen year of college. We were at Maddie Clough's house
          (Derrick's old slam piece) and brilliantly came up with the idea of
          having a traveling trophy go to the loser of an annual golf
          tournament. Thus the pink, I SUCK AT GOLF, flag was born. The flag is
          presented each year to the person with the worst score after 18 holes
          of golf. The flag is then flown with pride for one year for all the
          world to see.
        </p>
      </div>
      <p className="flag-quote">
        It's not about winning the tournament, it's about making sure you don't
        lose
      </p>
      <img className="history-flag-logo"
        src="https://live.staticflickr.com/65535/51892917062_2d52b126c5_m.jpg"
        alt="flag_logo"
      />
    </div>
  );
};

export default History;
