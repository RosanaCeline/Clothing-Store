import { useNavigate, useOutletContext } from "react-router-dom";
import { IoTrashOutline, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import styles from "./Carrinho.module.css";

import FinalizarButton from "../../components/Button/IconTextButton/IconTextButton";

function Carrinho() {
  const navigate = useNavigate();
  const { cart, setCart } = useOutletContext();

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id, quantity) => {
    if (quantity === 1) {
      // remove o item se quantidade for 1
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace(",", ".")) * item.quantity,
    0
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.title}>Carrinho de Compras</h2>

      <div className={styles.cartContainer}>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div className={styles.cartWrapper}>
            {/* Lista de produtos */}
            <div className={styles.cartListContainer}>
              <h3>Meu Carrinho</h3>
              <ul className={styles.cartList}>
                {cart.map((item) => (
                  <li key={item.id} className={styles.cartItem}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <p>R$ {item.price}</p>
                      <div className={styles.qtyControls}>
                        <button
                          onClick={() => decreaseQty(item.id, item.quantity)}
                        >
                          {item.quantity === 1 ? (
                            <IoTrashOutline size={20} />
                          ) : (
                            <IoRemoveOutline size={20} />
                          )}
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQty(item.id)}>
                          <IoAddOutline size={20} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resumo do carrinho */}
            <div className={styles.cartSummary}>
              <h3>Resumo do Carrinho</h3>
              <p>
                <span>Quantidade de itens</span>
                <span>{totalItems}</span>
              </p>
              <p>
                <span>Total a pagar</span>
                <span>R$ {total.toFixed(2).replace(".", ",")}</span>
              </p>
              <FinalizarButton
                children="Finalizar Compra"
                variant="dark"
                onClick={() => navigate("/finalizar")}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Carrinho;
