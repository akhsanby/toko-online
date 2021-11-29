import { Container, Table, Form, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { AdminLayout } from "../components/Layout";
import styles from "../scss/Manage.module.scss";

export default function Manage() {
  return (
    <AdminLayout>
      <Container className="my-4 font-roboto">
        <h1>Manage Stock</h1>
        <Table hover className="my-4">
          <thead>
            <tr>
              <th>Name Product</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Row>
                  <Col lg={2}>
                    <Image
                      src="https://placeimg.com/640/480/people"
                      width={200}
                      height={200}
                    />
                  </Col>
                  <Col lg={10}>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere, obcaecati! Laborum voluptatum quidem odio suscipit
                      nam nisi sunt a hic.
                    </p>
                    <span className="text-muted">Men Clothing</span>
                  </Col>
                </Row>
              </td>
              <td className={styles.custom_input}>
                <Form.Control type="text" />
              </td>
              <td className="align-middle">
                <button className={styles.custom_btn}>Update</button>
              </td>
            </tr>
            <tr>
              <td>
                <Row>
                  <Col lg={2}>
                    <Image
                      src="https://placeimg.com/640/480/people"
                      width={200}
                      height={200}
                    />
                  </Col>
                  <Col lg={10}>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere, obcaecati! Laborum voluptatum quidem odio suscipit
                      nam nisi sunt a hic.
                    </p>
                    <span className="text-muted">Women Clothing</span>
                  </Col>
                </Row>
              </td>
              <td className={styles.custom_input}>
                <Form.Control type="text" />
              </td>
              <td className="align-middle">
                <button className={styles.custom_btn}>Update</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </AdminLayout>
  );
}
