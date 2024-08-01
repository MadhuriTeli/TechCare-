import React from "react";
import { Table } from "react-bootstrap";

const DiagnosticList = ({list}) => {
  return (
    <>
      <div className="table-container">
        <div>
          <div className="heading">DiagnosticList</div>
          <Table responsive>
            <thead>
              <tr className="table-heading">
                <th>Problem/Diagnosis</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {list.diagnostic_list?.map((diagnostic) => (
                <tr key={diagnostic.name}>
                  <td>{diagnostic.name}</td>
                  <td>{diagnostic.description}</td>
                  <td>{diagnostic.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default DiagnosticList;
