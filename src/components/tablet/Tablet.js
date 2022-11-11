import { useRef, useEffect } from "react";
import "./tablet.scss";
function Tablet() {
  const spaceTabletRef = useRef();
  useEffect(() => {
    const tabletShip = spaceTabletRef.current;
    window.addEventListener("scroll", function () {
      console.log(window.scrollY);
      if (window.scrollY < 2995) {
        tabletShip.style.top = "350px";
        tabletShip.style.transition = "2s";
      }
      if (window.scrollY > 2995) {
        tabletShip.style.top = "620px";
        tabletShip.style.transition = "2s";
      }
      if (window.scrollY > 3450) {
        tabletShip.style.top = "850px";
        tabletShip.style.transition = "2s";
      }
      if (window.scrollY > 3700) {
        tabletShip.style.top = "1100px";
        tabletShip.style.transition = "2s";
      }
      if (window.scrollY > 3900) {
        tabletShip.style.top = "1400px";
        tabletShip.style.transition = "2s";
      }
    });
  }, []);

  return (
    <div>
      <div className="t-vertical-container">
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/journey 1 (1).png`)}
          className="t-journey"
        />
        <img
          ref={spaceTabletRef}
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/SPACESHIP 1.png`)}
          className="t-spaceship"
        />
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/Group 1000002669.png`)}
          className="t-bearGang"
        />
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/Group 1000002670.png`)}
          className="t-house"
        />
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/Group 1000002672.png`)}
          className="t-cms-spaceship"
        />
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/Group 1000002671.png`)}
          className="t-cms-bear"
        />
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/Group 1000002660 (3).png`)}
          className="t-line"
        />
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/Ellipse 457 (1).png`)}
          className="t-end"
        />
      </div>
    </div>
  );
}

export default Tablet;
