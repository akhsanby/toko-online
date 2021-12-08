import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../scss/Navbar.module.scss";
import useAuth from "@/lib/useAuth";

export default function _Navbar() {
  const { push } = useRouter();
  const { logout } = useAuth();
  return (
    <div>
      <Navbar className={styles.custom_admin_navbar}>
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#" className={styles.custom_navbar_brand}>
            99Online
          </Navbar.Brand>
          <Nav className={styles.custom_nav_3}>
            <Link href="/manage">
              <a className="nav-link">Manage Stock</a>
            </Link>
            <Link href="/reports">
              <a className="nav-link">Report Of Sales</a>
            </Link>
            <button
              onClick={async () => {
                const done: any = await logout();
                if (!done?.error) push("/");
              }}
              className={styles.custom_btn_style}
            >
              Logout
            </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
