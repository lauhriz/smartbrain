import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = function () {
  return (
    <div className="ma4 mt0">
      <Tilt
        style={{ height: "150px", width: 150 }}
        className="Tilt br2 shadow-2 flex items-center justify-center"
      >
        <div>
          <img src={brain} alt="brain logo" style={{ height: 110 }} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
