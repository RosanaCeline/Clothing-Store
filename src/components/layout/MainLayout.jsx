import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./MainLayout.module.css";

function MainLayout() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} />
      <main className={styles.main}>
        {/* Todas as páginas dentro do layout terão acesso ao cart */}
        <Outlet context={{ cart, setCart }} />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
