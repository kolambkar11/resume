import React from "react";
import Cardimage from "../cardimage/Cardimage";
import Profilesummary from "../profilesummary/Profilesummary";
import Skills from "../skills/Skills";
import Language from "../language/Language";
import Hobbies from "../hobbies/Hobbies";
import Technicalpro from "../technicalpro/Technicalpro";
import Downloadresume from "../downloadresume/Downloadresume";

const Third = () => {
  return (
    <>
      <div className="w3-third w3-card">
        <Cardimage />
        <Profilesummary />
        <Skills />
        <Language />
        <Hobbies />
        <Technicalpro />
        <Downloadresume />
      </div>
    </>
  );
};

export default Third;
