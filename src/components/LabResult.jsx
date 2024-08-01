import React from "react";
import { ListGroup } from "react-bootstrap";
import { Download } from "../assets/Icons/index.js";

const LabResult = ({result}) => {
  console.log(result.lab_results);
  return (
    <div className="sidebar">
      <div className="sidebar-div">
        <div className="heading">
          <div className="sidebar-title">
            Lab Results</div>  
        </div>

        <ListGroup>
          {result.lab_results?.map((result) => (
            <div key={result} className="patient-container">
            
              <div className="result-info">
                <div className="result-name">{result}</div>
          
              </div>
              <div className="actions">
                <div className="dots">
                  <i>
                    <Download />
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

export default LabResult;
