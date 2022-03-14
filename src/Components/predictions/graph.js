import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
// import './Graph.css'

const Graph = () => {
//   const d3Chart = useRef();
// const [data] = useState([jordanBoot, jordanFlag])
// const svgRef = useRef()
  const [predictions, setPredictions] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    // const margin = { top: 50, right: 30, bottom: 30, left: 60 };
    // const graphWidth =
    //   d3.select(".barchart").style("width") -
    //   margin.left -
    //   margin.right;
    // const graphHeight =
    //   d3.select(".barchart").style("height") -
    //   margin.top -
    //   margin.bottom;

    // const svg = d3
    //   .select(d3Chart.current)
    //   .attr("width", graphWidth + margin.left + margin.right)
    //   .attr("height", graphHeight + margin.top + margin.bottom);

    // const x = d3
    //   .scaleBand()
    //   .domain(d3.range(predictions.length))
    //   .range([margin.left, graphWidth - margin.right]);

    // svg
    //   .append("g")
    //   .attr("transform", "translate(0, " + graphHeight + ")")
    //   .call(
    //     d3
    //       .axisBottom(x)
    //       .tickFormat((i) => predictions[i].boot)
    //       .tickSizeOuter(0)
    //   );

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
const jordanBoot = predictions.filter(jordanBoot => jordanBoot.boot.toLowerCase() === 'jordan')
console.log(jordanBoot)

// Finding number of flag votes
const jordanFlag = predictions.filter(jordanFlag => jordanFlag.flag.toLowerCase() === 'jordan')
console.log(jordanFlag)



const [data] = useState([jordanBoot, jordanFlag])
const svgRef = useRef()

useEffect(() => {
// set up svg container
const w = 400
const h = 300
const svg = d3.select(svgRef.current)
                .attr('width', w)
                .attr('height', h)
                .style('overflow', 'visable')
                .style('margin-top', '75px')

// set the scaling
const xScale = d3.scaleBand()
                    .domain(jordanBoot.map((val, i) => i))
                    .range([0, w])
                    .padding(0.5)
const yScale = d3.scaleLinear()
                    .domain([0, h])
                    .range(h, 0)

// setting the axes
const xAxis = d3.axisBottom(xScale)
                .ticks(jordanBoot.length)
const yAxis = d3.axisLeft(yScale)
                .ticks(5)
svg.append('g')
    .call(xAxis)
    .attr('transform', `translate(0, ${h})`)
svg.append('g')
    .call(yAxis)

// setting the svg data
svg.selectAll('.bar')
    .data(data)
    .join('rect')
        .attr('x', (v, i) => xScale(i))
        .attr('y', yScale)
        .attr('width', xScale.bandwidth())
        .attr('height', val => h - yScale(val))

}, [data])
console.log(svgRef)

  return (
    <div className="barchart">
      <svg className="graph-svg" ref={svgRef}></svg>
    </div>
  );
};

export default Graph;
