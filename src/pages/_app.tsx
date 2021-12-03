import { createContext, useEffect } from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import { useAuthState } from "@/lib/useAuth";
import { useProductState } from "@/lib/useProduct";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../scss/main.scss";

export const GlobalState: any = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const authState = useAuthState();
  const productState = useProductState();

  const value = { ...authState, ...productState };

  useEffect(() => {
    authState.getUser();
  }, [authState.getUser]);

  return (
    <GlobalState.Provider value={value}>
      <Component {...pageProps} />
    </GlobalState.Provider>
  );
}

export default MyApp;
