import styles from "./IconTextButton.module.css";

function ComprarButton({ children, icon, onClick, variant = "light" }) {
  return (
    <button
      className={`${styles.button} ${variant === "dark" ? styles.dark : styles.light}`}
      onClick={onClick}
    >
      {icon && (
        <span className={styles.icon}>
          <img src={icon} alt="ícone" />
        </span>
      )}
      <span className={styles.text}>{children}</span>
    </button>
  );
}

export default ComprarButton;
