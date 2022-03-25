import React, { useState, useEffect } from "react";
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartTooltip,
} from "@progress/kendo-react-charts";
import "hammerjs";
import "@progress/kendo-theme-default/dist/all.css";
import "./create.css";

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

  // Finding number of boot votes
  const jordanBoot = predictions.filter(
    (jordanBoot) => jordanBoot.boot.toLowerCase() === "jordan"
  ).length;

  const ryanBoot = predictions.filter(
    (ryanBoot) => ryanBoot.boot.toLowerCase() === "ryan"
  ).length;

  const austinBoot = predictions.filter(
    (austinBoot) => austinBoot.boot.toLowerCase() === "austin"
  ).length;

  const derrickBoot = predictions.filter(
    (derrickBoot) => derrickBoot.boot.toLowerCase() === "derrick"
  ).length;

  const connorBoot = predictions.filter(
    (connorBoot) => connorBoot.boot.toLowerCase() === "connor"
  ).length;

  const grantBoot = predictions.filter(
    (grantBoot) => grantBoot.boot.toLowerCase() === "grant"
  ).length;

  // Finding number of flag votes
  const jordanFlag = predictions.filter(
    (jordanFlag) => jordanFlag.flag.toLowerCase() === "jordan"
  ).length;

  const ryanFlag = predictions.filter(
    (ryanFlag) => ryanFlag.flag.toLowerCase() === "ryan"
  ).length;

  const austinFlag = predictions.filter(
    (austinFlag) => austinFlag.flag.toLowerCase() === "jordan"
  ).length;

  const derrickFlag = predictions.filter(
    (derrickFlag) => derrickFlag.flag.toLowerCase() === "derrick"
  ).length;

  const connorFlag = predictions.filter(
    (connorFlag) => connorFlag.flag.toLowerCase() === "connor"
  ).length;

  const grantFlag = predictions.filter(
    (grantFlag) => grantFlag.flag.toLowerCase() === "grant"
  ).length;

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
        <ChartValueAxis>
          <ChartValueAxisItem
            title={{
              text: "Number of Votes",
            }}
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
          <ChartSeriesItem
            type="bar"
            name="Boot"
            color={"#2c3e50"}
            data={bootPicks}
          />
          <ChartSeriesItem
            type="bar"
            name="Flag"
            color={"#efb1f2"}
            data={flagPicks}
          />
        </ChartSeries>
        <ChartTooltip />
        <ChartLegend />
      </Chart>
    </div>
  );
};

export default PredictionChart;
