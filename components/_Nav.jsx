import { Nav, Row, Col } from "react-bootstrap";

export default function _Nav() {
  return (
    <Row className="d-flex align-items-center">
      <Col className="d-flex justify-content-start" xl={5} lg={5} md={12}>
        <h1 className="font-roboto">Latest Published items</h1>
      </Col>
      <Col className="d-flex justify-content-end" xl={7} lg={7} md={12}>
        <Nav className="gap-2" variant="pills" defaultActiveKey="link-1">
          <Nav.Item>
            <Nav.Link eventKey="link-1">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Women's</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Men's</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">Electronics</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5">Jewelery</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
}
