import styles from "./ComprarButton.module.css";

function ComprarButton({ children, icon, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon && (
        <span className={styles.icon}>
          <img src={icon} alt="Comprar" />
        </span>
      )}
      <span className={styles.text}>{children}</span>
    </button>
  );
}

export default ComprarButton;
