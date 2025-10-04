import styles from "./ProductCard.module.css";

function ProductCard({ name, price, image, description, buttonComponent, buttonSize = "small" }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.productImage} draggable="false" />
      </div>
      <h3 className={styles.productName}>{name}</h3>
      <p className={styles.productDescription}>{description}</p>
      
      <div
        className={`${styles.productBuy} ${
          buttonSize === "large" ? styles.column : ""
        }`}
      >
        <p className={styles.productPrice}>Por R$ {price}</p>
        {buttonComponent}
      </div>
    </article>
  );
}


export default ProductCard;
