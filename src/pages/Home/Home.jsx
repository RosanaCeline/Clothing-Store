import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bem-vindo à Minha Loja!</h2>
      <p className={styles.subtitle}>
        Aqui você encontra os melhores produtos com os melhores preços.
      </p>

      <button className={styles.button}>Ver Produtos</button>
    </div>
  );
}

export default Home;
