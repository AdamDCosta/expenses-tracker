import React from "react";
import "./Chart.scss";
import ChartBar from "../Chart/ChartBar/ChartBar";

const Chart = (props) => {
  const { dataPoints } = props;

  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
