// Arreglo centralizado de 16 objetos adaptado a tus archivos locales
const dbFlores = [
    // --- CATEGORÍA: ROSAS ---
    {
        id: 1,
        nombre: "Rosa Roja",
        categoria: "Rosas",
        descripcion: "La reina de las flores, conocida por su elegancia y espinas protectoras.",
        significado: "Amor apasionado, respeto, deseo, seducción y una declaración romántica incondicional de compromiso.",
        img: "img/rosa-roja.jpg"
    },
    {
        id: 2,
        nombre: "Rosa Blanca",
        categoria: "Rosas",
        descripcion: "Flor de pétalos pulcros que transmite calma y solemnidad.",
        significado: "Pureza, inocencia, virtud, esperanza, nuevos comienzos, humildad y paz espiritual.",
        img: "img/rosa-blanca.jpg"
    },
    {
        id: 3,
        nombre: "Rosa Amarilla",
        categoria: "Rosas",
        descripcion: "Una rosa vibrante que ilumina cualquier espacio con su tono brillante.",
        significado: "Amistad sincera, alegría, compañerismo, gratitud, entusiasmo y la felicidad de compartir.",
        img: "img/rosa-amarilla.jpg"
    },
    {
        id: 4,
        nombre: "Rosa Rosada",
        categoria: "Rosas",
        descripcion: "De tono suave y dulce, evoca ternura desde el primer vistazo.",
        significado: "Gratitud, aprecio, simpatía, admiración, dulzura y la belleza de la gentileza y bondad.",
        img: "img/rosa-rosada.jpg"
    },

    // --- CATEGORÍA: GIRASOLES ---
    {
        id: 5,
        nombre: "Girasol Común",
        categoria: "Girasoles",
        descripcion: "Flor gigante que sigue fielmente la trayectoria del sol cada día.",
        significado: "Adoración, lealtad, energía positiva, fe, apoyo y longevidad bajo el sol.",
        img: "img/girasol-comun.jpg"
    },
    {
        id: 6,
        nombre: "Girasol Enano",
        categoria: "Girasoles",
        descripcion: "Una variante compacta pero igual de radiante, ideal para jardines pequeños.",
        significado: "Optimismo, vitalidad juvenil, sonrisa, juego y enfoque hacia las cosas buenas y curiosas de la vida.",
        img: "img/girasol-enano.jpg"
    },
    {
        id: 7,
        nombre: "Girasol Gigante",
        categoria: "Girasoles",
        descripcion: "Variedad imponente que destaca sobre cualquier otra planta en el jardín.",
        significado: "Fuerza, crecimiento espiritual, orgullo sano, autoridad, triunfo, liderazgo y éxito duradero.",
        img: "img/girasol-gigante.jpg"
    },
    {
        id: 8,
        nombre: "Girasol Rojo",
        categoria: "Girasoles",
        descripcion: "Una mutación exótica y llamativa con pétalos de un rojo profundo aterciopelado.",
        significado: "Pasión oculta, misterio, fuego, energía de la tierra, magnetismo y vitalidad renovada.",
        img: "img/girasol-rojo.jpg"
    },

    // --- CATEGORÍA: ORQUÍDEAS ---
    {
        id: 9,
        nombre: "Orquídea Phalaenopsis",
        categoria: "Orquídeas",
        descripcion: "Conocida como orquídea mariposa por la hermosa forma de sus pétalos.",
        significado: "Elegancia, refinamiento, sensualidad, lujo, sofisticación y una belleza perfecta de atracción.",
        img: "img/orquidea-phalaenopsis.jpg"
    },
    {
        id: 10,
        nombre: "Orquídea Vanda",
        categoria: "Orquídeas",
        descripcion: "Orquídea aérea que absorbe los nutrientes directamente de la humedad del ambiente.",
        significado: "Adaptabilidad, soberanía, respeto, solidez, amor maduro, estabilidad y admiración noble.",
        img: "img/orquidea-vanda.png" // Es un .png según tu explorador
    },
    {
        id: 11,
        nombre: "Orquídea Cattleya",
        categoria: "Orquídeas",
        descripcion: "Considerada una de las orquídeas más vistosas por el gran tamaño de sus flores.",
        significado: "Afecto puro, distinción, carisma, gracia, encanto natural, equilibrio y madurez emocional.",
        img: "img/orquidea-cattleya.jpg"
    },
    {
        id: 12,
        nombre: "Orquídea Dendrobium",
        categoria: "Orquídeas",
        descripcion: "Crecen en ramilletes alargados y son famosas por su resistencia.",
        significado: "Constancia, fidelidad, paciencia, protección, dulzura ante la adversidad y armonía en el hogar.",
        img: "img/orquidea-dendrobium.jpg"
    },

    // --- CATEGORÍA: EXÓTICAS ---
    {
        id: 13,
        nombre: "Ave del Paraíso",
        categoria: "Exóticas",
        descripcion: "Flor tropical cuya forma imita a un ave en pleno vuelo.",
        significado: "Libertad, magnificencia, éxito, aventura, victoria, optimismo y la alegría exótica del mañana.",
        img: "img/ave-del-paraiso.jpg"
    },
    {
        id: 14,
        nombre: "Flor de Loto",
        categoria: "Exóticas",
        descripcion: "Famosa por florecer majestuosamente desde el lodo de estanques oscuros.",
        significado: "Pureza del cuerpo y alma, superación, sabiduría, iluminación, paz interior y renacimiento espiritual.",
        img: "img/flor-de-loto.jpg"
    },
    {
        id: 15,
        nombre: "Protea",
        categoria: "Exóticas",
        descripcion: "Una de las flores más antiguas del planeta, con un centro imponente.",
        significado: "Diversidad, transformación, valentía, audacia, rareza, carácter y originalidad.",
        img: "img/protea.jpg"
    },
    {
        id: 16,
        nombre: "Hibisco",
        categoria: "Exóticas",
        descripcion: "Flor tropical de pétalos delicados y estambre largo y vistoso.",
        significado: "Belleza delicada, juventud pasajera, pasión tropical, feminidad, frescura y encanto exótico intenso.",
        img: "img/hibisco.jpg"
    }
];

/**
 * Helper para generar el HTML de una tarjeta de flor.
 */
function crearHtmlTarjeta(flor) {
    return `
        <div class="tarjeta-flor">
            <img src="${flor.img}" alt="${flor.nombre}">
            <div class="info-flor">
                <h3>${flor.nombre}</h3>
                <p class="etiqueta-categoria">${flor.categoria}</p>
                <button class="btn-ver-mas" onclick="mostrarDetalle(${flor.id})">Ver más</button>
            </div>
        </div>
    `;
}

/**
 * Renderiza las tarjetas de flores en el contenedor del catálogo.
 * @param {Array} list - Arreglo de objetos de flores a mostrar.
 */
function renderizarCatalogo(lista) {
    const contenedor = document.getElementById('contenedor-catalogo');
    if (!contenedor) return;

    // Optimizamos: Generamos todo el string primero y lo inyectamos una sola vez
    const htmlCompleto = lista.map(flor => crearHtmlTarjeta(flor)).join('');
    contenedor.innerHTML = htmlCompleto;
}

/**
 * Filtra el arreglo global dbFlores por categoría.
 * @param {string} category - Nombre de la categoría a filtrar o 'Todas'.
 */
function filtrarFlores(categoria) {
    const resultado = categoria === 'Todas' 
        ? dbFlores 
        : dbFlores.filter(flor => flor.categoria === categoria);
    
    renderizarCatalogo(resultado);
}

/**
 * Busca una flor por ID y despliega el modal con su información.
 */
function mostrarDetalle(id) {
    const flor = dbFlores.find(f => f.id === id);
    if (!flor) return;

    const modal = document.getElementById('modal-significado');
    const contenido = document.getElementById('contenido-modal');

    contenido.innerHTML = `
        <img src="${flor.img}" alt="${flor.nombre}" class="imagen-modal">
        <h2>${flor.nombre}</h2>
        <div class="info-modal">
            <p><strong>Descripción:</strong> ${flor.descripcion}</p>
            <br>
            <p class="significado-texto"><strong>✨ Significado:</strong> ${flor.significado}</p>
        </div>
    `;

    modal.style.display = 'flex';
}

/**
 * Renderiza los resultados del diccionario basados en una búsqueda libre.
 */
function renderizarDiccionario() {
    const buscador = document.getElementById('buscador-emociones');
    const consulta = buscador ? buscador.value.toLowerCase() : "";
    const contenedor = document.getElementById('contenedor-diccionario');
    const mensajeVacio = document.getElementById('mensaje-busqueda-vacia');

    if (!contenedor) return;

    // Filtramos toda la base de datos comparando con el nombre y el significado
    const floresFiltradas = dbFlores.filter(flor => 
        flor.nombre.toLowerCase().includes(consulta) || 
        flor.significado.toLowerCase().includes(consulta)
    );

    if (floresFiltradas.length > 0) {
        // Ocultar mensaje de error y mostrar flores
        if (mensajeVacio) mensajeVacio.style.display = 'none';
        contenedor.innerHTML = floresFiltradas.map(flor => crearHtmlTarjeta(flor)).join('');
    } else {
        // Mostrar mensaje de error si no hay nada
        contenedor.innerHTML = '';
        if (mensajeVacio) mensajeVacio.style.display = 'block';
    }
}

/**
 * Cierra el modal de detalles.
 */
function cerrarModal() {
    const modal = document.getElementById('modal-significado');
    if (modal) modal.style.display = 'none';
}

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Si estamos en la página del catálogo
    if (document.getElementById('contenedor-catalogo')) {
        renderizarCatalogo(dbFlores);
    }
    // Si estamos en la página del diccionario (detectando el nuevo contenedor)
    if (document.getElementById('contenedor-diccionario')) {
        renderizarDiccionario();
    }

    // Validación en tiempo real para campos de solo letras (Nombre)
    const entradasSoloLetras = document.querySelectorAll('#nombre');
    entradasSoloLetras.forEach(entrada => {
        entrada.addEventListener('input', (e) => {
            // Reemplaza cualquier dígito numérico por un string vacío
            e.target.value = e.target.value.replace(/[0-9]/g, '');
        });
    });
});