import { useCallback } from "react";
import { _addToCart, _checkout, _deleteFromCart, _getCart } from "@/config/api";
import { useGlobalState } from "@/pages/_app";

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
  const { cart, setCart } = useGlobalState();

  const getCart = useCallback(async () => {
    try {
      const data: any = await _getCart();
      if (data?.e) console.log(data?.e);
      if (data?.error) {
        console.log(data?.error);
        setCart([]);
        return;
      }
      if (data) setCart(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
      if (result?.e) console.log(result?.e);
      if (result?.error) return alert(result?.error);

      await getCart();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromCart = async (productId: string) => {
    try {
      const result: any = await _deleteFromCart(productId);
      if (result?.e) console.log(result?.e);
      if (result?.error) return alert(result?.error);

      await getCart();
    } catch (error) {
      console.log(error);
    }
  };

  const checkout = async () => {
    try {
      const result: any = await _checkout();
      if (result?.e) console.log(result?.e);
      if (result?.error) return alert(result?.error);
      if (result?.message) alert(result?.message);

      await getCart();
    } catch (error) {
      console.log(error);
    }
  };

  return { cart, addToCart, deleteFromCart, getCart, checkout };
}
