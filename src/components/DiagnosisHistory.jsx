import React from "react";
import LineChart from "./LineChart";
import "chart.js/auto";
import { Heart_Rate, Respiratory_Rate, Temperature, ArrowDown, ArrowUp } from "../assets/Icons";

const DiagnosisHistory = ({ jDataHistory, jHistoryObject }) => {

  if(jDataHistory === undefined) {return}
  if(jHistoryObject === undefined) {return}
  
  const respiratory_rate_value = jHistoryObject?.respiratory_rate?.value
  const respiratory_levels =jHistoryObject?.respiratory_rate?.levels;
  const heart_rate = jHistoryObject?.heart_rate?.value;
  const heart_levels =jHistoryObject?.heart_rate?.levels;
  const temperature = jHistoryObject?.temperature?.value;
  const temperature_levels =jHistoryObject?.temperature?.levels;
  
  const data = {
    labels: jDataHistory?.map(
      (data) => ` ${data.month.slice(0, 3)}, ${data.year}`
    ),
    datasets: [
      {
        label: "Systolic",
        data: jDataHistory?.map(
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
        data: jDataHistory?.map(
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


  const hrate = heart_levels === "Lower than Average" ?  <ArrowDown />  : <ArrowUp/>  ;
  return (
    <>
      <div style={{ background: "#ffffff"}} className="diagnosisHistory-container">
        <div className="heading">DiagnosisHistory</div>
        <LineChart chartData={data} />
        <div className="info-cards">
          <div className=" items respiratory_rate">
            <div className="card-content respiratory_rate">
              <Respiratory_Rate className="card-img respiratory_rate" />
              <div className="card-heading">Respiratory Rate</div>
              <div className="card-data"> {respiratory_rate_value} bpm</div>
              <div className="card-data-details">{respiratory_levels}</div>
              </div>
          </div>

          <div className=" items temperature">
          <div className="card-content temperature">
              <Temperature className="card-img temperature" />
              <div className="card-heading">Temperature</div>
              <div className="card-data"> {temperature} °F</div>
              <div className="card-data-details">{temperature_levels}</div>
              </div>
          </div>

          <div className="items heart_rate">
          <div className="card-content heart_rate">
              <Heart_Rate className="card-img heart_rate" />
              <div className="card-heading">Heart Rate</div>
              <div className="card-data"> {heart_rate} bpm</div>
              <div className="card-data-details">{hrate} { heart_levels}</div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosisHistory;
