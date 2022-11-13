import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./BearCardsSwiper.scss";

export default () => {
   
   
   

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={2}
      navigation
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      className="bearCards-swiper"
      autoplay={{
        delay: 1000,
        pauseOnMouseEnter: "true",
        disableOnInteraction: false,
      }}
      loop
      speed={3000}
    >
      <SwiperSlide className="bearCards-slide">
        <img
          src={require(`../../assets/png/Group 1000002593.png`)}
          className="bearCards-cards"
        />
      </SwiperSlide>
      <SwiperSlide className="bearCards-slide">
        <img
          src={require(`../../assets/png/Group 1000002594.png`)}
          className="bearCards-cards"
        />
      </SwiperSlide>
      <SwiperSlide className="bearCards-slide">
        <img
          src={require(`../../assets/png/Group 1000002588.png`)}
          className="bearCards-cards"
        />
      </SwiperSlide>
      <SwiperSlide className="bearCards-slide">
        <img
          src={require(`../../assets/png/Group 1000002590.png`)}
          className="bearCards-cards"
        />
      </SwiperSlide>
      <SwiperSlide className="bearCards-slide">
        <img
          src={require(`../../assets/png/Group 1000002592.png`)}
          className="bearCards-cards"
        />
      </SwiperSlide>
    </Swiper>
  );
};
