// Arreglo centralizado de 16 objetos adaptado a tus archivos locales
const flowersDB = [
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
function createCardHTML(flower) {
    return `
        <div class="flower-card">
            <img src="${flower.img}" alt="${flower.nombre}">
            <div class="flower-info">
                <h3>${flower.nombre}</h3>
                <p class="category-tag">${flower.categoria}</p>
                <button class="btn-view-more" onclick="showDetail(${flower.id})">Ver más</button>
            </div>
        </div>
    `;
}

/**
 * Renderiza las tarjetas de flores en el contenedor del catálogo.
 * @param {Array} list - Arreglo de objetos de flores a mostrar.
 */
function renderCatalog(list) {
    const container = document.getElementById('catalog-container');
    if (!container) return;

    // Optimizamos: Generamos todo el string primero y lo inyectamos una sola vez
    const fullHTML = list.map(flower => createCardHTML(flower)).join('');
    container.innerHTML = fullHTML;
}

/**
 * Filtra el arreglo global flowersDB por categoría.
 * @param {string} category - Nombre de la categoría a filtrar o 'Todas'.
 */
function filterFlowers(category) {
    const result = category === 'Todas' 
        ? flowersDB 
        : flowersDB.filter(flower => flower.categoria === category);
    
    renderCatalog(result);
}

/**
 * Busca una flor por ID y despliega el modal con su información.
 */
function showDetail(id) {
    const flower = flowersDB.find(f => f.id === id);
    if (!flower) return;

    const modal = document.getElementById('meaning-modal');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <img src="${flower.img}" alt="${flower.nombre}" class="modal-image">
        <h2>${flower.nombre}</h2>
        <div class="modal-info">
            <p><strong>Descripción:</strong> ${flower.descripcion}</p>
            <br>
            <p class="significado-texto"><strong>✨ Significado:</strong> ${flower.significado}</p>
        </div>
    `;

    modal.style.display = 'flex';
}

/**
 * Renderiza los resultados del diccionario basados en una búsqueda libre.
 */
function renderDictionary() {
    const search = document.getElementById('emotion-search');
    const query = search ? search.value.toLowerCase() : "";
    const container = document.getElementById('dictionary-container');
    const emptyMessage = document.getElementById('empty-search-message');

    if (!container) return;

    // Filtramos toda la base de datos comparando con el nombre y el significado
    const filteredFlowers = flowersDB.filter(flower => 
        flower.nombre.toLowerCase().includes(query) || 
        flower.significado.toLowerCase().includes(query)
    );

    if (filteredFlowers.length > 0) {
        // Ocultar mensaje de error y mostrar flores
        if (emptyMessage) emptyMessage.style.display = 'none';
        container.innerHTML = filteredFlowers.map(flower => createCardHTML(flower)).join('');
    } else {
        // Mostrar mensaje de error si no hay nada
        container.innerHTML = '';
        if (emptyMessage) emptyMessage.style.display = 'block';
    }
}

/**
 * Cierra el modal de detalles.
 */
function closeModal() {
    const modal = document.getElementById('meaning-modal');
    if (modal) modal.style.display = 'none';
}

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Si estamos en la página del catálogo
    if (document.getElementById('catalog-container')) {
        renderCatalog(flowersDB);
    }
    // Si estamos en la página del diccionario (detectando el nuevo contenedor)
    if (document.getElementById('dictionary-container')) {
        renderDictionary();
    }

    // Validación en tiempo real para campos de solo letras (Nombre)
    const onlyLettersInputs = document.querySelectorAll('#nombre');
    onlyLettersInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            // Reemplaza cualquier dígito numérico por un string vacío
            e.target.value = e.target.value.replace(/[0-9]/g, '');
        });
    });
});