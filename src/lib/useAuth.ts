import { _getUser, _logout, _signIn } from "@/config/api";
import { useGlobalState } from "@/pages/_app";
import { useRouter } from "next/router";
import { useEffect, useState, SyntheticEvent } from "react";

interface LoginData {
  email: string;
  password: string;
  error?: string;
  e?: any;
}

export default function useAuth() {
  const { push } = useRouter();
  const { user, setUser } = useGlobalState();
  const [isAuthentic, setAuthentic] = useState<boolean>(false);

  useEffect(() => {
    const getUser = async () => {
      const data: any = await _getUser();
      if (data.e) console.log(data.e);
      if (data.error) {
        console.log(data.error);
        return;
      }
      setUser(data);
      setAuthentic(true);
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

    const { e, error }: any = await _signIn(data);

    if (e) console.log(e);
    if (error) return alert(error);

    const result: any = await _getUser();

    if (result.e) console.log(result.e);
    if (result.error) return alert(result.error);

    setUser(result);
    push("/");
  };

  return { user, isAuthentic, logout, login };
}
