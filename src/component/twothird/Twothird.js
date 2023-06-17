import React from "react";
import Workexp from "../workexp/Workexp";
import Education from "../education/Education";

const Twothird = () => {
  return (
    <>
      <div className="w3-twothird">
        <Workexp />
        <Education />
      </div>
    </>
  );
};

export default Twothird;
