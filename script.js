let criticas = [
    {
        autor: "Robert Parker",
        texto: "Un gran vino equilibra estructura, profundidad y persistencia."
    },
    {
        autor: "Jancis Robinson",
        texto: "El vino expresa su origen con mayor honestidad que cualquier otra bebida."
    },
    {
        autor: "James Suckling",
        texto: "La autenticidad del vino está en su capacidad de reflejar el terroir."
    }
];

function mostrarCriticas() {
    let contenedor = document.getElementById("criticas");

    if (!contenedor) return;

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

window.onload = function () {
    mostrarCriticas();
};
