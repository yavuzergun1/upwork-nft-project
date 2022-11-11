import React from 'react'

function Vertical() {
  return (
    <div className="vertical-container">
      <img
        style={{ whiteSpace: "nowrap" }}
        src={require(`../../assets/png/journey 1 (1).png`)}
        className="journey"
      />
      <img
        // ref={spaceRef}
        style={{ whiteSpace: "nowrap" }}
        src={require(`../../assets/png/SPACESHIP 1.png`)}
        className="spaceship"
      />
      <img
        style={{ whiteSpace: "nowrap" }}
        src={require(`../../assets/png/Group 1000002660.png`)}
        className="line"
      />
      <img
        style={{ whiteSpace: "nowrap" }}
        src={require(`../../assets/png/Component 1.png`)}
        className="component1"
      />
      <img
        style={{ whiteSpace: "nowrap" }}
        src={require(`../../assets/png/Component 2.png`)}
        className="component2"
      />
      <img
        style={{ whiteSpace: "nowrap" }}
        src={require(`../../assets/png/Component 3.png`)}
        className="component3"
      />
      <img
        style={{ whiteSpace: "nowrap" }}
        src={require(`../../assets/png/Component 4.png`)}
        className="component4"
      />
      <img
        style={{ whiteSpace: "nowrap" }}
        src={require(`../../assets/png/Ellipse 457.png`)}
        className="endLine"
      />
    </div>
  );
}

export default Vertical