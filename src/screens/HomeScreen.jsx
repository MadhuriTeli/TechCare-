import React, { useEffect, useState } from "react";
import PatientsList from "../components/PatientsList";
import LabResult from "../components/LabResult";
import DiagnosticList from "../components/DiagnosticList";
import DiagnosisHistory from "../components/DiagnosisHistory";

const HomeScreen = () => {
  const [patient, setPatient] = useState([]);
  const [jData, setJData] = useState({});

  useEffect(() => {
    // Replace with your API endpoint
    const apiUrl = "https://fedskillstest.coalitiontechnologies.workers.dev";

    // Replace with your Basic Authentication credentials
    let username = "coalition";
    let password = "skills-test";
    const basicAuthHeader = "Basic " + btoa(username + ":" + password);

    const fetchPatient = async () => {
      const data = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: basicAuthHeader,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setPatient(data);
          setJData(data[3]);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
    fetchPatient();
  }, []);

  return (
    <>
      <DiagnosisHistory history={jData}/>
      <DiagnosticList list={jData}/>
      <PatientsList patientsList={patient}/>
      <LabResult result={jData}/>
    </>
  );
};

export default HomeScreen;
