import React from 'react'
import "./mobile.scss"
function Mobile() {
  return (
    <div>
      <div className="m-vertical-container">
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/journey 1 (1).png`)}
          className="m-journey"
        />
        <img
          // ref={spaceRef}
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/SPACESHIP 1.png`)}
          className="m-spaceship"
        />
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/Group 1000002669.png`)}
          className="m-bearGang"
        />
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/Group 1000002670.png`)}
          className="m-house"
        />
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/Group 1000002672.png`)}
          className="m-cms-spaceship"
        />
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/Group 1000002671.png`)}
          className="m-cms-bear"
        />
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/Group 1000002660 (2).png`)}
          className="m-line"
        />
      
      </div>
    </div>
  );
}

export default Mobile