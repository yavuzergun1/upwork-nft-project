import { useRef, useEffect } from "react";
import "./mobile.scss";
function Mobile() {

  const spaceMobileRef = useRef();
  useEffect(() => {
    const mobileShip = spaceMobileRef.current;
    window.addEventListener("scroll", function () {
        console.log(window.scrollY);
        if (window.scrollY < 2800) {
          mobileShip.style.top = "0px";
          mobileShip.style.transition = "2s";
        }
      if (window.scrollY > 2800) {
          mobileShip.style.top = "380px";
          mobileShip.style.transition= "2s"
        }
      if (window.scrollY > 3240) {
        mobileShip.style.top = "680px";
        mobileShip.style.transition = "2s";
        }
          if (window.scrollY > 3470) {
            mobileShip.style.top = "980px";
            mobileShip.style.transition = "2s";
        }
         if (window.scrollY > 3700) {
           mobileShip.style.top = "1200px";
           mobileShip.style.transition = "2s";
         }
    });
  }, []);

  return (
    <div>
      <div className="m-vertical-container">
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/journey 1 (1).png`)}
          className="m-journey"
        />
        <img
          ref={spaceMobileRef}
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

export default Mobile;
