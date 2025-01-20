const imgImprenta = [
  './images/imprenta/44.png',
  './images/imprenta/45.png',
  './images/imprenta/46.png',
  './images/imprenta/47.png',
  './images/imprenta/48.png',
  './images/imprenta/49.png',
  './images/imprenta/50.png',
  './images/imprenta/51.png',
  './images/imprenta/52.png',
  './images/imprenta/53.png',
  './images/imprenta/54.png',
  './images/imprenta/55.png',
  './images/imprenta/56.png',
  './images/imprenta/57.png',
  './images/imprenta/58.png',
  './images/imprenta/59.png',
  './images/imprenta/60.png',
  './images/imprenta/61.png',
  './images/imprenta/62.png',
  './images/imprenta/63.png',
  './images/imprenta/64.png',
  './images/imprenta/65.png',
  './images/imprenta/66.png',
  './images/imprenta/67.png'
];

const imgCursiva = [
  './images/cursiva/1.png',
  './images/cursiva/2.png',
  './images/cursiva/3.png',
  './images/cursiva/4.png',
  './images/cursiva/5.png',
  './images/cursiva/6.png',
  './images/cursiva/7.png',
  './images/cursiva/8.png',
  './images/cursiva/9.png',
  './images/cursiva/10.png',
  './images/cursiva/11.png',
  './images/cursiva/12.png',
  './images/cursiva/13.png',
  './images/cursiva/14.png',
  './images/cursiva/15.png',
  './images/cursiva/16.png',
  './images/cursiva/17.png',
  './images/cursiva/18.png',
  './images/cursiva/19.png',
  './images/cursiva/20.png',
  './images/cursiva/21.png',
  './images/cursiva/22.png',
  './images/cursiva/23.png',
  './images/cursiva/24.png',
  './images/cursiva/25.png',
  './images/cursiva/26.png',
  './images/cursiva/27.png',
  './images/cursiva/28.png',
  './images/cursiva/29.png'
];

const imgDobleLinea = [
  './images/doble_linea/30.png',
  './images/doble_linea/31.png',
  './images/doble_linea/32.png',
  './images/doble_linea/33.png',
  './images/doble_linea/34.png',
  './images/doble_linea/35.png',
  './images/doble_linea/36.png',
  './images/doble_linea/37.png',
  './images/doble_linea/38.png',
  './images/doble_linea/39.png',
  './images/doble_linea/40.png',
  './images/doble_linea/41.png',
  './images/doble_linea/42.png',
  './images/doble_linea/43.png'
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
