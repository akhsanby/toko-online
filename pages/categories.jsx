import { Layout } from "../components/Layout";
import _Jumbotron from "../components/_Jumbotron";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import _Card from "../components/_Card";
import styles from "../scss/Categories.module.scss";
import starIcon from "bootstrap-icons/icons/star-fill.svg";

export default function Categories() {
  return (
    <Layout>
      <Container>
        <_Jumbotron />
        <Row className="my-5">
          <Col lg={4}>
            <Card>
              <Card.Body className={styles.card_body_1}>
                <Card.Text>Filter Categories</Card.Text>
                <Form>
                  <Form.Check
                    label="electronics"
                    name="group1"
                    type="radio"
                    id="radio-1"
                    className="my-2"
                  />
                  <Form.Check
                    label="jewelery"
                    name="group1"
                    type="radio"
                    id="radio-2"
                    className="my-2"
                  />
                  <Form.Check
                    label="men's clothing"
                    name="group1"
                    type="radio"
                    id="radio-3"
                    className="my-2"
                  />
                  <Form.Check
                    label="women's clothing"
                    name="group1"
                    type="radio"
                    id="radio-4"
                    className="my-2"
                  />
                </Form>
              </Card.Body>
              <Card.Body className={styles.card_body_2}>
                <Card.Text>Filter By Rating</Card.Text>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="5">5 Star Rating</option>
                  <option value="4">4 Star Rating</option>
                  <option value="3">3 Star Rating</option>
                  <option value="2">2 Star Rating</option>
                  <option value="1">1 Star Rating</option>
                </Form.Select>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Row>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <Col className="mb-4" key={i} lg={4}>
                  <_Card />
                </Col>
              ))}
            </Row>
            <div className="text-center">
              <button type="button" className={styles.btn_custom}>
                Browse More
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
