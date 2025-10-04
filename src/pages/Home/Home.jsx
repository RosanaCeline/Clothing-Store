import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import ProductCard from "../../components/ProductCard/ProductCard";
import ComprarIconButton from "../../components/Button/ComprarIconButton/ComprarIconButton";

import ComprarIcon from "../../assets/icons/comprar-icon.svg";
import LogoGrande from "../../assets/images/logo.svg";

// Importa a lista de produtos do arquivo centralizado
import { produtos } from "../../data/produtos";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Pegando os 3 últimos produtos da lista
  const destaques = produtos.slice(-3);

  const nextProduct = () =>
    setCurrentIndex((prev) => (prev + 1) % destaques.length);

  const prevProduct = () =>
    setCurrentIndex((prev) => (prev - 1 + destaques.length) % destaques.length);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    navigate("/carrinho");
  };

  return (
    <main className={styles.mainContainer}>
      {/* Lado esquerdo: Logo grande */}
      <section className={styles.left}>
        <img src={LogoGrande} alt="Logo Grande" className={styles.logoImage} />
      </section>

      {/* Lado direito: Título + carrossel */}
      <section className={styles.right}>
        <h2 className={styles.title}>Destaques da Semana</h2>

        <div className={styles.carousel}>
          <button className={styles.arrow} onClick={prevProduct}>
            <IoIosArrowBack size={30} />
          </button>

          <ProductCard
            name={destaques[currentIndex].name}
            description={destaques[currentIndex].description}
            price={destaques[currentIndex].price}
            image={destaques[currentIndex].image}
            buttonComponent={
              <ComprarIconButton
                icon={ComprarIcon}
                onClick={() => handleAddToCart(destaques[currentIndex])}
              />
            }
            buttonSize="small"
          />

          <button className={styles.arrow} onClick={nextProduct}>
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
