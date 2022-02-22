import React from "react";
import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const flagwinners = [
  {
    name: "Grant Luther",
    course: "Toad Valley",
    year: 2013,
    flagpic: "https://live.staticflickr.com/65535/51894015063_ba67d2e28f_m.jpg",
    scorecard:
      "https://live.staticflickr.com/65535/51894015073_5420408774_m.jpg",
  },
  {
    name: "Derrick Wiley",
    course: "The Legacy Golf Club",
    year: 2014,
    flagpic: "https://live.staticflickr.com/65535/51892968652_04513f3d13_m.jpg",
    scorecard:
      "https://live.staticflickr.com/65535/51892968687_2f6039af51_m.jpg",
  },
  {
    name: "Grant Luther",
    course: "Honey Creek Golf Club",
    year: 2015,
    flagpic: "https://live.staticflickr.com/65535/51892968587_a241095a91_m.jpg",
    scorecard:
      "https://live.staticflickr.com/65535/51894264689_3a1e2e1dc4_m.jpg",
  },
  {
    name: "Derrick Wiley",
    course: "Bos Landen Golf Club",
    year: 2016,
    flagpic: "https://live.staticflickr.com/65535/51892968612_0052b67d16_m.jpg",
    scorecard:
      "https://live.staticflickr.com/65535/51892968637_017c3261bf_m.jpg",
  },
  {
    name: "Connor Girkin",
    course: "Blue Top Ridge at Riverside",
    year: 2017,
    flagpic: "https://live.staticflickr.com/65535/51894014963_602370f1db_m.jpg",
    scorecard:
      "https://live.staticflickr.com/65535/51892968577_c71777a379_m.jpg",
  },
  {
    name: "Ryan Biegger",
    course: "Tournament Club of Iowa",
    year: 2018,
    flagpic: "https://live.staticflickr.com/65535/51894014923_4c9aa596e5_m.jpg",
    scorecard:
      "https://live.staticflickr.com/65535/51893926601_94a317a3ee_m.jpg",
  },
  {
    name: "Ryan Biegger",
    course: "Amana Colonies Golf Club",
    year: 2019,
    flagpic: "https://live.staticflickr.com/65535/51894014893_3fc346dc82_m.jpg",
    scorecard:
      "https://live.staticflickr.com/65535/51894581415_920a807d9e_m.jpg",
  },
  {
    name: "Derrick Wiley",
    course: "Whitebirch at Breezy Point",
    year: 2020,
    flagpic: "https://live.staticflickr.com/65535/51893926561_e632133169_m.jpg",
    scorecard:
      "https://live.staticflickr.com/65535/51894581405_1a8de8accd_m.jpg",
  },
  {
    name: "Derrick Wiley",
    course: "Quarry Oaks Golf CLub",
    year: 2021,
    flagpic: "https://live.staticflickr.com/65535/51894014833_4e4fe8d27a_m.jpg",
    scorecard:
      "https://live.staticflickr.com/65535/51894264559_e2866ee85a_m.jpg",
  },
];

const PastRecipients = () => {
  return (
    <div>
      <h1>Flag Recipients</h1>
      {flagwinners.map((flagwinners) => {
        return (
          <CardGroup>
            <Card>
              <CardBody>
                <CardTitle tag="h5">
                  {flagwinners.name} - {flagwinners.course} - {flagwinners.year}
                </CardTitle>
              </CardBody>
              <CardImg alt="flag winner" src={flagwinners.flagpic} />
              <CardImg alt="scorecard" src={flagwinners.scorecard} />
            </Card>
          </CardGroup>
        );
      })}
    </div>
  );
};

export default PastRecipients;
