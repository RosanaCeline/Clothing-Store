import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Home.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import ProductCard from "../../components/ProductCard/ProductCard";
import ComprarIconButton from "../../components/Button/ComprarIconButton/ComprarIconButton";

import ComprarIcon from "../../assets/icons/comprar-icon.svg";
import LogoGrande from "../../assets/images/logo.svg";

import { produtos } from "../../data/produtos";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const { cart, setCart } = useOutletContext(); // pega cart do MainLayout

  const destaques = produtos.slice(-3);

  const nextProduct = () =>
    setCurrentIndex((prev) => (prev + 1) % destaques.length);
  const prevProduct = () =>
    setCurrentIndex((prev) => (prev - 1 + destaques.length) % destaques.length);

  const handleAddToCart = (product) => {
    try {
      setCart((prev) => {
        // Verifica se o produto já está no carrinho
        const existingProduct = prev.find((item) => item.id === product.id);

        if (existingProduct) {
          // Se estiver, só aumenta a quantidade
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          // Se não estiver, adiciona com quantity = 1
          return [...prev, { ...product, quantity: 1 }];
        }
      });

      // Toast de sucesso
      toast.success(`${product.name} adicionado ao carrinho!`);
    } catch (error) {
      console.error(error);
      // Toast de erro
      toast.error(`Erro ao adicionar ${product.name} ao carrinho.`);
    }
  };

  return (
    <main className={styles.mainContainer}>
      <section className={styles.left}>
        <img src={LogoGrande} alt="Logo Grande" className={styles.logoImage} />
      </section>

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
