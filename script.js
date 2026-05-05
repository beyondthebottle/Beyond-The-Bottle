
let newsletter = [];

let criticas = [
    {
        autor: "Robert Parker",
        texto: "Un gran vino se define por su equilibrio entre estructura, fruta y evolución en botella."
    },
    {
        autor: "Jancis Robinson",
        texto: "El vino expresa su origen con una sinceridad que ningún otro producto alcanza."
    },
    {
        autor: "James Suckling",
        texto: "La autenticidad de un vino se reconoce en su coherencia sensorial."
    }
];

/* ---------------- EXPERT REVIEWS ---------------- */

function mostrarCriticas() {
    let contenedor = document.getElementById("criticas");
    if (!contenedor) return;

    criticas.forEach(c => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h3>${c.autor}</h3>
            <p>${c.texto}</p>
        `;

        contenedor.appendChild(div);
    });
}

/* ---------------- NEWSLETTER ---------------- */

function suscribirseNewsletter() {

    let nombre = document.getElementById("nombreCompleto").value;
    let email = document.getElementById("email").value;

    if (nombre === "" || email === "") {
        alert("Completa todos los campos");
        return;
    }

    if (!email.includes("@")) {
        alert("Correo inválido");
        return;
    }

    newsletter.push({
        nombre: nombre,
        email: email
    });

    localStorage.setItem("newsletter", JSON.stringify(newsletter));

    document.getElementById("nombreCompleto").value = "";
    document.getElementById("email").value = "";

    alert("Suscripción registrada");
}

/* ---------------- INIT ---------------- */

window.onload = function () {

    let data = localStorage.getItem("newsletter");
    if (data) newsletter = JSON.parse(data);

    mostrarCriticas();
};
