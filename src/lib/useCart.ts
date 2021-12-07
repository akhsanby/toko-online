import { useEffect, useCallback } from "react";
import { useGlobalState } from "@/pages/_app";
import { _addToCart, _getCart } from "@/config/api";
import { Product } from "@/types";

export default function useCart() {
  const { cart, setCart, isAuthentic } = useGlobalState();

  const getCart = useCallback(() => {
    const fetchData = async () => {
      try {
        const data: any = await _getCart();
        if (data.e) console.log(data.e);
        if (data.error) {
          console.log(data.error);
          return;
        }
        setCart(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isAuthentic) getCart();
  }, [getCart]);

  const addToCart = async (product: Product) => {
    console.log("product", product);
    const data = {
      productId: product._id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      description: product.description,
    };

    try {
      const result: any = await _addToCart(data);
      if (result.e) console.log(result.e);
      if (result.error) return alert(result.error);

      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  return { cart, addToCart };
}
