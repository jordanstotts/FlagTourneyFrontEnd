import React from "react";
import { Card, CardBody, CardTitle, CardText, CardLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteNavBar from "./SiteNavBar";

const players = [
  {
    name: "Jordan Stotts",
    social: [
      {
        twitter: "https://twitter.com/JordanStotts15",
        ig: "https://www.instagram.com/jordanstotts15/",
        facebook: "https://www.facebook.com/jordan.stotts",
      },
    ],
    age: 28,
    occupation: "Software Engineer",
    alma_mater: "University of Sioux Falls",
    flag_years: "0",
    handicap: 12.2,
    boot_years: "0",
    picture: "https://live.staticflickr.com/65535/51891505751_69ce94cd32_m.jpg",
  },
  {
    name: "Derrick Wiley",
    social: [
      {
        twitter: "https://twitter.com/ddubthekid",
        ig: "https://www.instagram.com/derrickwiley_/",
        facebook: "https://www.facebook.com/derrick.wiley.104",
      },
    ],
    age: 28,
    occupation: "UX Engineer at AdCellerant",
    alma_mater: "Iowa State University",
    flag_years: "2014 | 2016 | 2020 | 2021",
    handicap: 19.5,
    boot_years: "0",
    picture: "https://live.staticflickr.com/65535/51891505766_ff56026d56_m.jpg",
  },
  {
    name: "Ryan Biegger",
    social: [
      {
        twitter: "https://twitter.com/BieggerIsBetter",
        ig: "https://www.instagram.com/ryan_biegger/",
        facebook: "https://www.facebook.com/ryan.biegger",
      },
    ],
    age: 27,
    occupation: "Senior Associate (Accounting) at Embark",
    alma_mater: "University of Northern Iowa",
    flag_years: "2018 | 2019",
    handicap: 13.1,
    boot_years: "0",
    picture: "https://live.staticflickr.com/65535/51940980928_2a9ed92f2d_m.jpg",
  },
  {
    name: "Connor Girkin",
    social: [
      {
        twitter: "https://twitter.com/GirkinOffIsFun",
        ig: "https://www.instagram.com/cgirkin/",
        facebook: "https://www.facebook.com/connor.girkin",
      },
    ],
    age: 28,
    occupation: "Sales Consultant at Willis Auto",
    alma_mater: "University of Iowa",
    flag_years: "2017",
    handicap: 10.3,
    boot_years: "0",
    picture: "https://live.staticflickr.com/65535/51892161415_29d73c8daf_m.jpg",
  },
  {
    name: "Grant Luther",
    social: [
      {
        twitter: "https://twitter.com/GrantLuther12",
        ig: "https://www.instagram.com/grantluther12/",
        facebook: "https://www.facebook.com/grant.luther.92",
      },
    ],
    age: 28,
    occupation: "Event Ops Coordinator at ISU Athletics",
    alma_mater: "Iowa State University",
    flag_years: "2013 | 2015",
    handicap: 2.6,
    boot_years: "2018 | 2019 | 2020 | 2021",
    picture: "https://live.staticflickr.com/65535/51891506456_408aee8632_m.jpg",
  },
  {
    name: "Austin Howe",
    social: [
      {
        twitter: "https://twitter.com/AustinKnowsHowe",
        ig: "https://www.instagram.com/austinhowe2/",
        facebook: "https://www.facebook.com/profile.php?id=1816414823",
      },
    ],
    age: 28,
    occupation: "Int'l Tax Senior Associate at RSM",
    alma_mater: "University of Iowa",
    flag_years: "0",
    handicap: 0.1,
    boot_years: "0",
    picture: "https://live.staticflickr.com/65535/51890564842_bdff880d6c_m.jpg",
  },
];
console.log(players);
const PlayerBios = () => {
  return (
    <div>
      <SiteNavBar />
      <div className="player-bio-layout">
        <h1 className="player-bio-header">Player Bios</h1>
        <div className="bio">
          {players.map((players) => {
            return (
              <Card className="player-cards">
                <CardBody>
                  <CardTitle className="bio-player-name">
                    {players.name}
                  </CardTitle>
                  <img
                    className="bio-pic"
                    src={players.picture}
                    alt="profile pic"
                  />
                  <div className="socials">
                    <CardLink href={players.social[0].twitter}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                        className="social-icon"
                      />
                    </CardLink>
                    <CardLink href={players.social[0].ig}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                        className="social-icon"
                      />
                    </CardLink>
                    <CardLink href={players.social[0].facebook}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                        className="social-icon"
                      />
                    </CardLink>
                  </div>
                </CardBody>
                <CardBody className="player-card-body">
                  <CardText className="bio-info">
                    <ul className="bio-info-list">
                      <p className="player-info">
                        <strong>Age: </strong>{" "}
                        <div className="bio-list-detail">{players.age}</div>{" "}
                      </p>
                      <p className="player-info">
                        <strong>Occupation: </strong>{" "}
                        <div className="bio-list-detail">
                          {players.occupation}
                        </div>{" "}
                      </p>
                      <p className="player-info">
                        <strong>Alma Mater: </strong>
                        <div className="bio-list-detail">
                          {" "}
                          {players.alma_mater}
                        </div>{" "}
                      </p>
                      <p className="player-info">
                        <strong>Flag Years: </strong>{" "}
                        <div className="bio-list-detail">
                          {players.flag_years}
                        </div>{" "}
                      </p>
                      <p className="player-info">
                        <strong>Boot Years: </strong>{" "}
                        <div className="bio-list-detail">
                          {players.boot_years}
                        </div>{" "}
                      </p>
                      <p className="player-info">
                        <strong>Handicap: </strong>{" "}
                        <div className="bio-list-detail">{players.handicap} </div>{" "}
                      </p>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayerBios;
