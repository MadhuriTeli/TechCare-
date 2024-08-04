import React from "react";
import profile from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";

const UserProfile = () => {
  return (
    <>
      <div className="user-details">
        <img src={profile} className="profile-pic" />
        <div style={{ background: "#ffffff"}}>
          <div className="name">Dr. Jose Simmons</div>
          <div className="title">General Practitioner</div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
