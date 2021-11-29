import Link from "next/link";
import { Card, Form } from "react-bootstrap";
import styles from "../scss/Login.module.scss";

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 font-roboto">
      <Card
        style={{ width: "30rem" }}
        className="shadow-lg p-3 mb-5 bg-body rounded-lg"
      >
        <Card.Body>
          <div className="text-center mb-4">
            <Card.Title className="fs-2 fw-bold">Login</Card.Title>
            <Card.Text className="fs-6">
              Enter Login details to get access
            </Card.Text>
          </div>
          <Form className="mx-4">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">
                Username Or Email Address
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Username / Email Address"
                className={styles.form_control}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                className={styles.form_control}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Form.Group className="mb-3 fw-bold">
                <Form.Check
                  type="checkbox"
                  className={styles.form_check}
                  label="Keep Me Logged In"
                />
              </Form.Group>
              <a href="#" className={styles.tag_a_link}>
                Forgot Password?
              </a>
            </div>
            <div className="mt-4 d-flex justify-content-between align-items-center">
              <div>
                Don’t have an account?{" "}
                <Link href="/register">
                  <a className={styles.tag_a_link}>Sign Up</a>
                </Link>{" "}
                here
              </div>
              <button className={styles.custom_btn} type="button">
                Login
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
