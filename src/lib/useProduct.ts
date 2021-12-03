import { useState, useContext, useCallback } from "react";
import { _getProducts } from "@/config/api";
import { GlobalState } from "@/pages/_app";
import { Product } from "@/types";

export const useProductState = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(() => {
    _getProducts()
      .then((data: Product[] | any) => setProducts(data))
      .catch((e) => alert(e));
  }, []);

  return { products, getProducts };
};

export default function useProduct() {
  const { products, getProducts } = useContext(GlobalState);
  return { products, getProducts };
}
