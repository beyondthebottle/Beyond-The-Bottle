let reseñas = [];

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

cargarResenas();
cargarNombre();
function recomendarVino() {
    let texto = document.getElementById("preferencia").value.toLowerCase();
    let resultado = "";

    if (texto.includes("dulce")) {
        resultado = "Te recomendamos un vino Moscato 🍇";
    } 
    else if (texto.includes("carne")) {
        resultado = "Te recomendamos un Cabernet Sauvignon 🍷";
    } 
    else if (texto.includes("suave")) {
        resultado = "Te recomendamos un Pinot Noir 🍷";
    } 
    else {
        resultado = "Te recomendamos explorar un vino tinto clásico 🍷";
    }

    document.getElementById("resultadoIA").innerText = resultado;
}
