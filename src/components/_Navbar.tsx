import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import Link from "next/link";
import styles from "../scss/Navbar.module.scss";
import { _logout } from "@/config/api";
import { useGlobalState } from "@/pages/_app";

export default function _Navbar() {
  const { user } = useGlobalState();
  const logout = () => {
    _logout();
    // .then(() => setUser({}))
    // .catch((error) => alert(error));
  };

  return (
    <div>
      <Navbar expand="sm" className={styles.custom_navbar_1}>
        <Container>
          <Navbar.Brand href="#" className={styles.custom_navbar_brand}>
            99Online
          </Navbar.Brand>
          <Nav className={styles.custom_nav_1}>
            <div className={styles.custom_form_search}>
              <FormControl placeholder="Search product..." />
              <i className="bi bi-search"></i>
            </div>
            <Link href="/cart">
              <a className="nav-link">
                <i className="bi bi-cart p-0 position-relative">
                  <span className="bg-red position-absolute top-0 start-100 fs-7 translate-middle badge rounded-pill">
                    0
                  </span>
                </i>
              </a>
            </Link>
            {!user._id ? (
              <Link href="/login">
                <button className={styles.custom_btn_style}>Sign in</button>
              </Link>
            ) : (
              <button onClick={logout} className={styles.custom_btn_style}>
                Logout
              </button>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="sm" className={styles.custom_navbar_2}>
        <Container className="d-flex justify-content-center">
          <Nav className={styles.custom_nav_2}>
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link
              href={{
                pathname: "/categories",
                query: { q: "women's clothing" },
              }}
            >
              <a className="nav-link">Women's clothing</a>
            </Link>
            <Link
              href={{ pathname: "/categories", query: { q: "men's clothing" } }}
            >
              <a className="nav-link">Men's clothing</a>
            </Link>
            <Link
              href={{ pathname: "/categories", query: { q: "electronics" } }}
            >
              <a className="nav-link">Electronics</a>
            </Link>
            <Link href={{ pathname: "/categories", query: { q: "jewelery" } }}>
              <a className="nav-link">Jewelery</a>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
