import React from "react";
import Mobile from "../mobile/Mobile";
import Tablet from "../tablet/Tablet";
import "./vertical.scss";

function Vertical({ windowSize }) {
    console.log("VERTICAL", windowSize);
  return (
      <div>
   { (windowSize < 505) ?  <Mobile/> : (windowSize < 960) ? <Tablet/> : null }
  </div>
  );
}

export default Vertical;
