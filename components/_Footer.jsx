import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "../scss/Footer.module.scss";

export default function _Footer() {
  return (
    <div className={styles.custom_footer}>
      <Container>
        <Row className="mb-5">
          <Col>
            <div className="fs-5 fw-bold">99Online</div>
            <div className="mt-4">
              Get the breathing space now, and we’ll extend your term at the
              other end year for go.
            </div>
            <div className="mt-2 d-flex gap-4">
              <button className={styles.button_outline_custom_style}>
                <i className="bi bi-facebook"></i>
              </button>
              <button className={styles.button_outline_custom_style}>
                <i className="bi bi-instagram"></i>
              </button>
              <button className={styles.button_outline_custom_style}>
                <i className="bi bi-linkedin"></i>
              </button>
              <button className={styles.button_outline_custom_style}>
                <i className="bi bi-youtube"></i>
              </button>
            </div>
          </Col>
          <Col>
            <p className="fs-5 fw-bold">Categories</p>
            <ul className={styles.custom_ul_li}>
              <li>
                <Link
                  href={{
                    pathname: "/categories",
                    query: { q: "women" },
                  }}
                >
                  <a>Women's</a>
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/categories",
                    query: { q: "men" },
                  }}
                >
                  <a>Men's</a>
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/categories",
                    query: { q: "electronics" },
                  }}
                >
                  <a>Electronics</a>
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/categories",
                    query: { q: "jewelery" },
                  }}
                >
                  <a>Jewelery</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col>
            <p className="fs-5 fw-bold">Site Map</p>
            <ul className={styles.custom_ul_li}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="d-flex pb-5 fw-bold justify-content-center align-items-center">
          Copyright ©2021 All rights reserved
        </div>
      </Container>
    </div>
  );
}
