import { useEffect, useCallback } from "react";
import { useGlobalState } from "@/pages/_app";
import { _addToCart, _deleteFromCart, _getCart } from "@/config/api";

interface AddToCart {
  _id: string;
  productId?: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  stock: number;
  sold: number;
  rating: { count: number; rate: number };
}

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

  const addToCart = async (product: AddToCart) => {
    const data = {
      productId: product.productId || product._id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      description: product.description,
      sold: product.sold,
      stock: product.stock,
      rating: product.rating,
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

  const deleteFromCart = async (productId: string) => {
    try {
      const result: any = await _deleteFromCart(productId);
      if (result.e) console.log(result.e);
      if (result.error) return alert(result.error);

      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  return { cart, addToCart, deleteFromCart };
}
