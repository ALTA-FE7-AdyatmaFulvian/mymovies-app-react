import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import "./styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppRouter from "./routes";
import { store } from "./utils/redux/store/store";

ReactDOM.createRoot(document.getElementById("content")).render(
  <Provider store={store}>
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  </Provider>
);
