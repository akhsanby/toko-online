import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "../scss/Navbar.module.scss";

export default function _Navbar() {
  return (
    <div>
      <Navbar expand="lg" variant="light" className={styles.custom_navbar_1}>
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3">
            99Online
          </Navbar.Brand>
          <Nav className={styles.custom_nav_1}>
            <Link href="#">
              <a className="nav-link fw-bold text-dark">FAQ</a>
            </Link>
            <Link href="/cart">
              <a className="nav-link">
                <i className="bi bi-cart p-0 position-relative">
                  <span className="bg-red position-absolute top-0 start-100 fs-7 translate-middle badge rounded-pill">
                    0
                  </span>
                </i>
              </a>
            </Link>
            <Link href="/login">
              <button className={styles.custom_btn_style}>Sign in</button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className={styles.custom_navbar_2}
      >
        <Container>
          <Navbar.Toggle
            className="ms-auto"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse
            className="justify-content-center"
            id="responsive-navbar-nav"
          >
            <Nav className={styles.custom_nav_2}>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
              <Link href={{ pathname: "/categories", query: { q: "women" } }}>
                <a className="nav-link">Women's</a>
              </Link>
              <Link href={{ pathname: "/categories", query: { q: "men" } }}>
                <a className="nav-link">Men's</a>
              </Link>
              <Link
                href={{ pathname: "/categories", query: { q: "electronics" } }}
              >
                <a className="nav-link">Electronics</a>
              </Link>
              <Link
                href={{ pathname: "/categories", query: { q: "jewelery" } }}
              >
                <a className="nav-link">Jewelery</a>
              </Link>
              <Link href="#">
                <a className="nav-link">About</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
