let newsletterEmails = [];
let criticas = [
    {
        autor: "Robert Parker",
        texto: "Un vino excepcional se define por equilibrio, estructura y persistencia en boca."
    },
    {
        autor: "Jancis Robinson",
        texto: "La verdadera calidad del vino no está en su precio, sino en su coherencia con su origen."
    },
    {
        autor: "James Suckling",
        texto: "Los grandes vinos hablan del lugar del que provienen sin necesidad de explicaciones."
];

let vinos = {
    tinto: {
        titulo: "Vino Tinto",
        descripcion: "El vino tinto se obtiene de uvas oscuras fermentadas con sus pieles. Su estructura depende de los taninos, la crianza y la variedad de uva.",
        caracteristicas: ["Taninos altos", "Cuerpo medio a alto", "Apto para guarda", "Notas a frutas rojas y madera"]
    },
    blanco: {
        titulo: "Vino Blanco",
        descripcion: "El vino blanco se produce sin contacto con pieles de uva. Es fresco, ligero y altamente aromático.",
        caracteristicas: ["Acidez alta", "Cuerpo ligero", "Fresco", "Notas cítricas y florales"]
    },
    rosado: {
        titulo: "Vino Rosado",
        descripcion: "El rosado es un equilibrio entre frescura del blanco y estructura del tinto.",
        caracteristicas: ["Fresco", "Ligero", "Frutal", "Consumo joven"]
    },
    espumoso: {
        titulo: "Vino Espumoso",
        descripcion: "Los espumosos se caracterizan por su burbuja natural generada en segunda fermentación.",
        caracteristicas: ["Burbuja", "Alta acidez", "Festivo", "Versátil"]
    },
    postre: {
        titulo: "Vino de Postre",
        descripcion: "Vinos dulces y concentrados, ideales para acompañar postres o quesos intensos.",
        caracteristicas: ["Dulzor alto", "Cuerpo denso", "Alcohol elevado", "Aromas intensos"]
    },
    fortificado: {
        titulo: "Vino Fortificado",
        descripcion: "Vinos con adición de alcohol, como el Oporto o Jerez.",
        caracteristicas: ["Alta graduación alcohólica", "Complejo", "Dulce o seco", "Gran longevidad"]
    },
    naranja: {
        titulo: "Vino Naranja",
        descripcion: "Vino blanco fermentado con pieles, lo que le da estructura y taninos.",
        caracteristicas: ["Tánico", "Complejo", "Textura seca", "Fermentación con piel"]
    }
};

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
    alert("Suscripción exitosa");
}

/* ---------------- IA: MARIDAJE POR COMIDA ---------------- */

function recomendarPorComida(tipoComida) {
    let recomendaciones = {
        carnes: "Vino tinto de cuerpo medio o alto",
        pescado: "Vino blanco fresco y ácido",
        pasta: "Tinto suave o blanco estructurado",
        postres: "Vino dulce o fortificado",
        picante: "Espumante o blanco aromático",
        vegetariano: "Blanco fresco o naranja ligero"
    };

    document.getElementById("resultadoIA").innerText =
        recomendaciones[tipoComida] || "Selecciona un tipo de comida";
}

/* ---------------- LECCIONES (VINO DETALLE) ---------------- */

function mostrarVino(tipo) {
    let vino = vinos[tipo];

    document.getElementById("tituloVino").innerText = vino.titulo;
    document.getElementById("descripcionVino").innerText = vino.descripcion;

    let lista = document.getElementById("caracteristicasVino");
    lista.innerHTML = "";

    vino.caracteristicas.forEach(c => {
        let li = document.createElement("li");
        li.innerText = c;
        lista.appendChild(li);
    });
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

/* ---------------- INICIO ---------------- */

window.onload = function () {
    let data = localStorage.getItem("newsletter");
    if (data) newsletterEmails = JSON.parse(data);

    mostrarCriticas();
};
localStorage.removeItem("resenas");
