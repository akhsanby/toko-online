import { Layout } from "../components/Layout";
import _Carousel from "../components/_Carousel";
import _Card from "../components/_Card";
import _Nav from "../components/_Nav";
import _CardSlider from "../components/_CardSlider";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../scss/Home.module.scss";
import { NextPage } from "next";

const Home: NextPage = () => {
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
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Col className="p-1" key={i} xs={6} md={4} lg={2}>
                <_Card />
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
