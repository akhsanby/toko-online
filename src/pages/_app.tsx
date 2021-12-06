import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { AppProps } from "next/app";
import { _getCart, _getUser } from "@/config/api";
import { CartItem, User } from "@/types";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/scss/main.scss";

const GlobalState = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const [isAuthentic, setAuthentic] = useState<boolean>(false);
  const [user, setUser] = useState<User | {}>({});
  const [cart, setCart] = useState<CartItem[]>([]);

  const value = { user, setUser, cart, setCart, isAuthentic, setAuthentic };

  return (
    <GlobalState.Provider value={value}>
      <Component {...pageProps} />
    </GlobalState.Provider>
  );
}

export default MyApp;

interface UseGLobalState {
  user: User | {};
  setUser: Dispatch<SetStateAction<{} | User>>;
}

export const useGlobalState = () => {
  const { user, setUser, setCart, cart,isAuthentic, setAuthentic }: UseGLobalState | any = useContext(GlobalState);
  return { user, setUser, setCart, cart,isAuthentic, setAuthentic };
};
