import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowPredictionDetails = (props) => {
  const [predictionDetail, setPredictionDetail] = useState({ prediction: {} });

  const componentDidMount = () => {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8082/api/predictions/" + props.match.params.id)
      .then((res) => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        setPredictionDetail({
          prediction: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowPredictionDetails");
      });
  };

  const onDeleteClick = (id) => {
    axios
      .delete("http://localhost:8082/api/predictions/" + id)
      .then((res) => {
        this.props.history.push("/InsightToNextYear");
      })
      .catch((err) => {
        console.log("Error form ShowPredictionDetails_deleteClick");
      });
  };

  const render = () => {
    const prediction = predictionDetail.prediction;
    let PredictionItem = (
      <div>
        <table className="table table-hover table-dark">
          {/* <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead> */}
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Boot</td>
              <td>{prediction.boot}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>2nd Place</td>
              <td>{prediction.second}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>3rd Place</td>
              <td>{prediction.third}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>4th Place</td>
              <td>{prediction.fourth}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>5th Place</td>
              <td>{prediction.fifth}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Flag Winner</td>
              <td>{prediction.flag}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div className="ShowPredictionDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link
                to="/InsightToNextYear"
                className="btn btn-outline-warning float-left"
              >
                Show Prediction List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Predictions Record</h1>
              <p className="lead text-center">View Predictions Info</p>
              <hr /> <br />
            </div>
          </div>
          <div>{PredictionItem}</div>

          <div className="row">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg btn-block"
                onClick={onDeleteClick.bind(prediction._id)}
              >
                Delete Prediction
              </button>
              <br />
            </div>

            <div className="col-md-6">
              <Link
                to={`/edit-prediction/${prediction._id}`}
                className="btn btn-outline-info btn-lg btn-block"
              >
                Edit Prediction
              </Link>
              <br />
            </div>
          </div>
          {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}
        </div>
      </div>
    );
  };
};

export default ShowPredictionDetails;
