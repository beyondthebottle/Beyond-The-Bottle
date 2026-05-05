function suscribir() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    if (!nombre || !correo) {
        alert("Completa los campos");
        return;
    }

    alert("Suscripción exitosa 🍷");
}

let criticas = [
    {
        autor: "Robert Parker",
        texto: "Un vino de estructura impecable, con profundidad y equilibrio notable."
    },
    {
        autor: "Jancis Robinson",
        texto: "Elegancia y precisión aromática, con una expresión territorial clara."
    },
    {
        autor: "James Suckling",
        texto: "Intensidad controlada y final largo, muy bien construido."
    }
];

function mostrarCriticas() {
    let contenedor = document.getElementById("criticas");
    if(!contenedor) return;

    criticas.forEach(c => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <p><strong style="color:var(--wine);">${c.autor}</strong></p>
            <p style="font-style:italic;">"${c.texto}"</p>
        `;
        contenedor.appendChild(div);
    });
}

window.onload = mostrarCriticas;
