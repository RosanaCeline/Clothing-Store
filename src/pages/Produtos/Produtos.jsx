import { useState } from "react";
import styles from "./Produtos.module.css";
import { produtos } from "../../data/produtos";
import ProductCard from "../../components/ProductCard/ProductCard";
import ComprarButton from "../../components/Button/ComprarButton/ComprarButton";
import InputField from "../../components/InputField/InputField";

import ComprarIcon from "../../assets/icons/comprar-icon.svg";

function Produtos() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
    // Aqui você pode mostrar toast ou atualizar contador do carrinho
  };

  // Filtra produtos pelo nome conforme o usuário digita
  const filteredProducts = produtos.filter((produto) =>
    produto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className={styles.mainContainer}>
      <div className={styles.productsHeader}>
        <h2 className={styles.title}>Catálogo de Produtos</h2>
        <InputField
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar produto..."
        />
      </div>

      <section className={styles.productsGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((produto) => (
            <ProductCard
              key={produto.id}
              name={produto.name}
              description={produto.description}
              price={produto.price}
              image={produto.image}
              onAddToCart={() => handleAddToCart(produto)}
              buttonComponent={
                <ComprarButton
                  children="Adicionar ao Carrinho"
                  icon={ComprarIcon}
                  onClick={() => handleAddToCart(produto)}
                />
              }
              buttonSize="large"
            />
          ))
        ) : (
          <p className={styles.noResults}>Nenhum produto encontrado.</p>
        )}
      </section>
    </main>
  );
}

export default Produtos;
