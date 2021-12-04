import { useState, useContext, useCallback } from "react";
import { _getProducts, _getProduct } from "@/config/api";
import { GlobalState } from "@/pages/_app";
import { Product } from "@/types";

export const useProductState = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | {}>({});

  const getProduct = useCallback((productId: string) => {
    _getProduct(productId)
      .then((data: Product[] | any) => setProduct(data))
      .catch((e) => alert(e));
  }, []);

  const getProducts = useCallback((q) => {
    _getProducts()
      .then((data: Product[] | any) => {
        let result = data;
        if (q) result = data.filter((el: Product) => el.category === q);
        setProducts(result);
      })
      .catch((e) => alert(e));
  }, []);

  const cleanUpProduct = () => setProduct({});

  const cleanUpProducts = () => setProducts([]);

  return {
    products,
    getProducts,
    getProduct,
    product,
    cleanUpProduct,
    cleanUpProducts,
  };
};

export default function useProduct() {
  const {
    products,
    product,
    getProducts,
    getProduct,
    cleanUpProduct,
    cleanUpProducts,
  } = useContext(GlobalState);
  return {
    products,
    product,
    getProducts,
    getProduct,
    cleanUpProduct,
    cleanUpProducts,
  };
}
