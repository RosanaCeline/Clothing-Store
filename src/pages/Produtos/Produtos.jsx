import { useState } from "react";
import styles from "./Produtos.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import ComprarButton from "../../components/Button/ComprarButton/ComprarButton";

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
    description: "Um minivestido cor damasco com corte evasê que valoriza todos os tipos de corpo.",
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
  { 
    id: 4,
    name: "Vestido Longo Floral",
    description: "Vestido longo floral com tecido leve, perfeito para eventos ao ar livre.",
    price: "129,99",
    image: VestidoBranco
  },
  { 
    id: 5,
    name: "Short Jeans Clássico",
    description: "Short jeans clássico com lavagem clara, ideal para looks casuais de verão.",
    price: "59,99",
    image: CalcaCinza
  },
];

function Produtos() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
    // Aqui você pode mostrar toast ou atualizar contador do carrinho
  };

  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.title}>Catálogo de Produtos</h2>

      <section className={styles.productsGrid}>
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            name={produto.name}
            description={produto.description}
            price={produto.price}
            image={produto.image}
            onAddToCart={() => handleAddToCart(produto)}
            buttonComponent={
              <ComprarButton
                text="Adicionar ao Carrinho"
                onClick={() => handleAddToCart(produto)}
              />
            }
          />
        ))}
      </section>
    </main>
  );
}

export default Produtos;
