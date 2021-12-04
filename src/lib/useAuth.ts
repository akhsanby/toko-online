import { useState, useContext, useCallback } from "react";
import { _getUser, _signIn, _logout } from "@/config/api";
import { GlobalState } from "@/pages/_app";
import { User } from "@/types";
import { useRouter } from "next/router";

export const useAuthState = () => {
  const { push } = useRouter();
  const [user, setUser] = useState<User | {}>({});

  const login = async (email: string, password: string) => {
    try {
      await _signIn({ email, password });

      const data: User | any = await _getUser();

      setUser(data);

      push("/");
    } catch (error) {
      alert(error);
    }
  };

  const logout = () => {
    _logout()
      .then(() => setUser({}))
      .catch((error) => alert(error));
  };

  const getUser = useCallback(() => {
    _getUser()
      .then((data: User | any) => setUser(data))
      .catch((error) => alert(error));
  }, []);

  return { user, login, logout, getUser };
};

export default function useAuth() {
  const { user, login, refreshUser, logout } = useContext(GlobalState);
  return { user, login, refreshUser, logout };
}