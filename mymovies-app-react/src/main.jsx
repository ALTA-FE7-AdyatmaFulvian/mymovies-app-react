import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/index.css";
import Home from "./pages";
import DetailMovie from "./pages/detailMovie";
import FavoriteMovie from "./pages/favoriteMovie";

ReactDOM.createRoot(document.getElementById("content")).render(
  <ChakraProvider>
    <Home />
  </ChakraProvider>
);
