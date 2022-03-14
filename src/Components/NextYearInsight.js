import React, {useEffect, useRef} from "react";
import {
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteNavBar from "./SiteNavBar";
import Navbar from "./predictions/navbar";
import * as d3 from 'd3'


const NextYearInsight = () => {


  return (
    <div>
      <SiteNavBar />
      <h1 className="insight-header">Insight To Next Year</h1>
      <Navbar />
      {/* <div className="predictions-layout">
        <div className="our-predictions">
          <p>Austin's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem className="prediction-odd">Boot: Grant</ListGroupItem>
            <ListGroupItem className="prediction-even">2nd: Jordan</ListGroupItem>
            <ListGroupItem className="prediction-odd">3rd: Ryan</ListGroupItem>
            <ListGroupItem className="prediction-even">4th: Derrick</ListGroupItem>
            <ListGroupItem className="prediction-odd">5th: Connor</ListGroupItem>
            <ListGroupItem className="prediction-even">Flag: Connor</ListGroupItem>
          </ListGroup>
        </div>
        <div className="our-predictions">
          <p>Grant's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem className="prediction-odd">Boot: Grant</ListGroupItem>
            <ListGroupItem className="prediction-even">2nd: Jordan</ListGroupItem>
            <ListGroupItem className="prediction-odd">3rd: Ryan</ListGroupItem>
            <ListGroupItem className="prediction-even">4th: Derrick</ListGroupItem>
            <ListGroupItem className="prediction-odd">5th: Connor</ListGroupItem>
            <ListGroupItem className="prediction-even">Flag: Connor</ListGroupItem>
          </ListGroup>
        </div>
        <div className="our-predictions">
          <p>Connor's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem className="prediction-odd">Boot: Grant</ListGroupItem>
            <ListGroupItem className="prediction-even">2nd: Jordan</ListGroupItem>
            <ListGroupItem className="prediction-odd">3rd: Ryan</ListGroupItem>
            <ListGroupItem className="prediction-even">4th: Derrick</ListGroupItem>
            <ListGroupItem className="prediction-odd">5th: Connor</ListGroupItem>
            <ListGroupItem className="prediction-even">Flag: Connor</ListGroupItem>
          </ListGroup>
        </div>
        <div className="our-predictions">
          <p>Derricks's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem className="prediction-odd">Boot: Grant</ListGroupItem>
            <ListGroupItem className="prediction-even">2nd: Jordan</ListGroupItem>
            <ListGroupItem className="prediction-odd">3rd: Ryan</ListGroupItem>
            <ListGroupItem className="prediction-even">4th: Derrick</ListGroupItem>
            <ListGroupItem className="prediction-odd">5th: Connor</ListGroupItem>
            <ListGroupItem className="prediction-even">Flag: Connor</ListGroupItem>
          </ListGroup>
        </div>
        <div className="our-predictions">
          <p>Jordan's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem className="prediction-odd">Boot: Grant</ListGroupItem>
            <ListGroupItem className="prediction-even">2nd: Jordan</ListGroupItem>
            <ListGroupItem className="prediction-odd">3rd: Ryan</ListGroupItem>
            <ListGroupItem className="prediction-even">4th: Derrick</ListGroupItem>
            <ListGroupItem className="prediction-odd">5th: Connor</ListGroupItem>
            <ListGroupItem className="prediction-even">Flag: Connor</ListGroupItem>
          </ListGroup>
        </div>
        <div className="our-predictions">
          <p>Ryan's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem className="prediction-odd">Boot: Grant</ListGroupItem>
            <ListGroupItem className="prediction-even">2nd: Jordan</ListGroupItem>
            <ListGroupItem className="prediction-odd">3rd: Ryan</ListGroupItem>
            <ListGroupItem className="prediction-even">4th: Derrick</ListGroupItem>
            <ListGroupItem className="prediction-odd">5th: Connor</ListGroupItem>
            <ListGroupItem className="prediction-even">Flag: Connor</ListGroupItem>
          </ListGroup>
        </div>
      </div> */}

      <div className="predictions-layout">
        <div className="our-predictions">
          <p id="prediction-name">Austin's predictions:</p>
          <div>
            <p id="prediction">Boot: Grant</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Connor</p>
          </div>
        </div>
        <div className="our-predictions">
          <p id="prediction-name">Grant's predictions:</p>
          <div>
            <p id="prediction">Boot: Grant</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Connor</p>
          </div>
        </div>
        <div className="our-predictions">
          <p id="prediction-name">Connor's predictions:</p>
          <div>
            <p id="prediction">Boot: Grant</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Connor</p>
          </div>
        </div>
        <div className="our-predictions">
          <p id="prediction-name">Derricks's predictions:</p>
          <div>
            <p id="prediction">Boot: Grant</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Connor</p>
          </div>
        </div>
        <div className="our-predictions">
          <p id="prediction-name">Jordan's predictions:</p>
          <div>
            <p id="prediction">Boot: Grant</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Connor</p>
          </div>
        </div>
        <div className="our-predictions">
          <p id="prediction-name">Ryan's predictions:</p>
          <div>
            <p id="prediction">Boot: Grant</p>
            <p id="prediction">2nd: Jordan</p>
            <p id="prediction">3rd: Ryan</p>
            <p id="prediction">4th: Derrick</p>
            <p id="prediction">5th: Connor</p>
            <p id="prediction">Flag: Connor</p>
          </div>
        </div>
      </div>

      {/* Graph d3 */}

      <div className="bar-chart"></div>



    </div>
  );
};

export default NextYearInsight;
