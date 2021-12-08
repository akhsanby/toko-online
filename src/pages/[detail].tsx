import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, Card, Row, Col, Nav } from "react-bootstrap";
import { Product } from "@/types";
import { _getProduct } from "@/config/api";
import useCart from "@/lib/useCart";
import useAuth from "@/lib/useAuth";
import { Layout } from "@/components/Layout";
import styles from "@/scss/DetailProduct.module.scss";

interface DetailProductProps {
  message?: string;
  product: Product;
}

const DetailProduct: NextPage<DetailProductProps> = ({ message, product }) => {
  const { replace } = useRouter();
  const { addToCart } = useCart();
  const { isAuthentic } = useAuth();

  if (message) alert(message);

  return (
    <Layout>
      <Container>
        <Card className={styles.card_background}>
          <Row>
            <Col lg={4}>
              <Image
                src={product.image || "https://placeimg.com/640/480/people"}
                width={350}
                height={350}
                layout="fixed"
              />
            </Col>
            <Col lg={8}>
              <Card.Body className="ms-5">
                <Card.Title className="text-white fs-1 font-playfair-display">
                  {product.name}
                </Card.Title>
                <Card.Text className="text-white fs-2 fw-bold mt-4">
                  {product.price}
                </Card.Text>
                <Card.Text className={styles.icon_star}>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <span className="fs-7 text-white">{`( ${product.rating?.count} Reviews )`}</span>
                </Card.Text>
                <Card.Text className="mt-4 d-flex align-items-center gap-2">
                  <button
                    onClick={() =>
                      isAuthentic ? addToCart(product) : replace("/login")
                    }
                    className={styles.btn_custom_1}
                    type="button"
                  >
                    Add To Cart
                  </button>
                  <button className={styles.btn_custom_2} type="button">
                    <i className="bi bi-share-fill"></i>
                  </button>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <div className="mx-5 my-5">
          <Nav className="gap-3" variant="pills" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Description</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Review</Nav.Link>
            </Nav.Item>
          </Nav>
          <p className="mt-4 lh-lg fs-6">{product.description}</p>
        </div>
      </Container>
    </Layout>
  );
};

export default DetailProduct;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { detail }: any = ctx.params;

  try {
    const data: any = await _getProduct(detail);

    return { props: { product: data } };
  } catch (e) {
    const { message }: any = e;
    return { props: { product: [], message: message || "" } };
  }
};
