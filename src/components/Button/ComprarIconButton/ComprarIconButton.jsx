import styles from "./ComprarIconButton.module.css";

function ComprarIconButton({ icon, onClick }) {
  return (
    <button onClick={onClick} className={styles.iconButton}>
      <img src={icon} alt="Comprar" />
    </button>
  );
}

export default ComprarIconButton;
