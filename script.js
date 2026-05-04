let reseñas = [];
let historialIA = [];

/* ---------------- RESEÑAS ---------------- */

function guardarEnMemoria() {
    localStorage.setItem("resenas", JSON.stringify(reseñas));
}

function cargarResenas() {
    let datosGuardados = localStorage.getItem("resenas");

    if (datosGuardados) {
        reseñas = JSON.parse(datosGuardados);
    }

    mostrarResenas();
}

function mostrarResenas() {
    let contenedor = document.getElementById("contenedorResenas");
    contenedor.innerHTML = "";

    reseñas.forEach(function(resena, index) {
        let nuevaResena = document.createElement("div");
        nuevaResena.className = "card";

        nuevaResena.innerHTML = `
            <p><strong>${resena.nombre}:</strong> ${resena.comentario}</p>
            <button onclick="darLike(${index})">❤️ ${resena.likes}</button>
        `;

        contenedor.appendChild(nuevaResena);
    });
}

function agregarResena() {
    let nombre = document.getElementById("nombre").value;
    let comentario = document.getElementById("comentario").value;

    if (nombre === "" || comentario === "") {
        alert("Por favor completa todos los campos");
        return;
    }

    let nueva = {
        nombre: nombre,
        comentario: comentario,
        likes: 0
    };

    reseñas.push(nueva);
    guardarEnMemoria();
    mostrarResenas();

    document.getElementById("comentario").value = "";
}

function darLike(index) {
    reseñas[index].likes++;
    guardarEnMemoria();
    mostrarResenas();
}

/* ---------------- PERFIL ---------------- */

function guardarNombre() {
    let nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("Escribe tu nombre");
        return;
    }

    localStorage.setItem("nombreUsuario", nombre);
    alert("Nombre guardado 👌");
}

function cargarNombre() {
    let nombreGuardado = localStorage.getItem("nombreUsuario");

    if (nombreGuardado) {
        document.getElementById("nombre").value = nombreGuardado;
    }
}

/* ---------------- HISTORIAL IA ---------------- */

function guardarHistorialIA() {
    localStorage.setItem("historialIA", JSON.stringify(historialIA));
}

function cargarHistorialIA() {
    let datos = localStorage.getItem("historialIA");

    if (datos) {
        historialIA = JSON.parse(datos);
    }
}

/* ---------------- IA ---------------- */

function recomendarVino() {
    let texto = document.getElementById("preferencia").value.toLowerCase();
    let resultado = "";

    if (texto.includes("dulce")) {
        resultado = "Te recomiendo un Moscato 🍇, ideal si te gustan los sabores dulces.";
    } 
    else if (texto.includes("carne")) {
        resultado = "Un Cabernet Sauvignon 🍷 es perfecto para carnes.";
    } 
    else if (texto.includes("suave")) {
        resultado = "Te sugiero un Pinot Noir 🍷, ligero y elegante.";
    } 
    else if (texto.includes("fresco")) {
        resultado = "Un Sauvignon Blanc 🥂 es ideal si buscas algo refrescante.";
    } 
    else if (texto.includes("romantico") || texto.includes("cita")) {
        resultado = "Para una ocasión romántica 💕, un rosé o espumante es perfecto.";
    }
    else {
        resultado = "Te recomiendo explorar un vino tinto clásico 🍷 según tu ocasión.";
    }

    // Guardar historial
    historialIA.push({
        consulta: texto,
        respuesta: resultado
    });

    guardarHistorialIA();

    document.getElementById("resultadoIA").innerText = resultado;
}

/* ---------------- INICIO ---------------- */

cargarResenas();
cargarNombre();
cargarHistorialIA();
