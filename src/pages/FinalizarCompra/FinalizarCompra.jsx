import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./FinalizarCompra.module.css";

import InputField from "../../components/InputField/InputField";
import IconTextButton from "../../components/Button/IconTextButton/IconTextButton";
import { toast } from "react-toastify";

function FinalizarCompra() {
  const { cart, setCart } = useOutletContext();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [errors, setErrors] = useState({});

  const total = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace(",", ".")) * item.quantity,
    0
  );
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleConfirmar = () => {
    const newErrors = {};

    // validação do nome
    if (!nome.trim()) newErrors.nome = "O nome é obrigatório.";
    else if (/[0-9]/.test(nome))
        newErrors.nome = "O nome não pode conter números.";

    // validação do e-mail
    if (!email.trim()) newErrors.email = "O e-mail é obrigatório.";
    else if (!validateEmail(email)) newErrors.email = "Digite um e-mail válido.";

    // validação do endereço
    if (!endereco.trim()) newErrors.endereco = "O endereço é obrigatório.";

    // validação do pagamento
    if (!pagamento) newErrors.pagamento = "Escolha uma forma de pagamento.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
        return;
    }

    toast.success("Compra finalizada com sucesso!");
    setCart([]);
    navigate("/");
    };

  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.title}>Finalizar Compra</h2>

      <div className={styles.container}>
        {/* formulário */}
        <section className={styles.formSection}>
          <h3>Dados do Comprador</h3>

          <div className={styles.inputGroup}>
            <label htmlFor="nome">Nome completo</label>
            <InputField
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome completo"
            />
            {errors.nome && <span className={styles.error}>{errors.nome}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <InputField
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu melhor e-mail"
              type="email"
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="endereco">Endereço de entrega</label>
            <InputField
              id="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              placeholder="Digite seu endereço completo"
            />
            {errors.endereco && (
              <span className={styles.error}>{errors.endereco}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="pagamento">Forma de pagamento</label>
            <select
              id="pagamento"
              value={pagamento}
              onChange={(e) => setPagamento(e.target.value)}
              className={styles.select}
            >
              <option value="">Selecione uma opção</option>
              <option value="cartao">Cartão de crédito</option>
              <option value="pix">PIX</option>
              <option value="boleto">Boleto bancário</option>
            </select>
            {errors.pagamento && (
              <span className={styles.error}>{errors.pagamento}</span>
            )}
          </div>

          <IconTextButton onClick={handleConfirmar} variant="dark">
            Confirmar Pedido
          </IconTextButton>
        </section>

        {/* resumo */}
        <section className={styles.summarySection}>
          <h3>Resumo do Pedido</h3>
          <p>
            <span>Quantidade de itens</span>
            <span>{totalItems}</span>
          </p>
          <p>
            <span>Total a pagar</span>
            <span>R$ {total.toFixed(2).replace(".", ",")}</span>
          </p>
        </section>
        
        {/* seção decorativa */}
        <section className={styles.imageSection}></section>
      </div>
    </main>
  );
}

export default FinalizarCompra;
