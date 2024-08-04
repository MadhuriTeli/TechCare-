import React from "react";
import { ListGroup } from "react-bootstrap";
import { Search, HorizontalMenu } from "../assets/Icons/index.js";
const PatientsList = ({patientsList}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-div">
        <div className="sidebar-heading">
          <div className="sidebar-title">
            Patient</div>
            <span className="actions">
                <Search />
            </span>
        </div>

        <ListGroup style={{ background: "#ffffff"}}>
          {patientsList?.map((patient) => (
            <div key={patient.name} className="patient-container">
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="profile-pic"
              />
              <div className="patient-info">
                <div className="patient-name">{patient.name}</div>
                <div className="patient-details">
                  {patient.gender}, {patient.age}
                </div>
              </div>
              <div className="actions">
                <div className="dots">
                  <i>
                    <HorizontalMenu />
                  </i>
                </div>
              </div>
            </div>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default PatientsList;
