let productos = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const categorias = ["auriculares", "termos", "tecnologia", "tazas", "juguetes"];

document.addEventListener("DOMContentLoaded", () => {
  fetch("productos.json")
    .then(response => response.json())
    .then(data => {
      productos = data;
      renderizarProductos();
      renderizarCarrito();
    })
    .catch(error => console.error("Error al cargar productos:", error));

  // Botón WhatsApp
  document.getElementById("btn-whatsapp").addEventListener("click", enviarPorWhatsApp);

  // Escuchar cambios en cantidad y eliminar
  document.getElementById("carrito-lista").addEventListener("click", manejarClickCarrito);
  document.getElementById("carrito-lista").addEventListener("change", manejarCambioCantidad);
});

function renderizarProductos() {
  categorias.forEach(cat => {
    const contenedor = document.getElementById(`${cat}-productos`);
    contenedor.innerHTML = "";
    productos
      .filter(p => p.categoria === cat)
      .forEach(prod => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
          <div class="card h-100">
            <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${prod.nombre}</h5>
              <p class="card-text">Precio: $${prod.precio}</p>
              <button class="btn btn-primary mt-auto" data-id="${prod.id}">Agregar al carrito</button>
            </div>
          </div>
        `;
        contenedor.appendChild(card);
      });
  });

  // Asignar eventos a botones "Agregar al carrito"
  document.querySelectorAll(".card button").forEach(btn => {
    btn.addEventListener("click", () => {
      agregarAlCarrito(parseInt(btn.getAttribute("data-id")));
    });
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  const productoEnCarrito = carrito.find(p => p.id === id);
  if(productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push({...producto, cantidad: 1});
  }
  guardarCarrito();
  renderizarCarrito();
}

function renderizarCarrito() {
  const lista = document.getElementById("carrito-lista");
  lista.innerHTML = "";
  let total = 0;
  carrito.forEach(prod => {
    total += prod.precio * prod.cantidad;
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <div>
        <strong>${prod.nombre}</strong> - $${prod.precio} x 
        <input type="number" min="1" value="${prod.cantidad}" data-id="${prod.id}" class="form-control form-control-sm d-inline-block" style="width:60px;">
      </div>
      <div>
        <span>$${prod.precio * prod.cantidad}</span>
        <button class="btn btn-danger btn-sm ms-3" data-id="${prod.id}">&times;</button>
      </div>
    `;
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}

function manejarClickCarrito(e) {
  if(e.target.tagName === "BUTTON") {
    const id = parseInt(e.target.getAttribute("data-id"));
    carrito = carrito.filter(p => p.id !== id);
    guardarCarrito();
    renderizarCarrito();
  }
}

function manejarCambioCantidad(e) {
  if(e.target.tagName === "INPUT") {
    const id = parseInt(e.target.getAttribute("data-id"));
    const cantidad = parseInt(e.target.value);
    if(cantidad < 1) {
      e.target.value = 1;
      return;
    }
    const producto = carrito.find(p => p.id === id);
    if(producto) {
      producto.cantidad = cantidad;
      guardarCarrito();
      renderizarCarrito();
    }
  }
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function enviarPorWhatsApp() {
  if(carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  let mensaje = "¡Hola! Quiero comprar:%0A";
  carrito.forEach(p => {
    mensaje += `- ${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}%0A`;
  });
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  mensaje += `Total: $${total}`;
  window.open(`https://wa.me/5491149731372?text=${mensaje}`, "_blank");
}

// Validar formulario antes de enviar
const form = document.querySelector("form");
form.addEventListener("submit", e => {
  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const mensaje = form.mensaje.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(nombre === "" || email === "" || mensaje === "") {
    e.preventDefault();
    alert("Por favor completa todos los campos.");
    return;
  }

  if(!emailRegex.test(email)) {
    e.preventDefault();
    alert("Por favor ingresa un correo válido.");
    return;
  }
});