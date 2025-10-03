import styles from "./ComprarButton.module.css";

function ComprarButton({ onClick, children, icon }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
    </button>
  );
}

export default ComprarButton;
