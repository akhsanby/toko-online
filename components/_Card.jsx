import { Card, Row, Col } from "react-bootstrap";

export default function _Card() {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src="https://placeimg.com/300/300/people" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>Card Subtitle</Card.Subtitle>
        <Row className="mt-3 d-flex align-items-center">
          <Col sm={7} className="pe-0">
            <span className="d-block">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </span>
            <span className="d-block fs-7">
              (<span className="text-red">20</span> review)
            </span>
          </Col>
          <Col sm={5} className="text-red fw-bold fs-5 ps-0">
            $5000
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
