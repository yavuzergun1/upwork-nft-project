import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./bear-slider.scss";

export default () => {
  return (
    <div className="bear-background">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      className="bear-swiper"
    >
      
        <SwiperSlide className="bear-slide">
          <img
            src={require(`../../assets/png/HONG HOT-FACE.png`)}
            className="yellow"
            alt=""
          />
          <p className="bear-info">
            HONG HOT <span>THE NEWS HUNTER</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="bear-slide">
          <img
            src={require(`../../assets/png/Group 1000002558.png`)}
            className="green"
            alt=""
          />
          <p className="bear-info">
            PUNG PU <span>THE GANG LEADER</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="bear-slide">
          <img
            src={require(`../../assets/png/BIETTUOT-FACE.png`)}
            className="blue" id="blueb"
            alt=""
          />
          <p className="bear-info">
            BIET TUOT <span>The Encyclopedia</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="bear-slide">
          <img
            src={require(`../../assets/png/PONG PAY-FACE.png`)}
            className="pink"
            alt=""
          />
          <p className="bear-info">
            PONG PAY <span>The Art Enthusiast</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="bear-slide">
          <img
            src={require(`../../assets/png/TAROTARO-FACE 2.png`)}
            className="purple" id="purpleb"
            alt=""
          />
          <p className="bear-info">
            TARO TARO <span>The Magician</span>
          </p>
        </SwiperSlide>
    </Swiper>
      </div>
  );
};
