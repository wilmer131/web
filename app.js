// Datos de los productos (array de objetos) con imágenes actualizadas y relevantes
const productos = [
    { nombre: 'Empanada', precio: '2,00 Bs', imagen: 'imagenes/stock-photo-empanadas-argentinas-typical-argentine-stuffed-pastries.webp' },  // Imagen de empanadas
    { nombre: 'Refresco', precio: '3,00Bs', imagen: 'imagenes/7eda17cba89e3351769b3c07a892b007.jpg' },  // Imagen de refresco
    { nombre: 'Donas', precio: '3,00 Bs', imagen: 'imagenes/20spIkbEsTnfG.png!w700wp' },  // Imagen de donas
    { nombre: 'Relleno de papa', precio: '4,50 Bs', imagen: 'imagenes/images.jfif' },  // Imagen de papas rellenas
    { nombre: 'Agua', precio: '5,00 Bs', imagen: 'imagenes/909705_1024x1024.webp' },  // Imagen de botella de agua
    { nombre: 'Jugito', precio: '3,50 Bs', imagen: 'imagenes/7772905003747_1200x1200.webp' }   // Imagen de jugo de frutas
];

// Elementos del DOM
const buscador = document.getElementById('buscador');
const contenedorProductos = document.getElementById('productos');

// Función para renderizar los productos con botón de WhatsApp
function renderizarProductos(productosAMostrar) {
    contenedorProductos.innerHTML = ''; // Limpiar contenedor

    productosAMostrar.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='https://via.placeholder.com/300x200?text=${producto.nombre}'">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
            <a href="https://wa.me/59169403340?text=¡Hola! Quiero comprar ${producto.nombre} por ${producto.precio}" class="whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i> Comprar por WhatsApp
            </a>
        `;
        contenedorProductos.appendChild(divProducto);
    });
}

// Función para buscar y filtrar productos
function buscarProductos() {
    const terminoBusqueda = buscador.value.toLowerCase().trim();
    
    if (terminoBusqueda === '') {
        renderizarProductos(productos);
        return;
    }
    
    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(terminoBusqueda)
    );
    
    renderizarProductos(productosFiltrados);
    
    if (productosFiltrados.length === 0) {
        contenedorProductos.innerHTML = '<p>No se encontraron productos.</p>';
    }
}

// Event listeners
buscador.addEventListener('input', buscarProductos);

document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos(productos);
});