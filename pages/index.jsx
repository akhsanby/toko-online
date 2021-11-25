import { Layout } from "../components/Layout";
import _Carousel from "../components/_Carousel";
import _Card from "../components/_Card";
import _Nav from "../components/_Nav";
import _CardSlider from "../components/_CardSlider";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Layout>
      <Container>
        <_Carousel />
        <div className="my-5">
          <_CardSlider />
        </div>
        <div className="my-5">
          <_Nav />
          <Row className="mt-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Col className="p-1" key={i} xs={6} lg={2}>
                <_Card />
              </Col>
            ))}
          </Row>
        </div>
        <div className="my-5 d-flex justify-content-center">
          <button className="btn button-custom-style">Browse More</button>
        </div>
      </Container>
    </Layout>
  );
}
