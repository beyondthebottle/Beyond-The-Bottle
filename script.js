
/* =========================
   NEWSLETTER (BASE DE USUARIOS)
========================= */

let newsletter = [];

/* cargar datos si existen */
function initNewsletter() {
    let data = localStorage.getItem("newsletter");
    if (data) {
        newsletter = JSON.parse(data);
    }
}

/* suscripción */
function suscribirseNewsletter() {

    let nombre = document.getElementById("nombreCompleto");
    let email = document.getElementById("email");

    if (!nombre || !email) return;

    let nombreValue = nombre.value.trim();
    let emailValue = email.value.trim();

    if (nombreValue === "" || emailValue === "") {
        alert("Completa todos los campos");
        return;
    }

    if (!emailValue.includes("@")) {
        alert("Correo inválido");
        return;
    }

    newsletter.push({
        nombre: nombreValue,
        email: emailValue
    });

    localStorage.setItem("newsletter", JSON.stringify(newsletter));

    nombre.value = "";
    email.value = "";

    alert("Suscripción registrada correctamente");
}


/* =========================
   CRÍTICAS DE EXPERTOS (EDITORIAL)
========================= */

let criticas = [
    {
        autor: "Robert Parker",
        texto: "El equilibrio entre estructura, fruta y evolución define un gran vino."
    },
    {
        autor: "Jancis Robinson",
        texto: "El vino es una expresión honesta del territorio y su historia."
    },
    {
        autor: "James Suckling",
        texto: "La autenticidad de un vino se percibe en su coherencia sensorial."
    }
];

/* render de críticas */
function mostrarCriticas() {

    let contenedor = document.getElementById("criticas");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    criticas.forEach((c) => {

        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${c.autor}</h3>
            <p>${c.texto}</p>
        `;

        contenedor.appendChild(card);
    });
}


/* =========================
   INICIALIZACIÓN GLOBAL
========================= */

window.onload = function () {
    initNewsletter();
    mostrarCriticas();
};
