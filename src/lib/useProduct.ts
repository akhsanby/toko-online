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

  const getProducts = useCallback(() => {
    _getProducts()
      .then((data: Product[] | any) => setProducts(data))
      .catch((e) => alert(e));
  }, []);

  return { products, getProducts, getProduct, product };
};

export default function useProduct() {
  const { products, product, getProducts, getProduct } =
    useContext(GlobalState);
  return { products, product, getProducts, getProduct };
}
