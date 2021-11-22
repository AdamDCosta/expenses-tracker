import React from "react";
import "./ChartBar.scss";

const ChartBar = (props) => {
  const { label, value, maxValue } = props;

  let chartBarFillHeight = "0%";

  if (maxValue > 0) {
    chartBarFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: chartBarFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
