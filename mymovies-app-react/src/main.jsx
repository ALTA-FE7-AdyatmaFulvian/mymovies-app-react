import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppRouter from "./routes";

ReactDOM.createRoot(document.getElementById("content")).render(
  <ChakraProvider>
    <AppRouter />
  </ChakraProvider>
);
