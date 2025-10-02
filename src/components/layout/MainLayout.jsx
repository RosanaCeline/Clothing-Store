import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet /> {/* Aqui entram as páginas */}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
