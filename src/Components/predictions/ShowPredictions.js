import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PredictionCard from "./PredictionCard";

const ShowPredictions = (props) => {
  const [showPredictions, setShowPredictions] = useState({ predictions: [] });

  const componentDidMount = () => {
    axios
      .get("http://localhost:8082/api/predictions")
      .then((res) => {
        setShowPredictions({
          predictions: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowPredictionList");
      });
  };

  const render = () => {
    const predictions = showPredictions.predictions;
    console.log("PrintPrediction: " + predictions);
    let predictionList;

    if (!predictions) {
      predictionList = "there are no predictions yet!";
    } else {
      predictionList = predictions.map((prediction, k) => (
        <PredictionCard prediction={prediction} key={k} />
      ));
    }

    return (
      <div className="ShowPredictionList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Predictions List</h2>
            </div>

            <div className="col-md-11">
              <Link
                to="/create-prediction"
                className="btn btn-outline-warning float-right"
              >
                + Add New Prediction
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className="list">{predictionList}</div>
        </div>
      </div>
    );
  };
};

export default ShowPredictions;
