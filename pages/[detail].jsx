import Image from "next/image";
import { Layout } from "../components/Layout";
import styles from "../scss/DetailProduct.module.scss";
import { Container, Card, Row, Col, Nav, InputGroup } from "react-bootstrap";

export default function DetailProduct() {
  return (
    <Layout>
      <Container>
        <Card className={styles.card_background}>
          <Row>
            <Col lg={4}>
              <Image
                src="https://placeimg.com/640/480/people"
                width={350}
                height={350}
                layout="fixed"
              />
            </Col>
            <Col lg={8}>
              <Card.Body className="ms-5">
                <Card.Title className="text-white fs-1 font-playfair-display">
                  Lorem ipsum dolor sit amet.
                </Card.Title>
                <Card.Text className="text-white fs-2 fw-bold mt-4">
                  $50.00
                </Card.Text>
                <Card.Text className={styles.icon_star}>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <span className="fs-7 text-white">( 120 Review )</span>
                </Card.Text>
                <Card.Text className="mt-4 d-flex align-items-center gap-2">
                  <button className={styles.btn_custom_1} type="button">
                    Add To Cart
                  </button>
                  <button className={styles.btn_custom_2} type="button">
                    <i className="bi bi-share-fill"></i>
                  </button>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <div className="mx-5 my-5">
          <Nav className="gap-3" variant="pills" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Description</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Review</Nav.Link>
            </Nav.Item>
          </Nav>
          <p className="mt-4 lh-lg fs-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            inventore officia numquam aliquam dolor vel a magni. Id qui eius
            dolorem ex porro recusandae nam dignissimos, explicabo facere!
            Numquam possimus cum ut sapiente aspernatur adipisci nemo, expedita
            repellat illo hic quisquam earum odit quia maiores aliquid
            temporibus quidem minus porro pariatur voluptates, neque quibusdam?
            Labore fugit odit quos veniam veritatis excepturi at eum delectus,
            illum unde officiis repellendus cum neque. Itaque, voluptate vero.
            Fuga rem laudantium beatae deleniti sit laboriosam, at reiciendis.
            Aspernatur repellendus soluta, numquam veritatis nam minus inventore
            molestiae temporibus corrupti neque praesentium saepe perspiciatis
            tenetur? Sit, vero!
          </p>
        </div>
      </Container>
    </Layout>
  );
}
