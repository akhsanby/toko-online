import { createContext, useEffect } from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../scss/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useAuthState } from "@/lib/useAuth";

export const GlobalState: any = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const auth = useAuthState();

  const value = { ...auth };

  useEffect(() => {
    auth.refreshUser();
  }, []);

  console.log(auth.user);

  return (
    <GlobalState.Provider value={value}>
      <Component {...pageProps} />
    </GlobalState.Provider>
  );
}

export default MyApp;
