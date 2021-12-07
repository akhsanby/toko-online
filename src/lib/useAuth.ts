import { _getUser, _logout, _signIn } from "@/config/api";
import { useGlobalState } from "@/pages/_app";
import { useRouter } from "next/router";
import { useEffect, SyntheticEvent } from "react";

interface LoginData {
  email: string;
  password: string;
}

export default function useAuth() {
  const { push } = useRouter();
  const { user, setUser, isAuthentic, setAuthentic } = useGlobalState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const data: any = await _getUser();
        if (data.e) console.log(data.e);
        if (data.error) {
          console.log(data.error);
          return;
        }
        setUser(data);
        setAuthentic(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (!isAuthentic) getUser();
  }, []);

  const logout = async () => {
    try {
      const { error, e }: any = await _logout();
      if (e) console.log(e);
      if (error) return alert(error);

      setUser({});
      setAuthentic(false);
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

      const result: any = await _getUser();
      if (result.e) console.log(result.e);
      if (result.error) return alert(result.error);

      setUser(result);
      push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { user, isAuthentic, logout, login };
}
