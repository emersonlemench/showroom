const imgImprenta = [
  './images/imprenta/1.png',
  './images/imprenta/3.png',
  './images/imprenta/4.png',
  './images/imprenta/5.png',
  './images/imprenta/6.png',
  './images/imprenta/2.png',
];

const imgCursiva = [
  './images/cursiva/10.png',
  './images/cursiva/11.png',
  './images/cursiva/12.png',
  './images/cursiva/13.png',
  './images/cursiva/14.png',
  './images/cursiva/15.png',
  './images/cursiva/16.png'
];

const imgDobleLinea = [
  './images/doble_linea/7.png',
  './images/doble_linea/8.png',
  './images/doble_linea/9.png'
];

// Función para cargar imágenes dinámicamente
function cargarImagenes(images, containerId) {
    const container = document.getElementById(containerId);

    images.forEach((src) => {
        // Crear contenedor col de Bootstrap
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4'; // Columna adaptable en la grilla

        // Crear la imagen
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Imagen';
        img.className = 'img-fluid rounded shadow'; // Clases Bootstrap para estilos
        img.style.width = '400px'; // Estilo fijo opcional

        // Insertar imagen dentro del contenedor de columna
        col.appendChild(img);

        // Agregar la columna al contenedor principal
        container.appendChild(col);
    });
}

// Cargar las imágenes en los contenedores correspondientes
cargarImagenes(imgImprenta, 'contenedor-imprenta');
cargarImagenes(imgCursiva, 'contenedor-cursiva');
cargarImagenes(imgDobleLinea, 'contenedor-doble_linea');
