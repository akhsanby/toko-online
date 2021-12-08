import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container, Table } from "react-bootstrap";
import { CartItem } from "@/types";
import useCart from "@/lib/useCart";
import useAuth from "@/lib/useAuth";
import _InputNumber from "@/components/_InputNumber";
import _Jumbotron from "@/components/_Jumbotron";
import { Layout } from "@/components/Layout";
import styles from "@/scss/Cart.module.scss";

export default function Cart() {
  const router = useRouter();
  const { isAuthentic } = useAuth();
  const { cart } = useCart();

  useEffect(() => {
    if (router && !isAuthentic) router.replace("/login");
  }, [router, isAuthentic]);

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
            {cart.map((product: CartItem) => (
              <tr key={product._id}>
                <td>
                  <Image
                    src={product.image || "https://placeimg.com/640/480/people"}
                    width={200}
                    height={200}
                    alt="image"
                  />
                  <div>
                    <p>{product.name}</p>
                    {product.quantity > product.stock && (
                      <p style={{ color: "red" }}>quantity tidak terpenuhi</p>
                    )}
                  </div>
                </td>
                <td className="fw-bold">${product.price}</td>
                <td>
                  <_InputNumber product={product} />
                </td>
                <td className="fw-bold">${product.quantity * product.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3">Subtotal</th>
              <th>${getTotal(cart)}</th>
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

const getTotal = (cart: CartItem[]) => {
  let result = 0;
  cart.forEach((el) => {
    result += el.price * el.quantity;
  });
  return result;
};
