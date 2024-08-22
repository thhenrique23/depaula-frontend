import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import "https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
