import React from "react";
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

const NextYearInsight = () => {
  return (
    <div>
      <SiteNavBar />
      <h1 className="insight-header">Insight To Next Year</h1>
      <Navbar />
      <div className="predictions-layout">
        <div className="our-predictions">
          <p>Austin's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem>Grant(boot)</ListGroupItem>
            <ListGroupItem>Jordan</ListGroupItem>
            <ListGroupItem>Ryan</ListGroupItem>
            <ListGroupItem>Derrick</ListGroupItem>
            <ListGroupItem>Connor(flag)</ListGroupItem>
          </ListGroup>
        </div>
        <div className="our-predictions">
          <p>Grant's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem>Grant(boot)</ListGroupItem>
            <ListGroupItem>Jordan</ListGroupItem>
            <ListGroupItem>Ryan</ListGroupItem>
            <ListGroupItem>Derrick</ListGroupItem>
            <ListGroupItem>Connor(flag)</ListGroupItem>
          </ListGroup>
        </div>
        <div className="our-predictions">
          <p>Connor's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem>Grant(boot)</ListGroupItem>
            <ListGroupItem>Jordan</ListGroupItem>
            <ListGroupItem>Ryan</ListGroupItem>
            <ListGroupItem>Derrick</ListGroupItem>
            <ListGroupItem>Connor(flag)</ListGroupItem>
          </ListGroup>
        </div>
        <div className="our-predictions">
          <p>Derricks's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem>Grant(boot)</ListGroupItem>
            <ListGroupItem>Jordan</ListGroupItem>
            <ListGroupItem>Ryan</ListGroupItem>
            <ListGroupItem>Derrick</ListGroupItem>
            <ListGroupItem>Connor(flag)</ListGroupItem>
          </ListGroup>
        </div>
        <div className="our-predictions">
          <p>Jordan's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem>Grant(boot)</ListGroupItem>
            <ListGroupItem>Jordan</ListGroupItem>
            <ListGroupItem>Ryan</ListGroupItem>
            <ListGroupItem>Derrick</ListGroupItem>
            <ListGroupItem>Connor(flag)</ListGroupItem>
          </ListGroup>
        </div>
        <div className="our-predictions">
          <p>Ryan's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem>Grant(boot)</ListGroupItem>
            <ListGroupItem>Jordan</ListGroupItem>
            <ListGroupItem>Ryan</ListGroupItem>
            <ListGroupItem>Derrick</ListGroupItem>
            <ListGroupItem>Connor(flag)</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default NextYearInsight;
