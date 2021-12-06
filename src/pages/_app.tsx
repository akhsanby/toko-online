import {
  useEffect,
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { AppProps } from "next/app";
import { _getUser } from "@/config/api";
import { User } from "@/types";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/scss/main.scss";

const GlobalState = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | {}>({});
  const value = { user, setUser };

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
  const { user, setUser }: UseGLobalState | any = useContext(GlobalState);
  return { user, setUser };
};
