import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@/types";
import { _getProducts } from "@/config/api";
import _Nav from "@/components/_Nav";
import _Card from "@/components/_Card";
import { Layout } from "@/components/Layout";
import _Carousel from "@/components/_Carousel";
import _CardSlider from "@/components/_CardSlider";

// loading bar
import LoadingBar from "react-top-loading-bar";

interface HomeProps {
  products: Product[];
  error?: string;
  e?: any;
}

const Home: NextPage<HomeProps> = ({ products, error, e }) => {
  if (error) alert(error);
  if (e) console.log(e);

  return (
    <Layout>
      <Container>
        <_Carousel />
        <div className="my-5">
          <_CardSlider products={products} />
        </div>
        <div className="mt-5">
          <_Nav />
          <Row className="mt-4">
            {products.length &&
              products.map((product: Product) => (
                <Col className="p-1" key={product._id} xs={6} md={4} lg={2}>
                  <_Card product={product} />
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const data: any = await _getProducts();

  if (data.error)
    return { props: { products: [], error: data.error, e: data.e || "" } };

  return { props: { products: data } };
};
