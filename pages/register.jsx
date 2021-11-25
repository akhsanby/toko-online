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
            <Card.Title className="fs-2 fw-bold">Register</Card.Title>
            <Card.Text className="fs-6">
              Create your account to get full access
            </Card.Text>
          </div>
          <Form className="mx-4">
            <Form.Group className="mb-3" controlId="formBasicFullName">
              <Form.Label className="fw-bold">Full Name</Form.Label>
              <Form.Control type="email" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label className="fw-bold">Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <div className="mt-4 d-flex justify-content-between align-items-center">
              <div>
                Already have an account?{" "}
                <Link href="/login">
                  <a className="text-decoration-none text-danger">Login</a>
                </Link>{" "}
                here
              </div>
              <Button variant="danger" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
