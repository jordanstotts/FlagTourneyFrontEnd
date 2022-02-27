import React from "react";
import { Card, CardGroup, CardImg, CardBody, CardTitle, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteNavBar from "./SiteNavBar";

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
    <div>
      <SiteNavBar />
      <h1>Boot Winners</h1>
      <div className="boot-winner-layout">
        {bootwinners.map((bootwinners) => {
          return (
            <CardGroup width="250px">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">
                    {bootwinners.name} - {bootwinners.course} -{" "}
                    {bootwinners.year}
                  </CardTitle>
                </CardBody>
                <CardImg alt="boot winner" src={bootwinners.bootpic} />
              </Card>
            </CardGroup>
          );
        })}
      </div>
    </div>
  );
};

export default BootWinners;
