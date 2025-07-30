# Tienda Guti

**Tienda Guti** es un proyecto de e-commerce web donde los usuarios pueden ver productos, añadirlos a un carrito, editar el carrito, y simular la compra enviando su pedido por WhatsApp. Además incluye un formulario de contacto funcional mediante Formspree y diseño responsivo para una buena experiencia en dispositivos móviles y escritorio.

La idea es poder ayudar a mi cuñado "Guti" que se encuentra sin trabajo recientemente y esta dedicandose a la venta de diferentes articulos, como los que subi en la pagina, mi idea es hacerla mas profesional, le dedique mucho tiempo y pude llegar a lo que hice, desde ya muchas gracias.

---

##Indice

- [Descripción](#descripción)  
- [Tecnologías usadas](#tecnologías-usadas)  
- [Características](#características)  
- [Instalación](#instalación)  
- [Uso](#uso)  
- [Estructura del proyecto](#estructura-del-proyecto)  

---

## Descripcion 

Tienda Guti es una tienda online que ofrece categorías variadas como auriculares, termos, tecnología, tazas y juguetes. El proyecto está orientado a demostrar manejo de HTML, CSS, JavaScript, integración con APIs (Formspree), y almacenamiento local para persistencia del carrito.

---

## Tecnologías usadas

- **HTML5**  
- **CSS3** (Flexbox, Grid, animaciones, Google Fonts)  
- **JavaScript (ES6+)**  
- **Bootstrap 5**  
- **FontAwesome** (íconos)  
- **Formspree** (formulario de contacto funcional)  
- **LocalStorage** (persistencia del carrito)  

---

## Caracteristicas

- Visualización dinámica de productos cargados desde un archivo JSON externo.  
- Categorías organizadas con cards responsivos usando Bootstrap y Grid/Flexbox.  
- Carrito de compras interactivo con agregar, eliminar y modificar cantidades.  
- Persistencia del carrito incluso si el usuario recarga o cierra la página.  
- Envío del pedido simulado por WhatsApp con detalle de productos y total.  
- Formulario de contacto con validación y envío vía Formspree.  
- Diseño responsivo y accesible, optimizado para móviles y escritorio.  
- Barra de navegación con enlaces internos y menú adaptable.  
- Reseñas de clientes presentadas con grid y estilo limpio.  
- Fondo animado con degradado y fondo fijo para un efecto visual atractivo.  

---

## Instalación

1. Clonar el repositorio o descargar los archivos del proyecto.  
2. Asegurarse de tener la carpeta `img` con las imágenes en las rutas indicadas en `productos.json`.  
3. Abrir el archivo `index.html` en un navegador moderno.  
4. Para probar el formulario de contacto, el proyecto debe estar accesible vía internet para que Formspree reciba los datos (o usar servidores locales con túnel como ngrok).  

---

## Uso

- Navegar por las secciones de productos y usar el botón **Agregar al carrito** para seleccionar productos.  
- En la sección **Carrito**, modificar cantidades o eliminar productos según necesidad.  
- Presionar **Enviar tu pedido por WhatsApp** para abrir WhatsApp con el resumen del pedido listo para enviar.  
- En la sección **Contacto**, completar el formulario para enviar un mensaje a través de Formspree.  

---

## Estrucutura del proyecto

/index.html # Página principal
/styles.css # Estilos principales
/script.js # Lógica JS para productos, carrito y formulario
/productos.json # Datos de productos (id, nombre, precio, imagen, categoría)
/img/ # Carpeta con imágenes de productos y fondo