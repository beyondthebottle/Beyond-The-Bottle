/* =========================
   Suscripción
========================= */
function suscribir() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    if (!nombre || !correo) {
        alert("Por favor, completa tus datos para la experiencia Beyond the Bottle 🍷");
        return;
    }

    alert(`¡Bienvenido/a ${nombre}! Pronto recibirás contenido exclusivo en tu correo.`);
}

/* =========================
   Críticas Dinámicas
========================= */
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
            <p><strong style="color:var(--wine); font-family:'Playfair Display'; font-size:1.2rem;">${c.autor}</strong></p>
            <p style="font-style:italic; color:var(--text-soft);">"${c.texto}"</p>
        `;
        contenedor.appendChild(div);
    });
}

// Ejecutar al cargar la página
window.onload = mostrarCriticas;
