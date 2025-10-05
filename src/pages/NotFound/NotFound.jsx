import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import notFoundImage from "../../assets/images/not-found-image.svg";
import IconTextButton from "../../components/Button/IconTextButton/IconTextButton";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className={styles.mainContainer}>
      <div className={styles.content}>
        <img
          src={notFoundImage}
          alt="Página não encontrada"
          className={styles.image}
        />
        <h2>Página não encontrada</h2>
        <p>Opa! Parece que o link que você tentou acessar não existe.</p>
        <IconTextButton
          onClick={() => navigate("/")}
          variant="dark"
        >
          Voltar ao Menu
        </IconTextButton>
      </div>
    </main>
  );
}

export default NotFound;
