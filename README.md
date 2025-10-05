# Mini Loja Online

[Visite a aplicação online](https://clothing-store-delta-rust.vercel.app/)

---

## 🛒 Descrição do Projeto

Este é um projeto de **validação de Tecnologia Web**, uma mini loja fictícia (ex: roupas) feita em React. O usuário pode:

- visualizar produtos  
- buscá-los  
- adicioná-los ao carrinho  
- alterar quantidade  
- finalizar “compra” via formulário  
- entrar em contato via formulário simples  

É uma aplicação front-end, simulando o fluxo de uma loja.

---

## ⚙ Funcionalidades

### 1. Página Inicial  
- Logotipo / banner  
- Menu de navegação (Home, Produtos, Carrinho, Contato)  
- Destaques de produtos  

### 2. Catálogo de Produtos  
- Exibição de cards com imagem, nome, descrição, preço e botão  
- Busca por nome com filtro em tempo real  

### 3. Carrinho de Compras  
- Lista de itens adicionados  
- Controle de quantidade (`+` / `-`)  
- Se quantidade = 1, botão de diminuir vira ícone de lixeira  
- Cálculo automático do total  
- Botão “Finalizar Compra”  

### 4. Página de Finalização  
- Formulário com campos: Nome, E-mail, Endereço, Forma de Pagamento  
- Validações: obrigatórios, email válido, nome sem números  
- Mensagem de sucesso ao confirmar  
- Limpeza do carrinho após confirmar  

### 5. Página de Contato  
- Campo “Assunto”  
- Campo “Descrição” 
- Subtítulo explicativo  
- Imagem decorativa ao lado  

### 6. Página 404  
- Mensagem amigável de “página não encontrada”  
- Imagem ilustrativa  
- Botão para voltar para o menu  

---

## 📦 Tecnologias & Ferramentas

- React  
- Vite  
- Vercel (deploy)  
- Git / GitHub  

---

## 🧑‍💻 Como executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
