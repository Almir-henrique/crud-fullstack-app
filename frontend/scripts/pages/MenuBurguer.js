function menuBurguer() {
    let nav = document.querySelector(".nav");
    let menuBurguer = document.querySelector(".menuBurguer");
    let fechar = document.querySelector(".fechar");

    menuBurguer.addEventListener("click", () => {
        nav.classList.toggle("mostrarBurguer");
    });

    fechar.addEventListener("click", () => {
        nav.classList.toggle("mostrarBurguer");
    });
}
menuBurguer();
