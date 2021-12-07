import { Container, Table, Form, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { AdminLayout } from "../components/Layout";
import styles from "../scss/Manage.module.scss";
import { GetServerSideProps, NextPage } from "next";
import { _getProducts } from "@/config/api";
import { Product } from "@/types";
import { useState, ChangeEvent } from "react";

interface ManageProps {
  data: Product[];
  error?: string;
  e?: any;
}

const Manage: NextPage<ManageProps> = ({ data, error, e }) => {
  if (error) alert(error);
  if (e) console.log(e);

  const [products, setProducts] = useState<Product[]>(data || []);

  const updateStock = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue: number = parseInt(e.target.value);
    products[index].stock = newValue;
    setProducts([...products]);
  };

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
            {products.map((product, index) => (
              <tr key={product._id}>
                <td>
                  <Row>
                    <Col lg={2}>
                      <Image
                        src={
                          product.image || "https://placeimg.com/640/480/people"
                        }
                        width={200}
                        height={200}
                      />
                    </Col>
                    <Col lg={10}>
                      <h2>{product.name}</h2>
                      <p>{product.description}</p>
                      <span className="text-muted">{product.category}</span>
                    </Col>
                  </Row>
                </td>
                <td className={styles.custom_input}>
                  <Form.Control
                    onChange={(e) => updateStock(e, index)}
                    value={product.stock}
                    type="number"
                  />
                </td>
                <td className="align-middle">
                  <button className={styles.custom_btn}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </AdminLayout>
  );
};

export default Manage;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data: any = await _getProducts();

    if (data.error)
      return { props: { data: [], error: data.error, e: data.e || "" } };

    return { props: { data: data } };
  } catch (error) {
    return { props: { data: [], error } };
  }
};
