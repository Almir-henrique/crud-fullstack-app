class Contador {
    init() {
        let form = document.querySelector("#habitos");
        let resultadoDiv = document.querySelector("#resultado");
        let litrosEconomizados = document.querySelector("#litrosEconomizados");

        function atualizar() {
            let checkboxes = form.querySelectorAll(
                'input[name="habito"]:checked'
            );
            let totalSaved = 0;

            checkboxes.forEach((checkbox) => {
                totalSaved += Number(checkbox.value);
            });

            litrosEconomizados.textContent = totalSaved;
            resultadoDiv.classList.toggle("escondido", totalSaved === 0);
        }

        form.addEventListener("change", atualizar);
    }
}

new Contador().init();
