import { useEffect, SyntheticEvent, useCallback } from "react";
import { useRouter } from "next/router";
import { _getUser, _logout, _signIn } from "@/config/api";
import { useGlobalState } from "@/pages/_app";
import useCart from "./useCart";

interface LoginData {
  email: string;
  password: string;
}

export default function useAuth() {
  const { push } = useRouter();
  const { getCart } = useCart();
  const { user, setUser, isAuthentic, setAuthentic } = useGlobalState();

  const getUser = useCallback(async () => {
    try {
      const data: any = await _getUser();
      if (data.e) console.log(data.e);
      if (data.error) {
        console.log(data.error);
        setUser({});
        setAuthentic(false);
      }
      if (data._id) {
        setUser(data);
        setAuthentic(true);
      }
      await getCart();
    } catch (error) {
      console.log(error);
    }
  }, [getCart]);

  useEffect(() => {
    if (!isAuthentic) getUser();
  }, [isAuthentic, getUser]);

  const logout = async () => {
    try {
      const { error, e }: any = await _logout();
      if (e) console.log(e);
      if (error) return alert(error);

      await getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (event: SyntheticEvent, data: LoginData) => {
    event.preventDefault();

    try {
      const { e, error }: any = await _signIn(data);
      if (e) console.log(e);
      if (error) return alert(error);

      const user: any = await getUser();
      if (!user.e) push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { user, isAuthentic, logout, login };
}
