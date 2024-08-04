import React, { useState } from "react";
import LineChart from "./LineChart";
import "chart.js/auto";

const DiagnosisHistory = ({ history }) => {
  const data = {
    labels: history.diagnosis_history?.map(
      (data) => ` ${data.month.slice(0, 3)}, ${data.year}`
    ),
    datasets: [
      {
        label: "Systolic",
        data: history.diagnosis_history?.map(
          (data) => data.blood_pressure.systolic.value
        ),
        borderColor: "#C26EB4",
        backgroundColor: "#C26EB4",
        pointRadius: 6,
        fill: false,
        cubicInterpolationMode: "monotone",
      },
      {
        label: "Diastolic",
        data: history.diagnosis_history?.map(
          (data) => data.blood_pressure.diastolic.value
        ),
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        pointRadius: 6,
        fill: false,
        cubicInterpolationMode: "monotone",
      },
    ],
  };

  return (
    <>
      <div className="diagnosisHistory-container">
        <div className="heading">DiagnosisHistory</div>
        <LineChart chartData={data}/>
      </div>
    </>
  );
};

export default DiagnosisHistory;
