class Registros {
  usuarios = [];
  linhas = [];
  estadoLinhas = [];
  usuarioSelecionado;

  // BUSCAR DO BACKEND
  async resgatarUsuarios() {
    const res = await fetch("http://localhost:3000/produtos");
    const dados = await res.json();
    this.usuarios = dados;
  }

  // PREENCHER TABELA
  preencherTabela(usuarios) {
    this.linhas = Array.from(document.querySelectorAll(".linha"));

    usuarios.forEach((p, c) => {
      if (!this.linhas[c]) return;

      this.linhas[c].querySelector(".nome").textContent = p.nome;
      this.linhas[c].querySelector(".email").textContent = p.email;
      this.linhas[c].querySelector(".telefone").textContent = p.telefone;
      this.linhas[c].querySelector(".idade").textContent = p.idade;
      this.linhas[c].querySelector(".endereco").textContent = p.endereco;
    });
  }

  limparTabela() {
    this.linhas.forEach((linha) => {
      linha.querySelector(".nome").textContent = "";
      linha.querySelector(".email").textContent = "";
      linha.querySelector(".telefone").textContent = "";
      linha.querySelector(".idade").textContent = "";
      linha.querySelector(".endereco").textContent = "";
    });
  }

  // SELEÇÃO
  controleDeSelecao() {
    this.linhas.forEach((linha, c) => {
      this.estadoLinhas[c] = false;

      linha.addEventListener("click", () => {
        this.linhas.forEach((l, i) => {
          l.classList.remove("toggle");
          this.estadoLinhas[i] = false;
        });

        this.estadoLinhas[c] = true;
        linha.classList.add("toggle");

        let nomeSelecionado = linha.querySelector(".nome").textContent;

        this.usuarioSelecionado = this.usuarios.find(
          (p) => p.nome === nomeSelecionado,
        );
      });
    });
  }

  // EDITAR
  alterarUsuario() {
    let btnEditar = document.querySelector("#btnEditar");

    btnEditar.addEventListener("click", () => {
      if (!this.usuarioSelecionado) {
        alert("Selecione um usuário primeiro");
        return;
      }

      localStorage.setItem("idEditar", this.usuarioSelecionado.id);
      location.href = "alterar.html";
    });
  }

  // ADICIONAR
  adicionarUsuario() {
    let btnAdicionar = document.getElementById("btnAdicionar");

    btnAdicionar.addEventListener("click", () => {
      location.href = "cadastro.html";
    });
  }

  // EXCLUIR (CORRIGIDO)
  excluirUsuario() {
    let btnExcluir = document.querySelector("#btnRemover");

    btnExcluir.addEventListener("click", () => {
      if (!this.usuarioSelecionado) {
        alert("Selecione um usuário para excluir...");
        return;
      }

      let msg = document.getElementById("msgExclusao");
      msg.textContent = this.usuarioSelecionado.nome + "?";

      let container = document.getElementById("confirmarExclusao");
      container.classList.add("mostrando");

      let sim = document.getElementById("sim");
      let nao = document.getElementById("nao");

      // REMOVE EVENTOS ANTIGOS (IMPORTANTE)
      sim.replaceWith(sim.cloneNode(true));
      nao.replaceWith(nao.cloneNode(true));

      sim = document.getElementById("sim");
      nao = document.getElementById("nao");

      nao.addEventListener("click", () => {
        container.classList.remove("mostrando");
      });

      sim.addEventListener("click", async () => {
        try {
          const res = await fetch(
            `http://localhost:3000/produtos/${this.usuarioSelecionado.id}`,
            {
              method: "DELETE",
            },
          );

          const msg = await res.text();
          alert(msg);

          container.classList.remove("mostrando");

          // ATUALIZA LISTA
          await this.resgatarUsuarios();
          this.limparTabela();
          this.preencherTabela(this.usuarios);
        } catch (err) {
          console.error(err);
          alert("Erro ao excluir");
        }
      });
    });
  }

  // PESQUISA
  pesquisarUsuario() {
    let pesquisa = document.getElementById("pesquisa");
    let btnLimparPesquisa = document.getElementById("limparPesquisa");
    let btnPesquisar = document.getElementById("lupinha");

    btnPesquisar.addEventListener("click", () => {
      this.filtrar(pesquisa.value);
    });

    pesquisa.addEventListener("keypress", (evt) => {
      if (evt.key === "Enter") {
        this.filtrar(pesquisa.value);
      }
    });

    btnLimparPesquisa.addEventListener("click", () => {
      this.limparTabela();
      this.preencherTabela(this.usuarios);
      pesquisa.value = "";
    });
  }

  filtrar(valor) {
    if (!valor) {
      this.limparTabela();
      this.preencherTabela(this.usuarios);
      return;
    }

    let filtro = valor.toLowerCase();

    let resultado = this.usuarios.filter((p) =>
      Object.values(p).some((v) => String(v).toLowerCase().includes(filtro)),
    );

    this.limparTabela();
    this.preencherTabela(resultado);
  }

  // ORDENAR
  ordenar() {
    let btnAZ = document.getElementById("btnAZ");
    let btnZA = document.getElementById("btnZA");

    btnAZ.addEventListener("click", () => {
      this.usuarios.sort((a, b) => a.nome.localeCompare(b.nome));
      this.limparTabela();
      this.preencherTabela(this.usuarios);
    });

    btnZA.addEventListener("click", () => {
      this.usuarios.sort((a, b) => b.nome.localeCompare(a.nome));
      this.limparTabela();
      this.preencherTabela(this.usuarios);
    });
  }

  // INIT
  async init() {
    await this.resgatarUsuarios();
    this.preencherTabela(this.usuarios);
    this.controleDeSelecao();
    this.excluirUsuario();
    this.adicionarUsuario();
    this.alterarUsuario();
    this.pesquisarUsuario();
    this.ordenar();
  }
}

new Registros().init();
