import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NextYearInsight from "../NextYearInsight";
import Navbar from "./navbar";
import { Chart } from "@progress/kendo-react-charts";
import PredictionChart from "./chart";
import SiteNavBar from "../SiteNavBar";

const Prediction = (props) => (
  <tr>
    <td>{props.prediction.boot}</td>
    <td>{props.prediction.second}</td>
    <td>{props.prediction.third}</td>
    <td>{props.prediction.fourth}</td>
    <td>{props.prediction.fifth}</td>
    <td>{props.prediction.flag}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.prediction._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deletePrediction(props.prediction._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

const PredictionList = () => {
  const [predictions, setPredictions] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getPredictions() {
      const response = await fetch(`http://localhost:5000/InsightToNextYear/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const predictions = await response.json();
      setPredictions(predictions);
    }

    getPredictions();

    return;
  }, [predictions.length]);
  console.log(predictions);

  // This method will delete a record
  async function deletePrediction(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newPredictions = predictions.filter((el) => el._id !== id);
    setPredictions(newPredictions);
  }

  // This method will map out the predictions on the table
  function predictionList() {
    return predictions.map((prediction) => {
      return (
        <Prediction
          prediction={prediction}
          deletePrediction={() => deletePrediction(prediction._id)}
          key={prediction._id}
        />
      );
    });
  }
  // This following section will display the table with the records of individuals.
  return (
    <div>
      <SiteNavBar />
      <h1 className="insight-header">Insight To Next Year</h1>
      <Navbar />
      <div className="players-public-picks">
        <NextYearInsight />
        <PredictionChart />
      </div>
      <div className="public-predictions">
        <h3>Prediction List</h3>
        <table className="table" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th className="table-headers">Boot Winner</th>
              <th className="table-headers">2nd Place</th>
              <th className="table-headers">3rd Place</th>
              <th className="table-headers">4th Place</th>
              <th className="table-headers">5th Place</th>
              <th className="table-headers">Flag Winner</th>
              <th className="table-headers">Action</th>
            </tr>
          </thead>
          <tbody>{predictionList()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default PredictionList;
