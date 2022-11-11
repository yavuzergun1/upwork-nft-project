import { useEffect, useRef, useState } from "react";
import "./horizontal.scss";

function Horizontal() {
  // let xScroll = useRef();

  // useEffect(() => {
  //   const ship = xScroll.current;

  //   if (window.outerWidth > 1400) {
  //     window.addEventListener("scroll", function () {
  //       console.log(window.scrollY);
  //       if (window.scrollY < 3022 || window.scrollY > 4156) {
  //         ship.style.transform = "translate(0px)";
  //         console.log(window.scrollY);
  //       } else {

  //         console.log("deltay", window.deltaY);
  //         ship.scrollLeft += 20
  //         console.log("scrollleft",ship.scrollLeft);
  //         ship.style.transform = `translate(-${window.scrollY- 3222}px )`;
  //         console.log("style", ship.style.left);
  //       }
  //     });
  //   }
  // }, []);

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

  const elRef = useRef();
  const spaceRef = useRef();
  useEffect(() => {
    const element = elRef.current;
    const ship = spaceRef.current;
    if (element) {
      const onWheel = (e) => {
        console.log(element.scrollLeft);
        if (element.scrollLeft < 1390) {
          ship.style.transform = "translate(0px)";
          ship.style.transition = "1s";
        }
        if (element.scrollLeft > 1390) {
          ship.style.transform = "translate(210%)";
          ship.style.transition = "1s";
        }
          if (element.scrollLeft > 2325) {
            ship.style.transform = "translate(590%)";
            ship.style.transition = "1s";
        }
          if (element.scrollLeft > 3000) {
            ship.style.transform = "translate(950%)";
            ship.style.transition = "1s";
          }
          if (element.scrollLeft > 4100) {
            ship.style.transform = "translate(1320%)";
            ship.style.transition = "1s";
          }
        if (element.scrollLeft >= 4800 && e.deltaY > 0) {
          return () => element.removeEventListener("wheel", onWheel);
        }
        if (element.scrollLeft === 0 && e.deltaY < 0) {
          return () => element.removeEventListener("wheel", onWheel);
        }
        if (e.deltaY == 0) return;
        e.preventDefault();
        element.scrollTo({
          left: element.scrollLeft + e.deltaY,
          behavior: "auto",
        });
      };
      element.addEventListener("wheel", onWheel);
      return () => element.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div
      className="horizontal-container"
      style={{ overflow: "auto" }}
      ref={elRef}
    >
      {/* <div className="horizontal-background"> */}
        <img
          style={{ whiteSpace: "nowrap" }}
          src={require(`../../assets/png/journey 1 (1).png`)}
          className="journey"
        />
        <img
          ref={spaceRef}
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
      {/* </div> */}
    </div>
  );
}

export default Horizontal;
