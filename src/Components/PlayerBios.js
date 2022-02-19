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
    age: 28,
    occupation: "Accounting and Paule Crewe",
    alma_mater: "University of Iowa",
    flag_years: 0,
    quote: "You guys are bums",
    boot_years: 0,
    picture: "https://live.staticflickr.com/65535/51890564842_bdff880d6c_m.jpg",
  },
];

const PlayerBios = () => {
  return (
    <div>
      <h1>PlayerBios</h1>
      {players.map((players) => {
        return (
          <Card>
            <CardBody>
              <CardTitle tag="h5">{players.name}</CardTitle>
              <CardLink href="#">social media link</CardLink>
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
