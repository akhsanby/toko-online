import { useState, SyntheticEvent } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card, Form } from "react-bootstrap";
import { _signUp } from "@/config/api";
import useAuth from "@/lib/useAuth";
import styles from "@/scss/Login.module.scss";

const Register: NextPage = () => {
  const { push, replace } = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confPassword, setConfPassword] = useState<string>("");

  const { isAuthentic } = useAuth();
  if (isAuthentic) replace("/");

  const register = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (password !== confPassword) return alert("password dont match");

    const { e, error }: any = await _signUp({ name, email, password });

    if (e) console.log(e);
    if (error) return alert(error);

    alert("regiter success");
    push("/login");
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
};

export default Register;
