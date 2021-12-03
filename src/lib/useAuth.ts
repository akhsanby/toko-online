import { getUser, signIn } from "@/config/api";
import { GlobalState } from "@/pages/_app";
import { User } from "@/types";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

export const useAuthState = () => {
  const { push } = useRouter();
  const [user, setUser] = useState<User>();

  const login = async (email: string, password: string) => {
    try {
      await signIn({ email, password });

      const data: User | any = await getUser();

      setUser(data);

      push("/");
    } catch (error) {
      alert(error);
    }
  };

  const refreshUser = () => {
    getUser()
      .then((data: User | any) => setUser(data))
      .catch((error) => alert(error));
  };

  return { user, login, refreshUser };
};

export default function useAuth() {
  const { user, login, refreshUser } = useContext(GlobalState);
  return { user, login, refreshUser };
}
