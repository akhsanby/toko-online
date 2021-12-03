import { Layout } from "../components/Layout";
import _Carousel from "../components/_Carousel";
import _Card from "../components/_Card";
import _Nav from "../components/_Nav";
import _CardSlider from "../components/_CardSlider";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../scss/Home.module.scss";
import { NextPage } from "next";
import { useEffect } from "react";
import useProduct from "@/lib/useProduct";
import { Product } from "@/types";

const Home: NextPage = () => {
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Layout>
      <Container>
        <_Carousel />
        <div className="my-5">
          <_CardSlider />
        </div>
        <div className="mt-5">
          <_Nav />
          <Row className="mt-4">
            {products.length &&
              products.map((product: Product) => (
                <Col className="p-1" key={product._id} xs={6} md={4} lg={2}>
                  <_Card product={product} />
                </Col>
              ))}
          </Row>
        </div>
        <div className="my-4 d-flex justify-content-center">
          <button className={styles.custom_btn}>Browse More</button>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
