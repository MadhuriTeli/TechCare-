import React , {useState} from "react";
import LineChart from "./LineChart";
import "chart.js/auto";

const DiagnosisHistory = ({history}) => {

    console.log(history.diagnosis_history)

//     const [chartData, setChartData] = useState({
//         labels: history.diagnosis_history?.map((data) => data.month), 
//         datasets: [
//           {
//             label: "BP",
//             data: history.diagnosis_history?.map((data) => data.blood_pressure.systolic.value),
//             backgroundColor: [
//               "rgba(75,192,192,1)",
//               "#50AF95",
//               "#f3ba2f",
//               "#2a71d0"
//             ],
//             borderColor: "black",
//             borderWidth: 2
//         }
//     ]
//   });

const data = {
    labels: history.diagnosis_history?.map((data) => data.month),
    datasets: [
    {
    label: "My First dataset",
    backgroundColor: "rgb(255, 99, 132)",
    borderColor: "rgb(255, 99, 132)",
    data: history.diagnosis_history?.map((data) => data.blood_pressure.systolic.value),
    },
    ],
    };

  return (
    <>
      <div>DiagnosisHistory</div>
      <LineChart chartData={data} />
    </>
  );
};

export default DiagnosisHistory;
