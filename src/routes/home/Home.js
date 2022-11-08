import React from "react";
import BearSlider from "../../components/navbar/bear-slider/Bear-slider";
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
        <img
          src={require(`../../assets/png/PLANET DO.png`)}
          className="first-planet-right"
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
      <img
        src={require(`../../assets/png/Vector (3).png`)}
        alt=""
        className="vector-3"
      />

      <div className="home-second">
        <img
          src={require(`../../assets/png/Vector (1).png`)}
          alt=""
          className="vector-1"
        />
        <img
          src={require(`../../assets/png/PLANET DO (1).png`)}
          className="second-planet-left"
        />
        <div className="second-body-container">
          <div className="second-body-left">
            <BearSlider />
          </div>
          <div className="second-body-right">
            <div className="who-are-we-container">
              <h2>WHO ARE WE?</h2>
              <p>
                We are The Paparazzi of The Galaxy, who travel across the galaxy
                to keep the Earth updated with the most exquisite, insightful
                and laughable news in entertainment, lifestyle, technology,
                gaming and
              </p>
                <p>
                  We save the humanity from being out-of-date, out-of-style and
                  most importantly, out-of-news.
                </p>
            </div>
          </div>
        </div>
        <img
          src={require(`../../assets/png/PLANET TIM (1).png`)}
          className="second-planet-right"
        />
      </div>
      <div className="home-third">
        <div className="third-header">
          <img src={require(`../../assets/png/9999 CUTE BEAR.png`)} />
        </div>
        <img src={require(`../../assets/png/BEAR GANG DONG CHU 1.png`)} />
        <img src={require(`../../assets/png/ANH GAU 1.png`)} />
        <img src={require(`../../assets/png/ANH GAU 2.png`)} />
        <img src={require(`../../assets/png/BEAR GANG DONG CHU 1.png`)} />
      </div>
      <div className="home-fourth"></div>
      <div className="home-fifth">
        <div className="fifth-header">
          <img src={require(`../../assets/png/OUR CREW.png`)} />
        </div>
        <div className="fifth-body-first">
          <img src={require(`../../assets/png/Group 1000002631.png`)} />
        </div>
        <h2>FAQ</h2>
        <div className="fifth-body-second">
          <div className="container p-first">
            <div className="p-left">
              <p>Who is the team behind Bear The Awesome News?</p>
              <p>
                We are QBA Studio, a collective of tech-savvy individuals that
                aims to contribute to the new future of entertainment.
              </p>
            </div>
            <img src={require(`../../assets/png/Group 35538.png`)} />
          </div>
          <div className="container p-second">
            <p>What makes The Bear Gang so unique?</p>
          </div>
          <div className="container p-third">
            <p>What is the total supply for the Bear collection? </p>
          </div>
          <div className="container p-fourth">
            <p>What do you call a bear without any teeth?</p>
          </div>
          <img
            src={require(`../../assets/png/BIETTUOT-FACE (2).png`)}
            className="right-bear"
          />
          <img
            src={require(`../../assets/png/Vector (5).png`)}
            className="vector-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
