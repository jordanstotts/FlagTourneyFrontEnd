import React, { useState, useEffect } from "react";
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartTooltip,
  ChartLegendItem,
  ChartLegendTitle,
} from "@progress/kendo-react-charts";
import "hammerjs";
import "@progress/kendo-theme-default/dist/all.css";
import './create.css'

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
  // }, [predictions.length]);
  console.log(predictions);

  // Finding number of boot votes
  const jordanBoot = predictions.filter(
    (jordanBoot) => jordanBoot.boot.toLowerCase() === "jordan"
  ).length;
  console.log(jordanBoot);

  const ryanBoot = predictions.filter(
    (ryanBoot) => ryanBoot.boot.toLowerCase() === "ryan"
  ).length;
  console.log(ryanBoot);

  const austinBoot = predictions.filter(
    (austinBoot) => austinBoot.boot.toLowerCase() === "austin"
  ).length;
  console.log(austinBoot);

  const derrickBoot = predictions.filter(
    (derrickBoot) => derrickBoot.boot.toLowerCase() === "derrick"
  ).length;
  console.log(derrickBoot);

  const connorBoot = predictions.filter(
    (connorBoot) => connorBoot.boot.toLowerCase() === "connor"
  ).length;
  console.log(connorBoot);

  const grantBoot = predictions.filter(
    (grantBoot) => grantBoot.boot.toLowerCase() === "grant"
  ).length;
  console.log(grantBoot);

  // Finding number of flag votes
  const jordanFlag = predictions.filter(
    (jordanFlag) => jordanFlag.flag.toLowerCase() === "jordan"
  ).length;
  console.log(jordanFlag);

  const ryanFlag = predictions.filter(
    (ryanFlag) => ryanFlag.flag.toLowerCase() === "ryan"
  ).length;
  console.log(ryanFlag);

  const austinFlag = predictions.filter(
    (austinFlag) => austinFlag.flag.toLowerCase() === "jordan"
  ).length;
  console.log(austinFlag);

  const derrickFlag = predictions.filter(
    (derrickFlag) => derrickFlag.flag.toLowerCase() === "derrick"
  ).length;
  console.log(derrickFlag);

  const connorFlag = predictions.filter(
    (connorFlag) => connorFlag.flag.toLowerCase() === "connor"
  ).length;
  console.log(connorFlag);

  const grantFlag = predictions.filter(
    (grantFlag) => grantFlag.flag.toLowerCase() === "grant"
  ).length;
  console.log(grantFlag);

  const bootPicks = [
    jordanBoot,
    ryanBoot,
    austinBoot,
    derrickBoot,
    connorBoot,
    grantBoot,
  ];
  const flagPicks = [
    jordanFlag,
    ryanFlag,
    austinFlag,
    derrickFlag,
    connorFlag,
    grantFlag,
  ];

  return (
    <div id="prediction-chart">
      <Chart>
        <ChartTitle text="The Public's Opinion" />
        <ChartValueAxis >
          <ChartValueAxisItem
            title={{
              text: "Number of Votes",
            }}
            // min={0}
            // max={10}
          />
        </ChartValueAxis>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem
            categories={[
              "Jordan",
              "Ryan",
              "Austin",
              "Derrick",
              "Connor",
              "Grant",
            ]}
          />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem type="bar" name="Boot" color={"#2c3e50"} data={bootPicks} />
          <ChartSeriesItem type="bar" name="Flag" color={"#efb1f2"} data={flagPicks} />
        </ChartSeries>
        {/* <ChartLegend position="bottom" orientation="horizontal"/> */}
        <ChartTooltip />
      <ChartLegend />

      </Chart>
    </div>
  );
};

// ReactDOM.render(<PredictionChart />, document.querySelector("my-app"));

export default PredictionChart;
