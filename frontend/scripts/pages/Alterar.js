class Alterar {
  async alterarUsuario() {
    let nomeAlterar = document.querySelector("#nome");
    let emailAlterar = document.querySelector("#email");
    let telefoneAlterar = document.querySelector("#telefone");
    let idadeAlterar = document.querySelector("#idade");
    let enderecoAlterar = document.querySelector("#endereco");

    // 🔥 PEGAR ID CORRETO
    let id = localStorage.getItem("idEditar");

    if (!id) {
      alert("Nenhum usuário selecionado");
      return;
    }

    // 🔥 BUSCAR DADOS DO BACKEND
    const res = await fetch("http://localhost:3000/produtos");
    const usuarios = await res.json();

    const usuario = usuarios.find((u) => u.id == id);

    if (!usuario) {
      alert("Usuário não encontrado");
      return;
    }

    // 🔥 PREENCHER CAMPOS
    nomeAlterar.value = usuario.nome;
    emailAlterar.value = usuario.email;
    telefoneAlterar.value = usuario.telefone;
    idadeAlterar.value = usuario.idade;
    enderecoAlterar.value = usuario.endereco;

    let btnAlterar = document.getElementById("btnAlterar");

    btnAlterar.addEventListener("click", async (evt) => {
      evt.preventDefault();

      let usuarioNovo = {
        nome: nomeAlterar.value,
        email: emailAlterar.value,
        telefone: telefoneAlterar.value,
        idade: idadeAlterar.value,
        endereco: enderecoAlterar.value,
        senha: usuario.senha, // mantém a senha
      };

      try {
        const res = await fetch(`http://localhost:3000/produtos/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuarioNovo),
        });

        const msg = await res.text();
        alert(msg);

        // limpa ID
        localStorage.removeItem("idEditar");

        // volta pra lista
        location.href = "registros.html";
      } catch (err) {
        console.error(err);
        alert("Erro ao atualizar");
      }
    });
  }

  init() {
    this.alterarUsuario();
  }
}

new Alterar().init();
