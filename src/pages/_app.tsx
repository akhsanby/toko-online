import {
  useEffect,
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { AppProps } from "next/app";
import { _getCart, _getUser } from "@/config/api";
import { User } from "@/types";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/scss/main.scss";

const GlobalState = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | {}>({});
  const [cart, setCart] = useState([]);

  const value = { user, setUser, cart, setCart };

  useEffect(() => {
    const getUser = async () => {
      const data: any = await _getUser();
      if (data.e) console.log(data.e);
      if (data.error) {
        console.log(data.error);
        return;
      }
      setUser(data);
    };
    getUser();
  }, []);

  useEffect(() => {
    const getCart = async () => {
      const data: any = await _getCart();
      if (data.e) console.log(data.e);
      if (data.error) {
        console.log(data.error);
        return;
      }
      setCart(data);
    };
    getCart();
  }, []);

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
  const { user, setUser, setCart, cart }: UseGLobalState | any =
    useContext(GlobalState);
  return { user, setUser, setCart, cart };
};
