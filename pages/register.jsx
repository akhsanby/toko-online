import Link from "next/link";
import { Card, Form } from "react-bootstrap";
import styles from "../scss/Login.module.scss";

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 font-roboto">
      <Card
        style={{ width: "30rem" }}
        className="shadow-lg p-3 bg-body rounded"
      >
        <Card.Body>
          <div className="text-center mb-4">
            <Card.Title className="fs-2 fw-bold">Register</Card.Title>
            <Card.Text className="fs-6">
              Create your account to get full access
            </Card.Text>
          </div>
          <Form className="mx-4">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Full Name</Form.Label>
              <Form.Control
                className={styles.form_control}
                type="text"
                placeholder="Enter Full Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Email Address</Form.Label>
              <Form.Control
                className={styles.form_control}
                type="text"
                placeholder="Enter Email Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                className={styles.form_control}
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Confirm Password</Form.Label>
              <Form.Control
                className={styles.form_control}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <div className="mt-4 d-flex justify-content-between align-items-center">
              <div>
                Already have an account?{" "}
                <Link href="/login">
                  <a className={styles.tag_a_link}>Login</a>
                </Link>{" "}
                here
              </div>
              <button className={styles.custom_btn} type="button">
                Register
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
