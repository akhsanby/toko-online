import { Layout } from "../components/Layout";
import _Jumbotron from "../components/_Jumbotron";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import _Card from "../components/_Card";
import styles from "../scss/Categories.module.scss";
import { useEffect } from "react";
import useProduct from "@/lib/useProduct";
import { Product } from "@/types";
import { useRouter } from "next/router";

export default function Categories() {
  const { getProducts, products, cleanUpProducts } = useProduct();
  const { query } = useRouter();

  useEffect(() => {
    if (query) getProducts(query.q);
    return cleanUpProducts;
  }, [getProducts, query]);

  return (
    <Layout>
      <Container>
        <_Jumbotron title="Product Category" />
        <Row className="my-5">
          <Col lg={4}>
            <Card className="mb-4">
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
                <Card.Text>Filter By Price</Card.Text>
                <div className="mb-2">
                  <Form.Control
                    size="sm"
                    type="number"
                    placeholder="MIN Price"
                  />
                  <span
                    className="bi bi-dash-lg mx-3"
                    style={{
                      fontSize: "1.2rem",
                      color: "black",
                    }}
                  ></span>
                  <Form.Control
                    size="sm"
                    type="number"
                    placeholder="MAX Price"
                  />
                </div>
                <button type="button">Apply</button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Row>
              {products.map((product: Product) => (
                <Col className="mb-4" key={product._id} lg={3} md={4} xs={6}>
                  <_Card product={product} />
                </Col>
              ))}
            </Row>
            {/* <div className="text-center">
              <button type="button" className={styles.btn_custom}>
                Browse More
              </button>
            </div> */}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}