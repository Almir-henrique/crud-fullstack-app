fetch("http://localhost:3000/cadastrar", {
  method: "POST",
});
function cadastrar() {
  const nome = document.getElementById("nome").value;
  const preco = document.getElementById("preco").value;

  fetch("http://localhost:3000/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, preco }),
  })
    .then((res) => res.text())
    .then((msg) => {
      alert(msg);
      listar(); // atualiza lista
    });
}
