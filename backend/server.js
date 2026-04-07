const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rota teste
app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

// CADASTRAR
app.post("/cadastrar", (req, res) => {
  const { nome, email, telefone, idade, endereco, senha } = req.body;

  const sql = `
    INSERT INTO produtos 
    (nome, email, telefone, idade, endereco, senha) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [nome, email, telefone, idade, endereco, senha], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro ao cadastrar");
    }

    res.send("Cadastro realizado com sucesso!");
  });
});

// LISTAR
app.get("/produtos", (req, res) => {
  db.query("SELECT * FROM produtos", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro ao buscar produtos");
    }

    res.json(result);
  });
});

// ATUALIZAR (ajustado pro novo modelo)
app.put("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, idade, endereco, senha } = req.body;

  const sql = `
    UPDATE produtos 
    SET nome=?, email=?, telefone=?, idade=?, endereco=?, senha=? 
    WHERE id=?
  `;

  db.query(sql, [nome, email, telefone, idade, endereco, senha, id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro ao atualizar");
    }

    res.send("Atualizado com sucesso!");
  });
});

// DELETAR
app.delete("/produtos/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM produtos WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro ao deletar");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("Produto não encontrado");
    }

    res.send("Deletado com sucesso!");
  });
});

// INICIAR SERVIDOR
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
