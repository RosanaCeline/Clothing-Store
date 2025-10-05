import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Produtos.module.css";

import { produtos } from "../../data/produtos";
import ProductCard from "../../components/ProductCard/ProductCard";
import ComprarButton from "../../components/Button/IconTextButton/IconTextButton";
import InputField from "../../components/InputField/InputField";

import ComprarIcon from "../../assets/icons/comprar-icon.svg";

function Produtos() {
  const [searchTerm, setSearchTerm] = useState("");

  // Pega cart e setCart do MainLayout
  const { cart, setCart } = useOutletContext();

  const handleAddToCart = (product) => {
    try {
      setCart((prev) => {
        const existingProduct = prev.find((item) => item.id === product.id);

        if (existingProduct) {
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prev, { ...product, quantity: 1 }];
        }
      });

      toast.success(`${product.name} adicionado(a) ao carrinho!`);
    } catch (error) {
      console.error(error);
      toast.error(`Erro ao adicionar ${product.name} ao carrinho.`);
    }
  };

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
