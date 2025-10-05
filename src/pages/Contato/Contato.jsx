import { useState } from "react";
import styles from "./Contato.module.css";
import InputField from "../../components/InputField/InputField";
import IconTextButton from "../../components/Button/IconTextButton/IconTextButton";
import contatoImage from "../../assets/images/contato.svg";
import { toast } from "react-toastify";

function Contato() {
  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleEnviar = () => {
    if (!assunto.trim() || !descricao.trim()) {
      toast.error("Por favor, preencha todos os campos!");
      return;
    }

    toast.success("Mensagem enviada com sucesso!");
    setAssunto("");
    setDescricao("");
  };

  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.title}>Contato</h2>
      <p className={styles.subtitle}>
        Alguma dúvida ou reclamação? Entre em contato conosco através do formulário abaixo.
      </p>

      <div className={styles.container}>
        {/* Formulário */}
        <section className={styles.formSection}>
          <div className={styles.inputGroup}>
            <label htmlFor="assunto">Assunto</label>
            <InputField
              id="assunto"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              placeholder="Digite o assunto"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Digite sua mensagem"
              className={styles.textarea}
            />
          </div>

          <IconTextButton onClick={handleEnviar} variant="dark">
            Enviar Mensagem
          </IconTextButton>
        </section>

        {/* Imagem */}
        <section className={styles.imageSection}></section>
      </div>
    </main>
  );
}

export default Contato;
