import React, { useState, useRef, useEffect } from "react";
import BearSlider from "../../components/bear-slider/Bear-slider";
import CuteBearsSlider from "../../components/cute-bears-slider/CuteBearsSlider";
import Horizontal from "../../components/horizontal/Horizontal";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import SecondCuteBearSlider from "../../components/second-cuteBear-slider/SecondCuteBearSlider";
import Vertical from "../../components/vertical/Vertical";
import "./home.scss";

function Home() {
  const [showBears, setShowBears] = useState(false);
  const [isDesktop, setIsDesktop] = useState();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  console.log(windowSize);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    if (windowSize.innerWidth <= 1100) {
      setIsDesktop(false);
    }
    if (windowSize.innerWidth > 1100) {
      setIsDesktop(true);
    }
    window.addEventListener("scroll", function () {
      // console.log(window.scrollY);
      if (window.scrollY > 10) {
        setShowBears(true);
      } else {
        setShowBears(false);
      }
    });
    console.log(isDesktop);
  }, [windowSize]);

  return (
    <div className="home-body">
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
        <div className={showBears ? "animated-bears-container" : "bears-none"}>
          <img
            src={require(`../../assets/png/BEAR GANG-0610 1.png`)}
            alt=""
            className="animated-bears"
          />
        </div>
      </div>

      <div className="home-second">
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
        <CuteBearsSlider />
        <SecondCuteBearSlider />
        <img src={require(`../../assets/png/BEAR GANG DONG CHU 1.png`)} />
      </div>
      <div className="home-fourth">
     { isDesktop ? <Horizontal /> : <Vertical/> }
      </div>
      <div className="home-fifth">
        <div className="fifth-header">
          <img src={require(`../../assets/png/OUR CREW.png`)} />
        </div>
        <div className="fifth-body-first">
          <div className="bear-cards-container">
            <img
              src={require(`../../assets/png/Group 1000002593.png`)}
              className="bear-cards"
            />
            <img
              src={require(`../../assets/png/Group 1000002594.png`)}
              className="bear-cards"
            />
            <img
              src={require(`../../assets/png/Group 1000002588.png`)}
              className="bear-cards"
            />
            <img
              src={require(`../../assets/png/Group 1000002590.png`)}
              className="bear-cards"
            />
            <img
              src={require(`../../assets/png/Group 1000002592.png`)}
              className="bear-cards"
            />
          </div>
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
        </div>
        <div className="home-sixth">
          <img
            src={require(`../../assets/png/PONG PAY-FACE (1).png`)}
            className="pong-pay"
          />
          <img
            src={require(`../../assets/png/Vector (5).png`)}
            className="vector-5"
          />
          <img
            src={require(`../../assets/png/Group 76198.png`)}
            className="bear-gang"
          />
        </div>
        <footer>
          <div className="footer-first">
            <div className="footer-first-left">
              <p>About</p>
              <p>Blog</p>
              <p>Press Kit</p>
            </div>
            <img src={require(`../../assets/png/BEAR-LOGO.png`)} />
            <div className="footer-first-right">
              <p>Team</p>
              <p>FAQ</p>
              <p>Support</p>
            </div>
          </div>
          <img
            src={require(`../../assets/png/Divider.png`)}
            className="footer-divider"
          />
          <div className="footer-second">
            <div className="logo-container">
              <img src={require(`../../assets/png/Group 1000002657.png`)} />
              <img src={require(`../../assets/png/Group 1000002658.png`)} />
              <img src={require(`../../assets/png/Group 1000002656.png`)} />
              <img src={require(`../../assets/png/Group 1000002655.png`)} />
              <img src={require(`../../assets/png/Group 1000002654.png`)} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
