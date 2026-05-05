
let newsletter = [];

let criticas = [
    {
        autor: "Robert Parker",
        texto: "El equilibrio entre fruta, estructura y evolución define un gran vino."
    },
    {
        autor: "Jancis Robinson",
        texto: "El vino es una de las expresiones más puras del territorio."
    },
    {
        autor: "James Suckling",
        texto: "La autenticidad se reconoce en la coherencia sensorial."
    }
];

/* EXPERTOS */

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

/* NEWSLETTER */

function suscribirseNewsletter() {

    let nombre = document.getElementById("nombreCompleto").value;
    let email = document.getElementById("email").value;

    if (!nombre || !email) return alert("Completa los campos");
    if (!email.includes("@")) return alert("Email inválido");

    newsletter.push({ nombre, email });

    localStorage.setItem("newsletter", JSON.stringify(newsletter));

    document.getElementById("nombreCompleto").value = "";
    document.getElementById("email").value = "";

    alert("Registro exitoso");
}

/* INIT */

window.onload = function () {

    let data = localStorage.getItem("newsletter");
    if (data) newsletter = JSON.parse(data);

    mostrarCriticas();
};
