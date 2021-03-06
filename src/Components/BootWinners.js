import React from "react";
import { Card, CardGroup, CardImg, CardBody, CardTitle } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteNavBar from "./SiteNavBar";

const bootwinners = [
  {
    id: 1,
    name: "Grant Luther",
    course: "Tournament Club of Iowa",
    year: 2018,
    bootpic: "https://live.staticflickr.com/65535/51894014938_7478675505_m.jpg",
  },
  {
    id: 2,
    name: "Grant Luther",
    course: "Amana Colonies Golf Club",
    year: 2019,
    bootpic: "https://live.staticflickr.com/65535/51894014918_00e756df0d_m.jpg",
  },
  {
    id: 3,
    name: "Grant Luther",
    course: "Whitebirch at Breezy Point",
    year: 2020,
    bootpic: "https://live.staticflickr.com/65535/51892968522_06211cb1af_m.jpg",
  },
  {
    id: 4,
    name: "Grant Luther",
    course: "Quarry Oaks Golf CLub",
    year: 2021,
    bootpic: "https://live.staticflickr.com/65535/51893926556_50f41c4b58_m.jpg",
  },
];

const BootWinners = () => {
  return (
    <div className="boot-winners">
      <SiteNavBar />
      <h1 className="boot-header">Boot Winners</h1>
      <p className="pre-boot">
        *pre boot trophy winners: 2013 - Ryan Biegger | 2014 - Jordan Stotts |
        2015 - Jordan Stotts | 2016 - Ryan Biegger | 2017 - Ryan Biegger
      </p>
      <div className="boot-winner-layout">
        {bootwinners.map((bootwinners) => {
          return (
            <CardGroup width="250px" key={bootwinners.id}>
              <Card className="boot-winner-card">
                <CardBody>
                  <CardTitle className="boot-winner-title">
                    {bootwinners.name} <br /> {bootwinners.course} <br />
                    {bootwinners.year}
                  </CardTitle>
                </CardBody>
                <CardImg
                  className="boot-winner-pic"
                  alt="boot winner"
                  src={bootwinners.bootpic}
                />
              </Card>
            </CardGroup>
          );
        })}
      </div>
    </div>
  );
};

export default BootWinners;
