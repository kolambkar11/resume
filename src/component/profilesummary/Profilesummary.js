import React from "react";

const Profilesummary = () => {
  return (
    <>
      <p>
        <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-blue-grey"></i>Web Developer | Linux | Researcher{" "}
      </p>
      <p>
        <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue-grey"></i>Mumbai, India
      </p>
      <p>
        <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue-grey"></i>
        <a href="mailto:kolambkarashutosh@gmail.com">kolambkarashutosh@gmail.com</a>
      </p>
      <p>
        <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-blue-grey"></i>
        <a href="tel:+918692805802" className="Blondie">
          +91 8692805802
        </a>
      </p>
      <hr></hr>
    </>
  );
};

export default Profilesummary;
