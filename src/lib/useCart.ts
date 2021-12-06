import { useEffect, useCallback } from "react";
import { useGlobalState } from "@/pages/_app";
import { _getCart } from "@/config/api";

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

  return { cart };
}
