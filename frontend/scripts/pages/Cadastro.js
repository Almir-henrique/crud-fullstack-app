class Cadastro {
  cadastro() {
    const form = document.querySelector(".cadastro-form");

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      console.log("Submit funcionando"); // teste

      const nome = document.querySelector("#nome").value;
      const email = document.querySelector("#email").value;
      const telefone = document.querySelector("#telefone").value;
      const idade = document.querySelector("#idade").value;
      const endereco = document.querySelector("#endereco").value;
      const senha = document.querySelector("#senha").value;
      const confirmar = document.querySelector("#confirmar-senha").value;

      if (senha !== confirmar) {
        alert("A confirmação de senha não coincide");
        return;
      }

      fetch("http://localhost:3000/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          idade,
          endereco,
          senha,
        }),
      })
        .then((res) => res.text())
        .then((msg) => {
          alert(msg);

          form.reset();

          document
            .querySelector(".saudacaoTela")
            .classList.add("mostrarSaudacao");
        })
        .catch((err) => {
          console.error(err);
          alert("Erro ao conectar com o servidor");
        });
    });
  }

  init() {
    this.cadastro();
  }
}

new Cadastro().init();
