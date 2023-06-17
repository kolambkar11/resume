import React from "react";
import profileImg from "../../assets/profile-photo.jpeg";
import cehLogo from "../../assets/CEH-logo.png";

const Cardimage = () => {
  return (
    <>
      <div className="w3-display-container" data-aos="fade-up">
        <img src={profileImg} alt="Ashutosh Kolambkar" style={{ width: "100%" }} data-aos="fade-up" />
        <img src={cehLogo} style={{ width: "20%", position: "absolute", top: 0, left: 0 }} alt="Ashutosh Kolambkar" data-aos="fade-up" className="aos-init aos-animate" />
        <div className="w3-display-bottomleft w3-container w3-text-white" data-aos="fade-up">
          <h2>Ashutosh Kolambkar</h2>
        </div>
      </div>
    </>
  );
};

export default Cardimage;
