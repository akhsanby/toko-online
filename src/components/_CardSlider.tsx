import { Swiper, SwiperSlide } from "swiper/react";
import _Card from "./_Card";
import styles from "../scss/CardSlider.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay]);

export default function _CardSlider() {
  return (
    <>
      <h1 className={styles.title}>Best Selling Ever</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 576px
          576: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <SwiperSlide key={i}>
            <_Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
