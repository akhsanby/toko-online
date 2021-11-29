import "../scss/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AppProps } from "next/dist/shared/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
