import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Card, Form } from "react-bootstrap";
import styles from "../scss/Login.module.scss";
import { signUp } from "@/config/api";

export default function Login() {
  const { push } = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confPassword, setConfPassword] = useState<string>("");

  const register = (e: SyntheticEvent) => {
    e.preventDefault();
    if (password !== confPassword) return alert("password dont match");

    signUp({ name, email, password })
      .then(() => {
        alert("sukses register");
        push("/login");
      })
      .catch((e) => alert(e.message));
  };

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
          <Form onSubmit={(e) => register(e)} className="mx-4">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Full Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={styles.form_control}
                type="text"
                placeholder="Enter Full Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Email Address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={styles.form_control}
                type="text"
                placeholder="Enter Email Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={styles.form_control}
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Confirm Password</Form.Label>
              <Form.Control
                onChange={(e) => setConfPassword(e.target.value)}
                value={confPassword}
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
              <button className={styles.custom_btn} type="submit">
                Register
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
