import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";
import "hammerjs";

const [firstSeries, secondSeries] = [
  [100, 100, 500, 10],
  //   [120, 67],
];
const categories = ["Jordan", "Derrick", "Austin", "Connor", "Grant", "Ryan"];

const PredictionChart = () => {
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

  // Finding number of boot votes
  const jordanBoot = predictions.filter((jordanBoot) => jordanBoot.boot.toLowerCase() === "jordan").length;
  console.log(jordanBoot);

  const ryanBoot = predictions.filter((ryanBoot) => ryanBoot.boot.toLowerCase() === "ryan").length;
  console.log(ryanBoot);

  const austinBoot = predictions.filter((austinBoot) => austinBoot.boot.toLowerCase() === "austin").length;
  console.log(austinBoot);
  
  const derrickBoot = predictions.filter((derrickBoot) => derrickBoot.boot.toLowerCase() === "derrick").length;
  console.log(derrickBoot);

  const connorBoot = predictions.filter((connorBoot) => connorBoot.boot.toLowerCase() === "connor").length;
  console.log(connorBoot);

  const grantBoot = predictions.filter((grantBoot) => grantBoot.boot.toLowerCase() === "grant").length;
  console.log(grantBoot);

  // Finding number of flag votes
  const jordanFlag = predictions.filter((jordanFlag) => jordanFlag.flag.toLowerCase() === "jordan").length;
  console.log(jordanFlag);

  const ryanFlag = predictions.filter((ryanFlag) => ryanFlag.flag.toLowerCase() === "ryan").length;
  console.log(ryanFlag);

  const austinFlag = predictions.filter((austinFlag) => austinFlag.flag.toLowerCase() === "jordan").length;
  console.log(austinFlag);

  const derrickFlag = predictions.filter((derrickFlag) => derrickFlag.flag.toLowerCase() === "derrick").length;
  console.log(derrickFlag);

  const connorFlag = predictions.filter((connorFlag) => connorFlag.flag.toLowerCase() === "connor").length;
  console.log(connorFlag);

  const grantFlag = predictions.filter((grantFlag) => grantFlag.flag.toLowerCase() === "grant").length;
  console.log(grantFlag);


  return (
    <div id="prediction-chart">
      <Chart>
        <ChartTitle text="Predictions" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories}>
            <ChartCategoryAxisTitle text="Players" />
          </ChartCategoryAxisItem>
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem
            type="bar"
            gap={2}
            spacing={0.25}
            data={firstSeries}
          />
          <ChartSeriesItem
            type="bar"
            gap={2}
            spacing={0.25}
            data={secondSeries}
          />
          {/* <ChartSeriesItem
            type="bar"
            gap={2}
            spacing={0.25}
            data={thirdSeries}
          />
          <ChartSeriesItem type="bar" data={fourthSeries} /> */}
        </ChartSeries>
      </Chart>
    </div>
  );
};

// ReactDOM.render(<PredictionChart />, document.querySelector("my-app"));

export default PredictionChart;
