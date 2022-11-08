import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

function Home() {
  return (
    <div>
      <div className="home-first">
        <Navbar />
        <img src={require(`../../assets/PLANET TIM.png`)} className="first-planet-left" />
      </div>
    </div>
  );
}

export default Home;
