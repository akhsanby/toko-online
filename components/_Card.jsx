import { Card, Row, Col } from "react-bootstrap";
import styles from "../scss/Card.module.scss";

export default function _Card() {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src="https://placeimg.com/300/300/people" />
      <Card.Body className={styles.card_body}>
        <Card.Title className="fw-bold fs-4">Card Title</Card.Title>
        <Card.Subtitle className="text-muted">Card Subtitle</Card.Subtitle>
        <div sm={7} className="text-red mt-2 fs-5 d-flex flex-nowrap">
          Rp. 500
        </div>
        <Row className="mt-2">
          <Col>
            <i className="bi bi-star-fill"></i> <span>4.5</span>
          </Col>
          <Col>
            <span className="text-red">20</span> sold
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
