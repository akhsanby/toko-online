import { Product } from "@/types";
import { useRouter } from "next/router";
import { Card, Row, Col } from "react-bootstrap";
import styles from "../scss/Card.module.scss";

interface _CardProps {
  product: Product;
}

export default function _Card({ product }: _CardProps) {
  const { push } = useRouter();
  return (
    <Card onClick={() => push(`/${product._id}`)} className={styles.card}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body className={styles.card_body}>
        <Card.Title className="fw-bold fs-4">{product.name}</Card.Title>
        <Card.Subtitle className="text-muted">{product.category}</Card.Subtitle>
        <div sm={7} className="text-red mt-2 fs-5 d-flex flex-nowrap">
          {product.price}
        </div>
        <Row className="mt-2">
          <Col>
            <i className="bi bi-star-fill"></i>{" "}
            <span>{product.rating.rate}</span>
          </Col>
          <Col>
            <span className="text-red">{product.rating.count}</span> reviews
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
