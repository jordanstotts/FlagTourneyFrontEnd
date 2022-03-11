import React from "react";
import { Card, CardGroup, CardImg, CardBody, CardTitle, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteNavBar from "./SiteNavBar";
import Comments from "../Commenting/comments";

const bootwinners = [
  {
    name: "Grant Luther",
    course: "Tournament Club of Iowa",
    year: 2018,
    bootpic: "https://live.staticflickr.com/65535/51894014938_7478675505_m.jpg",
  },
  {
    name: "Grant Luther",
    course: "Amana Colonies Golf Club",
    year: 2019,
    bootpic: "https://live.staticflickr.com/65535/51894014918_00e756df0d_m.jpg",
  },
  {
    name: "Grant Luther",
    course: "Whitebirch at Breezy Point",
    year: 2020,
    bootpic: "https://live.staticflickr.com/65535/51892968522_06211cb1af_m.jpg",
  },
  {
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
      <h1>Boot Winners</h1>
      <p className="pre-boot">
        *pre boot trophy winners: 2013 - Ryan Biegger | 2014 - Jordan Stotts |
        2015 - Jordan Stotts | 2016 - Ryan Biegger | 2017 - Ryan Biegger
      </p>
      <div className="boot-winner-layout">
        {bootwinners.map((bootwinners) => {
          return (
            <CardGroup width="250px">
              <Card>
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
              <Comments currentUserId="1" />
            </CardGroup>
          );
        })}
      </div>
      {/* <p>*pre boot trophy winners:</p>
      <br />
      <p>2013 - Ryan Biegger</p>
      <p>2014 - Jordan Stotts</p>
      <p>2015 - Jordan Stotts</p>
      <p>2016 - Ryan Biegger</p>
      <p>2017 - Ryan Biegger</p> */}
    </div>
  );
};

export default BootWinners;
