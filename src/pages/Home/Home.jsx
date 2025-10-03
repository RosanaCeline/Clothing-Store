import { useState } from "react";
import { useNavigate } from "react-router-dom"; // para redirecionar pro carrinho
import styles from "./Home.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import ProductCard from "../../components/ProductCard/ProductCard";
import ComprarIconButton from "../../components/Button/ComprarIconButton/ComprarIconButton";
import ComprarIcon from "../../assets/icons/comprar-icon.svg";
import LogoGrande from "../../assets/images/logo.svg";
import VestidoVermelho from "../../assets/images/vestido-vermelho.webp";
import CalcaCinza from "../../assets/images/calca-cinza.webp";
import VestidoBranco from "../../assets/images/vestido-branco.webp";

const produtos = [
  { 
    id: 1,
    name: "Vestido de Verão",
    description: "Um charmoso vestido vermelho curto, ideal para os dias quentes e ensolarados de verão.",
    price: "69,99",
    image: VestidoVermelho
  },
  { 
    id: 2, 
    name: "Minivestido Evasê",
    description: "Um minivestido cor damasco com corte evasê que valoriza todos os tipos de corpo com seu corte.",
    price: "79,99", 
    image: VestidoBranco
  },
  { 
    id: 3,
    name: "Calça Reta Casual",
    description: "Calça reta casual na cor cinza, confeccionada em tecido de veludo macio e resistente.", 
    price: "134,99", 
    image: CalcaCinza
  },
];


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]); // estado do carrinho
  const navigate = useNavigate();

  const nextProduct = () =>
    setCurrentIndex((prev) => (prev + 1) % produtos.length);

  const prevProduct = () =>
    setCurrentIndex((prev) => (prev - 1 + produtos.length) % produtos.length);

  // Adiciona o produto ao carrinho e vai para a página do carrinho
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

      {/* Lado direito: Título + carrossel de produtos */}
      <section className={styles.right}>
        <h2 className={styles.title}>Destaques da Semana</h2>

        <div className={styles.carousel}>
          <button className={styles.arrow} onClick={prevProduct}>
            <IoIosArrowBack size={30} />
          </button>

          <ProductCard
            name={produtos[currentIndex].name}
            description={produtos[currentIndex].description}
            price={produtos[currentIndex].price}
            image={produtos[currentIndex].image}
            buttonComponent={
              <ComprarIconButton
                icon={ComprarIcon} // apenas a URL
                onClick={() => handleAddToCart(produtos[currentIndex])}
              />
            }
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
