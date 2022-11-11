import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "../cute-bears-slider/cuteBearsSlider.scss";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

export default () => {
  //   const slideImages = data.results.map((item) => item);
  // console.log(slideImages);
  return (
    // swiperjs
    <Swiper
      className="cute-bear-swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 0.001,
        pauseOnMouseEnter: "true",
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      // pagination={{
      //   // dynamicBullets: true,
      //   clickable: true,
      // }}
      loop
      spaceBetween={15}
      speed={20000}
      slidesPerView={6}
      // onSlideChange={() => console.log("slide change")}
      //   scrollbar={{ draggable: true, dragSize: 84 }}
      breakpoints={
        {
          // 1500: { slidesPerView: 7, spaceBetween: 5 },
          // 1390: { slidesPerView: 6, spaceBetween: 5 },
          // 1190: { slidesPerView: 5, spaceBetween: 5 },
          // 870: { slidesPerView: 4, spaceBetween: 5 },
          // 650: { slidesPerView: 3, spaceBetween: 5 },
          // 450: { slidesPerView: 2, spaceBetween: 5 },
        }
      }
    >
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/TONY BEAR v2.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/TONY BEAR.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/BLACK BEAR.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/ICE CREAM BEAR.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/MICHEAL NGU YEN v2.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/MICHEAL NGU YEN v3.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/BLACK BEAR.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/TONY BEAR v2.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/TONY BEAR.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/BLACK BEAR.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/ICE CREAM BEAR.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/MICHEAL NGU YEN v2.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/MICHEAL NGU YEN v3.png`)} alt="" />
      </SwiperSlide>
      <SwiperSlide className="cute-bear-slide">
        <img src={require(`../../assets/png/BLACK BEAR.png`)} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
