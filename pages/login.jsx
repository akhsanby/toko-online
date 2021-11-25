import Link from "next/link";
import { Card, Button, Form } from "react-bootstrap";

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card
        style={{ width: "30rem" }}
        className="shadow-lg p-3 mb-5 bg-body rounded"
      >
        <Card.Body>
          <div className="text-center mb-4">
            <Card.Title className="fs-2 fw-bold">Login</Card.Title>
            <Card.Text className="fs-6">
              Enter Login details to get access
            </Card.Text>
          </div>
          <Form className="mx-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">
                Username Or Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Username / Email Address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Form.Group
                className="mb-3 fw-bold"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Keep Me Logged In" />
              </Form.Group>
              <a href="#" className="text-decoration-none text-danger">
                Forgot Password?
              </a>
            </div>
            <div className="mt-4 d-flex justify-content-between align-items-center">
              <div>
                Don’t have an account?{" "}
                <Link href="/register">
                  <a className="text-decoration-none text-danger">Sign Up</a>
                </Link>{" "}
                here
              </div>
              <Button variant="danger" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
