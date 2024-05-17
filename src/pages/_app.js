import { store } from "@/app/store";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Loading from "@/components/loading/Loading";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let timer;
    const startLoading = () => {
      timer = setTimeout(() => setLoading(true), 10);
    };
    const endLoading = () => {
      clearTimeout(timer);
      setLoading(false);
    };

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', endLoading);
    Router.events.on('routeChangeError', endLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', endLoading);
      Router.events.off('routeChangeError', endLoading);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Provider store={store}>
        <NextUIProvider>
          <div className="relative">
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </NextUIProvider>
      </Provider>
    </>
  );
}
