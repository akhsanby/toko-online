import { Product } from "@/types";
import { useRouter } from "next/router";
import { Card, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "../scss/Card.module.scss";

interface _CardProps {
  product: Product;
}

export default function _Card({ product }: _CardProps) {
  const { push } = useRouter();

  return (
    <Card
      onClick={() => push(`/${product.name}?id=${product._id}`)}
      className={styles.card}
    >
      <Card.Img variant="top" src={product.image} />
      <Card.Body className={styles.card_body}>
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-bottom">{product.name}</Tooltip>}
        >
          <Card.Title className={styles.card_title}>{product.name}</Card.Title>
        </OverlayTrigger>
        <Card.Subtitle className="text-muted">{product.category}</Card.Subtitle>
        <div className="text-red mt-2 fs-6 d-flex flex-nowrap">
          ${product.price}
        </div>
        <Row className="mt-2">
          <Col>
            <i className="bi bi-star-fill"></i>{" "}
            <span>{product.rating.rate}</span>
          </Col>
          <Col>
            <span className="text-red">{product.sold}</span> sold
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
