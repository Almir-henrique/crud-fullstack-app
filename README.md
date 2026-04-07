# 🌊 Projeto CRUD - Vida na Água

## 📌 Descrição
Este projeto é uma aplicação web completa com **CRUD (Create, Read, Update, Delete)**, desenvolvida com **Node.js, Express e MySQL**, integrada com um front-end em **HTML, CSS e JavaScript**.

A aplicação permite cadastrar, listar, editar e excluir usuários em tempo real, com comunicação entre front-end e back-end via API REST.

---

## 🚀 Tecnologias Utilizadas

### 🔹 Front-end
- HTML5
- CSS3
- JavaScript (Vanilla)

### 🔹 Back-end
- Node.js
- Express
- MySQL2

### 🔹 Ferramentas
- XAMPP (MySQL)
- Postman
- Live Server (VS Code)

---

## 📂 Estrutura do Projeto


---

## ⚙️ Funcionalidades

### ✅ Create (Cadastrar)
- Cadastro de usuários via formulário
- Envio para o backend com `fetch`
- Armazenamento no MySQL

### ✅ Read (Listar)
- Listagem dinâmica na tabela
- Consumo da API com GET

### ✅ Update (Atualizar)
- Edição de dados do usuário
- Atualização via PUT

### ✅ Delete (Excluir)
- Exclusão com confirmação
- Remoção via DELETE

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

### 1. Instalar dependências
```bash
npm install
2. Rodar o servidor
node server.js
3. Iniciar MySQL (XAMPP)
Criar banco: crud_node
Criar tabela produtos
4. Rodar o front-end
Abrir cadastro.html com Live Server

🗄️ Banco de Dados
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
Objetivo
Aprender CRUD completo
Integrar front-end com back-end
Trabalhar com API REST
Manipular banco de dados MySQL

👨‍💻 Grupo:
Almir Henrique Dantas -matricula - 01863982
Antonio carlos -matricula -
Felipe Gomes -matricula -
Rodrigo José -matricula -
Matheus Gomes -matricula -
Gabriel Pereira -matricula -
Victor Soares -matricula -