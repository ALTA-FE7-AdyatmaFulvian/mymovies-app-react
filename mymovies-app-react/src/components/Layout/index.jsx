import React from "react";
import Header from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="h-full w-full bg-white dark:bg-black text-black dark:text-white px-12 py-4">
        {children}
      </main>
      <Footer />
    </>
  );
};
