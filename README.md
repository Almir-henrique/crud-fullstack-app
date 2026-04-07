# 🌊 Sistema CRUD - Vida na Água

## 📌 Sobre o Projeto
Aplicação web completa com operações CRUD (**Create, Read, Update, Delete**), desenvolvida com **Node.js, Express e MySQL**, integrada a um frontend em **HTML, CSS e JavaScript**.

O sistema permite cadastrar, listar, editar e excluir usuários, com comunicação entre frontend e backend via **API REST**.

---

## 🚀 Tecnologias Utilizadas

### 🔹 Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### 🔹 Backend
- Node.js
- Express
- MySQL2

### 🔹 Ferramentas
- XAMPP (MySQL)
- Postman
- Live Server (VS Code)

---

## 📂 Estrutura do Projeto
meu-crud/
│
├── backend/
│ ├── server.js
│ ├── db.js
│ ├── package.json
│
├── frontend/
│ ├── cadastro.html
│ ├── registros.html
│ ├── scripts/
│ ├── styles/
│ ├── img/
│
├── .gitignore
├── README.md

---

## ⚙️ Funcionalidades

### ✅ Cadastro de usuários
- Formulário no frontend
- Envio via `fetch` (POST)
- Armazenamento no MySQL

### ✅ Listagem de usuários
- Consumo da API (GET)
- Exibição dinâmica na tela

### ✅ Atualização
- Edição de dados
- Requisição PUT para o backend

### ✅ Exclusão
- Remoção de usuários
- Requisição DELETE

---

## 🔌 Rotas da API

| Método | Rota | Descrição |
|--------|------|----------|
| POST | `/cadastrar` | Cadastrar usuário |
| GET | `/produtos` | Listar usuários |
| PUT | `/produtos/:id` | Atualizar usuário |
| DELETE | `/produtos/:id` | Deletar usuário |

---

## 🛠️ Como Executar

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repo.git

2️⃣ Instalar dependências do backend 
cd backend
npm install
npm install cors

3️⃣ Rodar o servidor
node server.js

4️⃣ Configurar banco de dados (MySQL)
CREATE DATABASE crud_node;

USE crud_node;

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  telefone VARCHAR(20),
  idade INT,
  endereco VARCHAR(255),
  senha VARCHAR(100)
);

5️⃣ Rodar o frontend
Abra o arquivo cadastro.html com o Live Server

🧠 Conceitos Aplicados
Arquitetura cliente-servidor
API REST
Requisições HTTP (GET, POST, PUT, DELETE)
Integração frontend-backend
Persistência de dados com MySQL

🧠 Conceitos Aplicados
Arquitetura cliente-servidor
API REST
Requisições HTTP (GET, POST, PUT, DELETE)
Integração frontend-backend
Persistência de dados com MySQL

🎯 Objetivo

Este projeto foi desenvolvido para:

Praticar CRUD completo
Integrar frontend com backend
Trabalhar com banco de dados relacional
Simular um sistema real

📌 Status

🚧 Projeto em evolução

📎 Link do Projeto

👉 https://github.com/Almir-henrique/crud-fullstack-app
