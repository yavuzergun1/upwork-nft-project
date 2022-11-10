import { useEffect, useRef } from "react";
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

  
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "auto",
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
  
  return (
    <div
      className="horizontal-container"
      ref={elRef}
      style={{ overflow: "auto" }}
    >
      <img
        style={{ whiteSpace: "nowrap" }}
        src={require(`../../assets/png/Frame 14.png`)}
        className="frame"
      />
    </div>
  );
}

export default Horizontal;
