import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

function Home() {
  return (
    <div>
      <div className="home-first">
        <Navbar />
        <img
          src={require(`../../assets/png/PLANET TIM.png`)}
          className="first-planet-left"
        />
        <header>
          <h6>welcome to</h6>
          <img src={require(`../../assets/png/Group 1000002545.png`)} alt="" />
        </header>
        <div className="scroll-icon-container">
          <img src={require(`../../assets/png/Vector.png`)} alt="" />
          <p>scroll down to explore</p>
        </div>
      </div>
      <img src={require(`../../assets/png/Vector (3).png`)} alt="" className="vector-3" />
      <div className="home-second">
        <img src={require(`../../assets/png/Vector (1).png`)} alt="" className="vector-1"/>
      </div>
    </div>
  );
}

export default Home;
