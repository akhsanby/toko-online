import styles from "../scss/Cart.module.scss";
import { Layout } from "../components/Layout";
import {
  Container,
  Row,
  Col,
  FormControl,
  Table,
  InputGroup,
} from "react-bootstrap";
import Image from "next/image";
import _InputNumber from "../components/_InputNumber";
import _Jumbotron from "../components/_Jumbotron";

export default function Cart() {
  return (
    <Layout>
      <Container className="my-4">
        <_Jumbotron title="Cart" />
        <Table responsive>
          <thead className={styles.custom_table_head}>
            <tr>
              <th style={{ width: "40%" }}>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className={styles.custom_table_body}>
            <tr>
              <td>
                <Image
                  src="https://placeimg.com/640/480/people"
                  width={200}
                  height={200}
                  alt="image"
                />
                <p>Lorem ipsum dolor sit amet.</p>
              </td>
              <td className="fw-bold">$360</td>
              <td>
                <_InputNumber />
              </td>
              <td className="fw-bold">$360</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3">Subtotal</th>
              <th>$360</th>
            </tr>
          </tfoot>
        </Table>
        <div className={styles.btn_checkout}>
          <button>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      </Container>
    </Layout>
  );
}
