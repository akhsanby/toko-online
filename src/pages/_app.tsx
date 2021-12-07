import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { AppProps } from "next/app";
import { CartItem, User } from "@/types";
import { _getCart, _getUser } from "@/config/api";
import "@/scss/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

interface GLobalStateType {
  user: User | {};
  cart: CartItem[];
  isAuthentic: boolean;
  setUser: Dispatch<SetStateAction<{} | User>>;
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  setAuthentic: Dispatch<SetStateAction<boolean>>;
}

const GlobalState: any = createContext<Partial<GLobalStateType | {}>>({});

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

export const useGlobalState = () => {
  const data: GLobalStateType = useContext(GlobalState);
  return data;
};
