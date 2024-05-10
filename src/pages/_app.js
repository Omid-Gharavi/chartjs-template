import { store } from "@/app/store";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <NextUIProvider>
        <Header />
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}
