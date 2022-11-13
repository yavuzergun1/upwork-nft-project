import React, { useState, useRef, useEffect } from "react";
import BearCardsSwiper from "../../components/bear-cards-swiper/BearCardsSwiper";
import BearCards from "../../components/bear-cards/BearCards";
import BearSlider from "../../components/bear-slider/Bear-slider";
import CuteBearsSlider from "../../components/cute-bears-slider/CuteBearsSlider";
import Horizontal from "../../components/horizontal/Horizontal";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import SecondCuteBearSlider from "../../components/second-cuteBear-slider/SecondCuteBearSlider";
import Vertical from "../../components/vertical/Vertical";
import { ReactComponent as Arrow } from "../../assets/png/Vector 205.svg";
import { IoIosArrowForward } from "react-icons/io";

import "./home.scss";

function Home() {
  const [showBears, setShowBears] = useState(false);
  const [isDesktop, setIsDesktop] = useState();
  const [isMobile, setisMobile] = useState();
  const [firstCardShow, setFirstCardShow] = useState(false);
  const [secondCardShow, setSecondCardShow] = useState(false);
  const [thirdCardShow, setThirdCardShow] = useState(false);
  const [fourthCardShow, setFourthCardShow] = useState(false);
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
    if (windowSize.innerWidth <= 680) {
      setisMobile(true);
    }
    if (windowSize.innerWidth > 680) {
      setisMobile(false);
    }

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
              <div className="buttons-container">
                <img
                  src={require(`../../assets/png/OWN A BEAR NOW CTA (1).png`)}
                />
                <img src={require(`../../assets/png/READ OUR NEWS CTA.png`)} />
              </div>
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
      <div className={isDesktop ? "horizontal" : "vertical"}>
        {isDesktop ? (
          <Horizontal />
        ) : (
          <Vertical windowSize={windowSize.innerWidth} />
        )}
      </div>
      <div className="home-fifth">
        <div className="fifth-header">
          <img src={require(`../../assets/png/OUR CREW.png`)} />
        </div>
        <div className="fifth-body-first">
          {!isMobile ? (
            <div className="bear-cards-container">
              <BearCards />
            </div>
          ) : (
            <BearCardsSwiper />
          )}
        </div>
        <div className="fifth-body-second">
          <h2>FAQ</h2>
          <div className="container p-first">
            <div className="p-left">
              <p>Who is the team behind Bear The Awesome News?</p>
              <p>
                We are QBA Studio, a collective of tech-savvy individuals that
                aims to contribute to the new future of entertainment.
              </p>
            </div>
            <div
              className={
                firstCardShow ? "arrow-container down" : "arrow-container"
              }
              onClick={() => setFirstCardShow(!firstCardShow)}
            >
              <IoIosArrowForward
                className={firstCardShow ? "arrow-down" : "arrow"}
              />
            </div>
          </div>
          <div className="container p-second">
            <p>What makes The Bear Gang so unique?</p>
            <div
              className={
                secondCardShow ? "arrow-container down" : "arrow-container"
              }
              onClick={() => setSecondCardShow(!secondCardShow)}
            >
              <IoIosArrowForward
                className={secondCardShow ? "arrow-down" : "arrow"}
              />
            </div>
          </div>
          <div className="container p-third">
            <p>What is the total supply for the Bear collection? </p>
            <div
              className={
                thirdCardShow ? "arrow-container down" : "arrow-container"
              }
              onClick={() => setThirdCardShow(!thirdCardShow)}
            >
              <IoIosArrowForward
                className={thirdCardShow ? "arrow-down" : "arrow"}
              />
            </div>
          </div>
          <div className="container p-fourth">
            <p>What do you call a bear without any teeth?</p>
            <div
              className={
                fourthCardShow ? "arrow-container down" : "arrow-container"
              }
              onClick={() => setFourthCardShow(!fourthCardShow)}
            >
              <IoIosArrowForward
                className={fourthCardShow ? "arrow-down" : "arrow"}
              />
            </div>
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
          {isMobile ? (
            <img
              src={require(`../../assets/png/Group 76198 (1).png`)}
              className="bear-gang"
            />
          ) : (
            <img
              src={require(`../../assets/png/Group 76198.png`)}
              className="bear-gang"
            />
          )}
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
