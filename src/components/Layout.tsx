import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import styles from "../../styles/Home.module.css";
import GlobalContextProvider from "../providers/GlobalContextProvider";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalContextProvider>
        <main className={styles.main}>
          <Hero />
          {children}
        </main>
        <Footer />
      </GlobalContextProvider>
    </>
  );
};

export default Layout;
