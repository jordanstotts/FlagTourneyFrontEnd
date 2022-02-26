import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const NextYearInsight = () => {
  return (
    <div>
      <h1>Insight To Next Year</h1>
      <div className="predictions-layout">
        <div>
        <p>
        Austin's predictions:
        </p>
        <ListGroup numbered>
          <ListGroupItem>Grant(boot)</ListGroupItem>
          <ListGroupItem>Jordan</ListGroupItem>
          <ListGroupItem>Ryan</ListGroupItem>
          <ListGroupItem>Derrick</ListGroupItem>
          <ListGroupItem>Connor(flag)</ListGroupItem>
        </ListGroup>
        </div>
        <div>
        <p>
        Grant's predictions:
        </p>
        <ListGroup numbered>
          <ListGroupItem>Grant(boot)</ListGroupItem>
          <ListGroupItem>Jordan</ListGroupItem>
          <ListGroupItem>Ryan</ListGroupItem>
          <ListGroupItem>Derrick</ListGroupItem>
          <ListGroupItem>Connor(flag)</ListGroupItem>
        </ListGroup>
        </div>
        <div>
        <p>
        Connor's predictions:
        </p>
        <ListGroup numbered>
          <ListGroupItem>Grant(boot)</ListGroupItem>
          <ListGroupItem>Jordan</ListGroupItem>
          <ListGroupItem>Ryan</ListGroupItem>
          <ListGroupItem>Derrick</ListGroupItem>
          <ListGroupItem>Connor(flag)</ListGroupItem>
        </ListGroup>
        </div>
        <div>
        <p>
        Derricks's predictions:
        </p>
        <ListGroup numbered>
          <ListGroupItem>Grant(boot)</ListGroupItem>
          <ListGroupItem>Jordan</ListGroupItem>
          <ListGroupItem>Ryan</ListGroupItem>
          <ListGroupItem>Derrick</ListGroupItem>
          <ListGroupItem>Connor(flag)</ListGroupItem>
        </ListGroup>
        </div>
        <div>
        <p>
        Jordan's predictions:
        </p>
        <ListGroup numbered>
          <ListGroupItem>Grant(boot)</ListGroupItem>
          <ListGroupItem>Jordan</ListGroupItem>
          <ListGroupItem>Ryan</ListGroupItem>
          <ListGroupItem>Derrick</ListGroupItem>
          <ListGroupItem>Connor(flag)</ListGroupItem>
        </ListGroup>
        </div><div>
        <p>
        Ryan's predictions:
        </p>
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
