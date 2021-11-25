import Image from "next/image";
import { Carousel } from "react-bootstrap";
import styles from "../scss/Carousel.module.scss";

export default function _Carousel() {
  return (
    <Carousel fade>
      <Carousel.Item className={styles.carousel_item_area}>
        <Image
          className="d-block w-100"
          src="https://placeimg.com/640/480/people"
          alt="First slide"
          layout="fill"
          quality="30"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <button type="button">Browse Store</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel_item_area}>
        <Image
          className="d-block w-100"
          src="https://placeimg.com/640/480/nature"
          alt="Second slide"
          layout="fill"
          quality="30"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <button type="button">Browse Store</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel_item_area}>
        <Image
          className="d-block w-100"
          src="https://placeimg.com/640/480/arch"
          alt="Third slide"
          layout="fill"
          quality="30"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <button type="button">Browse Store</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
