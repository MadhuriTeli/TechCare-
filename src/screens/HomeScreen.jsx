import React, { useEffect, useState } from "react";
import PatientsList from "../components/PatientsList";
import LabResult from "../components/LabResult";
import DiagnosticList from "../components/DiagnosticList";
import DiagnosisHistory from "../components/DiagnosisHistory";
import Loader from "../components/Loader";
import FullProfile from "../components/FullProfile";

const HomeScreen = () => {
  const [patient, setPatient] = useState([]);
  const [jData, setJData] = useState({});
  const [jDataHistory, setJDataHistory] = useState([]);
  const [jHistoryObject, setJHistoryObject] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const apiUrl = "https://fedskillstest.coalitiontechnologies.workers.dev";
    let username = "coalition";
    let password = "skills-test";
    const basicAuthHeader = "Basic " + btoa(username + ":" + password);

    const fetchPatient = async () => {
      setIsLoading(true);
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
          setJDataHistory(data[3].diagnosis_history);
          setJHistoryObject(data[3].diagnosis_history[0]);
          setIsLoading(false);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
    fetchPatient();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="patients-tab-screen">
            <div className="row">
              <div className="column">
                <PatientsList patientsList={patient} />
              </div>
            </div>

            <div className="row">
              <div className="column">
                <DiagnosisHistory
                  jDataHistory={jDataHistory}
                  jHistoryObject={jHistoryObject}
                />
                <DiagnosticList list={jData}/>
              </div>
            </div>

            <div className="row">
              <div className="column">
                <FullProfile jData={jData} />
                <LabResult result={jData}  />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
