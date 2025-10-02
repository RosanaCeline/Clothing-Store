import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import styles from "./Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      {/* Logo clicável */}
      <Link to="/" className={styles.logo}>
        Modella
      </Link>

      {/* Botão de menu para mobile */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <HiX size={35} /> : <HiMenu size={35} />}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.navActive : ""}`}>
        {[
          { path: "/", label: "Home" },
          { path: "/produtos", label: "Produtos" },
          { path: "/carrinho", label: "Carrinho" },
          { path: "/contato", label: "Contato" },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
