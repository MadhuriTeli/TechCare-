import React from "react";
import {
  BirthIcon,
  FemaleIcon,
  InsuranceIcon,
  PhoneIcon,
} from "../assets/Icons";

const FullProfile = ({ jData }) => {
  console.log(jData);

  function convertDate(dateString) {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${monthName} ${day}, ${year}`;
  }

  return (
    <>
      <div className="profile-container">
        <img src={jData.profile_picture} className="profile-picture" />
        <div className="profile-name">{jData.name}</div>
        <div className="profile-info-container">
          <div className="profile-data">
            <BirthIcon style={{ background: "#ffffff"}} />
            <div className="profile-info">
              <div className="name">Date Of Birth</div>
              <div className="title">{convertDate(jData.date_of_birth)}</div>
            </div>
          </div>

          <div className="profile-data">
            <FemaleIcon />
            <div className="profile-info">
              <div className="name">Gender</div>
              <div className="title">{jData.gender}</div>
            </div>
          </div>

          <div className="profile-data">
            <PhoneIcon />
            <div className="profile-info">
              <div className="name">Contact Info.</div>
              <div className="title">{jData.emergency_contact}</div>
            </div>
          </div>

          <div className="profile-data">
            <PhoneIcon />
            <div className="profile-info">
              <div className="name">Emergency Contacts</div>
              <div className="title">{jData.date_of_birth}</div>
            </div>
          </div>
          <div className="profile-data">
            <InsuranceIcon />
            <div className="profile-info">
              <div className="name">Insurance Provider</div>
              <div className="title">{jData.insurance_type}</div>
            </div>
          </div>
        </div>
        <div className="info-button"><span>Show All Information</span></div>
      </div>
    </>
  );
};

export default FullProfile;
