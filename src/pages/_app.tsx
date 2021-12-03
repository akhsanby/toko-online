import { createContext, useEffect } from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import { useAuthState } from "@/lib/useAuth";
import "../scss/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

export const GlobalState: any = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const auth = useAuthState();

  const value = { ...auth };

  useEffect(() => {
    auth.getUser();
  }, []);

  return (
    <GlobalState.Provider value={value}>
      <Component {...pageProps} />
    </GlobalState.Provider>
  );
}

export default MyApp;
