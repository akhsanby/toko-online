import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card, Form } from "react-bootstrap";
import styles from "../scss/Login.module.scss";
import { SyntheticEvent } from "react-transition-group/node_modules/@types/react";
import useAuth from "@/lib/useAuth";

export default function Login() {
  const { user, login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = (e: SyntheticEvent) => {
    e.preventDefault();
    login(email, password);
  };

  console.log(user);

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
          <Form onSubmit={(e) => signIn(e)} className="mx-4">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">
                Username Or Email Address
              </Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Username / Email Address"
                className={styles.form_control}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
              <button className={styles.custom_btn} type="submit">
                Login
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
