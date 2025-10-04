import styles from "./InputField.module.css";

function InputField({ value, onChange, placeholder, type = "text", className }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.input} ${className || ""}`}
    />
  );
}

export default InputField;
