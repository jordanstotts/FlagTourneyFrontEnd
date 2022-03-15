import React, { useEffect, useRef } from "react";
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
import * as d3 from "d3";

const NextYearInsight = () => {
  return (
    <div>
      {/* <SiteNavBar /> */}
      {/* <h1 className="insight-header">Insight To Next Year</h1> */}
      {/* <Navbar /> */}
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
    </div>
  );
};

export default NextYearInsight;
