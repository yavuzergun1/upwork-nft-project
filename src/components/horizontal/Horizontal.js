import { useEffect, useRef } from 'react';
import "./horizontal.scss"

function Horizontal() {
  let xScroll= useRef()
  useEffect(() => {
    if (window.outerWidth > 1400) {
      window.addEventListener("scroll", function () {
         console.log(window.scrollY);
        if (window.scrollY < 3422 || window.scrollY > 4356) {
          console.log("not here");
        } else {
          console.log("here");
        }
       });
     }
   }, []);
  return (
    <div className="horizontal-container">
      <img ref={xScroll} src={require(`../../assets/png/Frame 14.png`)} className="frame" />
    </div>
  );
}

export default Horizontal