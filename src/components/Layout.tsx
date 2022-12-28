import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import styles from "../../styles/Home.module.css";

const Layout = ({children}: any) => {
  return (
    <>
        <main className={styles.main}>
          <Hero />
          {children}
        </main>
        <Footer />
    </>
  );
};

export default Layout;
