import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from "reactstrap";


let players = [
  {
    name: "Jordan Stotts",
    social: [
      {twitter: "https://twitter.com/JordanStotts15", ig: "https://www.instagram.com/jordanstotts15/", facebook: "https://www.facebook.com/jordan.stotts"}
    ],
    age: 28,
    occupation: "Software Engineer",
    alma_mater: "University of Sioux Falls",
    flag_years: 0,
    quote: "Pipe it up",
    boot_years: 0,
    picture: "https://live.staticflickr.com/65535/51891505751_69ce94cd32_m.jpg",
  },
  {
    name: "Derrick Wiley",
    social: [{twitter: "https://twitter.com/ddubthekid", ig: "https://www.instagram.com/derrickwiley_/", facebook: "https://www.facebook.com/derrick.wiley.104"}],
    age: 28,
    occupation: "Digital Designer at Techint Labs",
    alma_mater: "Iowa State University",
    flag_years: [2014, 2016, 2020, 2021],
    quote: "BOOM HEADSHOT",
    boot_years: 0,
    picture: "https://live.staticflickr.com/65535/51891505766_ff56026d56_m.jpg",
  },
  {
    name: "Ryan Biegger",
    social: [{twitter: "https://twitter.com/BieggerIsBetter", ig: "https://www.instagram.com/ryan_biegger/", facebook: "https://www.facebook.com/ryan.biegger"}],
    age: 27,
    occupation: "Accountant at E.Y.",
    alma_mater: "University of Northern Iowa",
    flag_years: [2018, 2019],
    quote:
      "If you tell a lie well enough you may even start to believe it yourself",
    boot_years: 0,
    picture: "https://live.staticflickr.com/65535/51891505721_7c6324e813_m.jpg",
  },
  {
    name: "Connor Girkin",
    social: [{twitter: "https://twitter.com/GirkinOffIsFun", ig: "https://www.instagram.com/cgirkin/", facebook: "https://www.facebook.com/connor.girkin"}],
    age: 28,
    occupation: "Digital Marketing Consultant for Sinclair",
    alma_mater: "University of Iowa",
    flag_years: 2017,
    quote: "I'm a Des Moines 7, but a prison 10",
    boot_years: 0,
    picture: "https://live.staticflickr.com/65535/51892161415_29d73c8daf_m.jpg",
  },
  {
    name: "Grant Luther",
    social: [{twitter: "https://twitter.com/GrantLuther12", ig: "https://www.instagram.com/grantluther12/", facebook: "https://www.facebook.com/grant.luther.92"}],
    age: 28,
    occupation: "Event Operations Coordinator at Iowa State Athletics",
    alma_mater: "Iowa State University",
    flag_years: [2013, 2015],
    quote: "That's why they call me big daddy hacks",
    boot_years: [2018, 2019, 2020, 2021],
    picture: "https://live.staticflickr.com/65535/51891506456_408aee8632_m.jpg",
  },
  {
    name: "Austin Howe",
    social: [{twitter: "https://twitter.com/AustinKnowsHowe", ig: "https://www.instagram.com/austinhowe2/", facebook: "https://www.facebook.com/profile.php?id=1816414823"}],
    age: 28,
    occupation: "Accounting and Paule Crewe",
    alma_mater: "University of Iowa",
    flag_years: 0,
    quote: "You guys are bums",
    boot_years: 0,
    picture: "https://live.staticflickr.com/65535/51890564842_bdff880d6c_m.jpg",
  },
];
console.log(players)
const PlayerBios = () => {
  return (
    <div>
      <h1>PlayerBios</h1>
      {players.map((players) => {
        return (
          <Card>
            <CardBody>
              <CardTitle tag="h5">{players.name}</CardTitle>
              <CardLink href="#">{ players.social[0].twitter }</CardLink>
              <CardLink href="#">{ players.social[0].ig }</CardLink>
              <CardLink href="#">{ players.social[0].facebook }</CardLink>
            </CardBody>
            <img src={players.picture} alt="profile pic" />
            <CardBody>
              <CardText>
                <li>age: {players.age} </li>
                <li>occupation: {players.occupation} </li>
                <li>alma mater: {players.alma_mater} </li>
                <li>flag years: {players.flag_years} </li>
                <li>boot years: {players.boot_years} </li>
                <li>quote: {players.quote} </li>
              </CardText>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default PlayerBios;
