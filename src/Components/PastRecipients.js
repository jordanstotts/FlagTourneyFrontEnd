import React, { useState } from "react";
import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Navbar, Nav, Button} from 'react-bootstrap';
import SiteNavBar from "./SiteNavBar";
import Scorecard1 from "./modals/Scorecard1";
import Scorecard2 from "./modals/Scorecard2";
import Scorecard3 from "./modals/Scorecard3";
import Scorecard4 from "./modals/Scorecard4";
import Scorecard5 from "./modals/Scorecard5";
import Scorecard6 from "./modals/Scorecard6";
import Scorecard7 from "./modals/Scorecard7";
import Scorecard8 from "./modals/Scorecard8";
import Scorecard9 from "./modals/Scorecard9";

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
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);
  const [openModal7, setOpenModal7] = useState(false);
  const [openModal8, setOpenModal8] = useState(false);
  const [openModal9, setOpenModal9] = useState(false);

  return (
    <div>
      <SiteNavBar />
      <h1 className="flag-winner-header">Flag Recipients</h1>

      <div className="past-recipient-layout">
        {flagwinners.map((flagwinners) => {
          return (
            <CardGroup>
              <Card className="flag-winner-card">
                <CardBody>
                  <CardTitle>
                    {flagwinners.name} - {flagwinners.course} -{" "}
                    {flagwinners.year}
                  </CardTitle>
                </CardBody>
                <CardImg
                  className="flag-winner-pic"
                  alt="flag winner"
                  src={flagwinners.flagpic}
                />
              </Card>
            </CardGroup>
          );
        })}
        {/* <div className="scorecard-buttons"> */}
        <button className="openModalBtn" onClick={() => setOpenModal1(true)}>
          Scorecard
        </button>
        {openModal1 && <Scorecard1 closeModal1={setOpenModal1} />}

        <button className="openModalBtn" onClick={() => setOpenModal2(true)}>
        Scorecard
        </button>
        {openModal2 && <Scorecard2 closeModal2={setOpenModal2} />}

        <button className="openModalBtn" onClick={() => setOpenModal3(true)}>
        Scorecard
        </button>
        {openModal3 && <Scorecard3 closeModal3={setOpenModal3} />}

        <button className="openModalBtn" onClick={() => setOpenModal4(true)}>
        Scorecard
        </button>
        {openModal4 && <Scorecard4 closeModal4={setOpenModal4} />}

        <button className="openModalBtn" onClick={() => setOpenModal5(true)}>
        Scorecard
        </button>
        {openModal5 && <Scorecard5 closeModal5={setOpenModal5} />}

        <button className="openModalBtn" onClick={() => setOpenModal6(true)}>
        Scorecard
        </button>
        {openModal6 && <Scorecard6 closeModal6={setOpenModal6} />}

        <button className="openModalBtn" onClick={() => setOpenModal7(true)}>
        Scorecard
        </button>
        {openModal7 && <Scorecard7 closeModal7={setOpenModal7} />}

        <button className="openModalBtn" onClick={() => setOpenModal8(true)}>
        Scorecard
        </button>
        {openModal8 && <Scorecard8 closeModal8={setOpenModal8} />}

        <button className="openModalBtn" onClick={() => setOpenModal9(true)}>
        Scorecard
        </button>
        {openModal9 && <Scorecard9 closeModal9={setOpenModal9} />}
        {/* </div> */}
      </div>
      <div></div>
    </div>
  );
};

export default PastRecipients;
