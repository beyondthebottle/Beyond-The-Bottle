let newsletterEmails = [];

let criticas = [
    {
        autor: "Robert Parker",
        texto: "Un gran vino debe tener equilibrio, estructura y persistencia."
    },
    {
        autor: "Jancis Robinson",
        texto: "La calidad del vino está en su coherencia con su origen."
    },
    {
        autor: "James Suckling",
        texto: "El vino auténtico expresa su territorio sin explicaciones."
    }
];

/* ---------------- NEWSLETTER ---------------- */

function suscribirseNewsletter() {
    let email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Correo inválido");
        return;
    }

    newsletterEmails.push(email);
    localStorage.setItem("newsletter", JSON.stringify(newsletterEmails));

    document.getElementById("email").value = "";
    alert("Suscripción realizada");
}

/* ---------------- CRÍTICOS ---------------- */

function mostrarCriticas() {
    let contenedor = document.getElementById("criticas");
    contenedor.innerHTML = "";

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

/* ---------------- RESET SISTEMA ---------------- */

function reiniciarSistema() {

    let confirmar = confirm("Se eliminarán todos los datos. ¿Continuar?");

    if (!confirmar) return;

    localStorage.clear();

    newsletterEmails = [];

    document.getElementById("email").value = "";
    document.getElementById("criticas").innerHTML = "";

    alert("Sistema reiniciado");
}

/* ---------------- INICIO ---------------- */

window.onload = function () {
    let data = localStorage.getItem("newsletter");
    if (data) newsletterEmails = JSON.parse(data);

    mostrarCriticas();
};
