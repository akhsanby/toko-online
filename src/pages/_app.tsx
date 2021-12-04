import { createContext, useEffect } from "react";
import { AppProps } from "next/app";
import { useAuthReducer } from "@/lib/useAuth";
import { useProductReducer } from "@/lib/useProduct";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/scss/main.scss";

export const GlobalState: any = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const authReducer = useAuthReducer();
  const productReducer = useProductReducer();

  const value = { ...authReducer, ...productReducer };

  useEffect(() => {
    authReducer.getUser();
  }, [authReducer.getUser]);

  return (
    <GlobalState.Provider value={value}>
      <Component {...pageProps} />
    </GlobalState.Provider>
  );
}

export default MyApp;
