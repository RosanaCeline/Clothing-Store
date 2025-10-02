import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Modella. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;