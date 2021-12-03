import { Swiper, SwiperSlide } from "swiper/react";
import _Card from "./_Card";
import styles from "../scss/CardSlider.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper";
import useProduct from "@/lib/useProduct";
import { Product } from "@/types";

// install Swiper modules
SwiperCore.use([Autoplay]);

export default function _CardSlider() {
  const { products } = useProduct();
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
        {products.map((product: Product) => (
          <SwiperSlide key={product._id}>
            <_Card product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
