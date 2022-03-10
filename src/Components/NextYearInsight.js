import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteNavBar from "./SiteNavBar";
import CreatePrediction from "./predictions/CreatePrediction";


const NextYearInsight = () => {
  return (
    <div>
      <SiteNavBar />
      <h1>Insight To Next Year</h1>
      {/* <Form>
        <Label>
          Let us know your predictions!
        </Label>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Boot Winner
          </Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select">
            <option> </option>
            <option>Austin</option>
            <option>Grant</option>
            <option>Connor</option>
            <option>Derrick</option>
            <option>Jordan</option>
            <option>Ryan</option>
            </Input>
          </Col>
          <Label for="exampleSelect" sm={2}>
            2nd
          </Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select">
            <option> </option>
            <option>Austin</option>
            <option>Grant</option>
            <option>Connor</option>
            <option>Derrick</option>
            <option>Jordan</option>
            <option>Ryan</option>
            </Input>
          </Col>
          <Label for="exampleSelect" sm={2}>
            3rd
          </Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select">
            <option> </option>
            <option>Austin</option>
            <option>Grant</option>
            <option>Connor</option>
            <option>Derrick</option>
            <option>Jordan</option>
            <option>Ryan</option>
            </Input>
          </Col>
          <Label for="exampleSelect" sm={2}>
            4th
          </Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select">
            <option> </option>
            <option>Austin</option>
            <option>Grant</option>
            <option>Connor</option>
            <option>Derrick</option>
            <option>Jordan</option>
            <option>Ryan</option>
            </Input>
          </Col>
          <Label for="exampleSelect" sm={2}>
            5th
          </Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select">
            <option> </option>
            <option>Austin</option>
            <option>Grant</option>
            <option>Connor</option>
            <option>Derrick</option>
            <option>Jordan</option>
            <option>Ryan</option>
            </Input>
          </Col>
          <Label for="exampleSelect" sm={2}>
            Flag Winner
          </Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select">
            <option> </option>
            <option>Austin</option>
            <option>Grant</option>
            <option>Connor</option>
            <option>Derrick</option>
            <option>Jordan</option>
            <option>Ryan</option>
            </Input>
          </Col>
        </FormGroup>
      </Form>
      <Label for="exampleSelect">Let us know your predictions!</Label>
      <Form>
        <FormGroup>
          <Input id="exampleSelect" name="select" type="select">
            <option>Who wins the boot</option>
            <option>Austin</option>
            <option>Grant</option>
            <option>Connor</option>
            <option>Derrick</option>
            <option>Jordan</option>
            <option>Ryan</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input id="exampleSelect" name="select" type="select">
            <option>2nd place</option>
            <option>Austin</option>
            <option>Grant</option>
            <option>Connor</option>
            <option>Derrick</option>
            <option>Jordan</option>
            <option>Ryan</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input id="exampleSelect" name="select" type="select">
            <option>3rd place</option>

            <option>Austin</option>
            <option>Grant</option>
            <option>Connor</option>
            <option>Derrick</option>
            <option>Jordan</option>
            <option>Ryan</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input id="exampleSelect" name="select" type="select">
            <option>4th place</option>

            <option>Austin</option>
            <option>Grant</option>
            <option>Connor</option>
            <option>Derrick</option>
            <option>Jordan</option>
            <option>Ryan</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input id="exampleSelect" name="select" type="select">
            <option>5th place</option>

            <option>Austin</option>
            <option>Grant</option>
            <option>Connor</option>
            <option>Derrick</option>
            <option>Jordan</option>
            <option>Ryan</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Who wins the flag?</Label> 
          <Input id="exampleSelect" name="select" type="select">
            <option>Who gets the flag</option>

            <option>Austin</option>
            <option>Grant</option>
            <option>Connor</option>
            <option>Derrick</option>
            <option>Jordan</option>
            <option>Ryan</option>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form> */}
      <div className="predictions-layout">
        <div>
          <p>Austin's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem>Grant(boot)</ListGroupItem>
            <ListGroupItem>Jordan</ListGroupItem>
            <ListGroupItem>Ryan</ListGroupItem>
            <ListGroupItem>Derrick</ListGroupItem>
            <ListGroupItem>Connor(flag)</ListGroupItem>
          </ListGroup>
        </div>
        <div>
          <p>Grant's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem>Grant(boot)</ListGroupItem>
            <ListGroupItem>Jordan</ListGroupItem>
            <ListGroupItem>Ryan</ListGroupItem>
            <ListGroupItem>Derrick</ListGroupItem>
            <ListGroupItem>Connor(flag)</ListGroupItem>
          </ListGroup>
        </div>
        <div>
          <p>Connor's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem>Grant(boot)</ListGroupItem>
            <ListGroupItem>Jordan</ListGroupItem>
            <ListGroupItem>Ryan</ListGroupItem>
            <ListGroupItem>Derrick</ListGroupItem>
            <ListGroupItem>Connor(flag)</ListGroupItem>
          </ListGroup>
        </div>
        <div>
          <p>Derricks's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem>Grant(boot)</ListGroupItem>
            <ListGroupItem>Jordan</ListGroupItem>
            <ListGroupItem>Ryan</ListGroupItem>
            <ListGroupItem>Derrick</ListGroupItem>
            <ListGroupItem>Connor(flag)</ListGroupItem>
          </ListGroup>
        </div>
        <div>
          <p>Jordan's predictions:</p>
          <ListGroup numbered>
            <ListGroupItem>Grant(boot)</ListGroupItem>
            <ListGroupItem>Jordan</ListGroupItem>
            <ListGroupItem>Ryan</ListGroupItem>
            <ListGroupItem>Derrick</ListGroupItem>
            <ListGroupItem>Connor(flag)</ListGroupItem>
          </ListGroup>
        </div>
        <div>
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
