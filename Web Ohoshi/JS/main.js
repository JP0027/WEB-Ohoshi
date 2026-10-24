// Configuración de la Tienda
const OHOSHI_PHONE = "51999999999"; // Cambiar por tu número de WhatsApp comercial

// CATÁLOGO DE FIGURAS CON CÓDIGOS DE LOTE Y MODALIDADES
const CATALOG = [
  {
    id: "fig-01",
    name: "Monkey D. Luffy - Gear 5 (King of Artist)",
    anime: "One Piece",
    category: "Prize",
    manufacturer: "Banpresto / Bandai Spirits",
    pricePEN: 175.00,
    isPreorder: false,
    batchCode: "STOCK-INMED",
    minStockAdvance: 20.00,
    badge: "En Stock",
    scale: "No Escala (16 cm)",
    height: "16 cm",
    material: "PVC & ABS de alta densidad",
    condition: "Nueva sellada en su empaque original con sticker Toei dorado",
    description: "Impresionante figura de Monkey D. Luffy en su transformación Gear 5. Escultura ultra dinámica con el cabello llameante y el vapor icónico moldeado al detalle con pintura perlada.",
    gallery: [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "fig-02",
    name: "Frieren con Báculo de Hechicera 1/7 Scale",
    anime: "Sousou no Frieren",
    category: "Scale 1/7",
    manufacturer: "Good Smile Company",
    pricePEN: 780.00,
    isPreorder: false,
    batchCode: "STOCK-INMED",
    minStockAdvance: 20.00,
    badge: "Stock Limitado",
    scale: "Escala 1/7 (24 cm)",
    height: "24 cm",
    material: "PVC translúcido y ABS pintado",
    condition: "100% Original Japón, caja sellada con holograma de autenticidad",
    description: "Figura de colección prémium que reproduce a Frieren con su atuendo de viaje. Su largo cabello blanco posee puntas translúcidas y la base diorámica representa el campo de flores de su travesía.",
    gallery: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "fig-03",
    name: "Satoru Gojo - Hollow Purple Ver.",
    anime: "Jujutsu Kaisen",
    category: "Preventa",
    manufacturer: "eStream / Shibuya Scramble Figure",
    pricePEN: 1290.00,
    isPreorder: true,
    batchCode: "LOTE-005",
    minStockAdvance: 0,
    badge: "🔥 Preventa (LOTE-005)",
    scale: "Escala 1/7 con Efectos FX",
    height: "33 cm",
    material: "PVC, ABS y resina traslúcida especial",
    condition: "Reserva oficial con abono del 50% (S/. 645.00). Saldo al arribo de lote.",
    description: "Una de las figuras más espectaculares creadas para Jujutsu Kaisen. Gojo desata su Ritual Maldito Purpura rodeado de ondas esféricas de energía translúcida con acabado luminoso.",
    gallery: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "fig-04",
    name: "Nendoroid Anya Forger & Bond",
    anime: "Spy x Family",
    category: "Nendoroid",
    manufacturer: "Good Smile Company",
    pricePEN: 285.00,
    isPreorder: false,
    batchCode: "STOCK-INMED",
    minStockAdvance: 10.00,
    badge: "En Stock",
    scale: "Nendoroid Articulada",
    height: "10 cm (Anya) / 12 cm (Bond)",
    material: "PVC & ABS articulado",
    condition: "Nueva en caja con sellos circulares originales",
    description: "Set completo que incluye a Anya Forger con múltiples caras intercambiables (incluyendo su mítica sonrisa burlona 'Heh') y a su fiel perro Bond con montura.",
    gallery: [
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "fig-05",
    name: "Roronoa Zoro - Asura Demon Nine-Blade Style",
    anime: "One Piece",
    category: "Preventa",
    manufacturer: "MegaHouse (P.O.P Maximum)",
    pricePEN: 1150.00,
    isPreorder: true,
    batchCode: "LOTE-006",
    minStockAdvance: 0,
    badge: "🔥 Preventa (LOTE-006)",
    scale: "Línea P.O.P Maximum",
    height: "29 cm",
    material: "PVC y ABS prémium",
    condition: "Reserva oficial con 50% inicial en Soles. Saldo se cancela cuando arribe el LOTE-006.",
    description: "La obra maestra de Megahouse para Zoro. Manifiesta el espíritu demoníaco Asura con tres cabezas y seis brazos blandiendo las katanas con aura plateada y púrpura.",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "fig-06",
    name: "Ryomen Sukuna - Malevolent Shrine Ver.",
    anime: "Jujutsu Kaisen",
    category: "Scale 1/7",
    manufacturer: "Kotobukiya (ARTFX J)",
    pricePEN: 690.00,
    isPreorder: false,
    batchCode: "STOCK-INMED",
    minStockAdvance: 20.00,
    badge: "En Stock",
    scale: "Escala 1/8 (21.5 cm)",
    height: "21.5 cm",
    material: "PVC pintado",
    condition: "Caja sellada nueva de fábrica importada de Japón",
    description: "Sukuna sentado en su trono de calaveras recreando su dominio Santuario Malevolente. Tatuajes oscuros de maldición con relieve nítido y expresión arrogante clásica.",
    gallery: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "fig-07",
    name: "Kamado Nezuko - Blood Demon Art Ver.",
    anime: "Demon Slayer",
    category: "Prize",
    manufacturer: "Aniplex+ / Bandai Spirits",
    pricePEN: 195.00,
    isPreorder: false,
    batchCode: "STOCK-INMED",
    minStockAdvance: 20.00,
    badge: "En Stock",
    scale: "Pop Up Parade L (18 cm)",
    height: "18 cm",
    material: "PVC & ABS",
    condition: "Nueva en caja con sellos Aniplex",
    description: "Nezuko activando su Técnica de Sangre Demoniaca con flamas rosadas alrededor de su kimono. Colores intensos y base hexagonal rígida.",
    gallery: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "fig-08",
    name: "Nendoroid Fern con Bastón",
    anime: "Sousou no Frieren",
    category: "Nendoroid",
    manufacturer: "Good Smile Company",
    pricePEN: 270.00,
    isPreorder: false,
    batchCode: "STOCK-INMED",
    minStockAdvance: 10.00,
    badge: "En Stock",
    scale: "Nendoroid Articulada",
    height: "10 cm",
    material: "PVC y ABS",
    condition: "Caja sellada original de Good Smile",
    description: "La aprendiz de Frieren, Fern, en formato adorable Nendoroid. Incluye sus icónicos panqueques gigantescos y piezas para lanzar Zoltraak.",
    gallery: [
      "https://images.unsplash.com/photo-1569701813229-33284b643e3c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80"
    ]
  }
];

// Estado de la Aplicación
let cart = [];
let selectedCategory = 'all';
let selectedAnime = '';
let searchQuery = '';
let currentDetailProduct = null;
let detailSelectedQty = 1;
let selectedPaymentOption = 'full';

function formatSoles(amount) {
  return `S/. ${amount.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupEventListeners();
});

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const noResults = document.getElementById('no-results');
  const countEl = document.getElementById('items-count');

  const filtered = CATALOG.filter(item => {
    const matchCategory = selectedCategory === 'all' 
      ? true 
      : (selectedCategory === 'Preventa' ? item.isPreorder : item.category === selectedCategory);

    const matchAnime = !selectedAnime || item.anime === selectedAnime;

    const q = searchQuery.toLowerCase().trim();
    const matchQuery = !q || 
      item.name.toLowerCase().includes(q) || 
      item.anime.toLowerCase().includes(q) || 
      item.manufacturer.toLowerCase().includes(q);

    return matchCategory && matchAnime && matchQuery;
  });

  countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }

  noResults.classList.add('hidden');

  grid.innerHTML = filtered.map(item => `
    <article class="bg-white rounded-3xl border-2 border-ohoshi-sand overflow-hidden shadow-ohoshi-card hover:shadow-ohoshi-hover hover:border-ohoshi-red transition-all duration-300 flex flex-col group">
      
      <div class="relative aspect-square overflow-hidden bg-stone-100 cursor-pointer" onclick="openProductDetail('${item.id}')">
        <img 
          src="${item.gallery[0]}" 
          alt="${item.name}" 
          loading="lazy" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onerror="this.src='https://placehold.co/600x600/FFFDF7/E52438?text=OHOSHI+Figura'"
        >

        <div class="absolute top-3 left-3">
          <span class="text-[10px] font-bold font-manga uppercase px-2.5 py-1 rounded-full shadow-sm ${
            item.isPreorder ? 'bg-amber-500 text-white' : 'bg-ohoshi-dark text-white'
          }">
            ${item.badge}
          </span>
        </div>

        <div class="absolute top-3 right-3">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-white/95 border border-ohoshi-sand text-stone-700 shadow-sm">
            ${item.category}
          </span>
        </div>

        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent py-2 px-3 text-white text-[11px] font-semibold flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <span>🔍 Ver detalle & opciones de pago</span>
          <span class="underline">Abrir</span>
        </div>
      </div>

      <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[11px] font-bold text-ohoshi-terracotta uppercase tracking-wider block">
            ${item.anime}
          </span>
          <h3 
            onclick="openProductDetail('${item.id}')" 
            class="font-manga text-sm sm:text-base text-ohoshi-dark mt-1 line-clamp-2 hover:text-ohoshi-red transition-colors cursor-pointer" 
            title="${item.name}"
          >
            ${item.name}
          </h3>
          <p class="text-[11px] text-stone-400 mt-1">${item.manufacturer} • ${item.scale}</p>
        </div>

        <div class="mt-4 pt-3 border-t border-ohoshi-sand flex flex-col gap-2">
          <div class="flex items-baseline justify-between">
            <span class="text-[10px] uppercase font-bold text-stone-400">
              ${item.isPreorder ? 'Reserva con 50%' : 'Reserva desde S/. 10/20'}
            </span>
            <span class="font-manga text-lg sm:text-xl text-ohoshi-red">${formatSoles(item.pricePEN)}</span>
          </div>

          <div class="grid grid-cols-2 gap-2 mt-1">
            <button 
              onclick="openProductDetail('${item.id}')" 
              class="w-full py-2 px-2 bg-ohoshi-cream hover:bg-ohoshi-sand/60 text-ohoshi-dark border border-ohoshi-sand text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1"
            >
              <svg class="w-3.5 h-3.5 text-ohoshi-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              <span>Ver Fotos</span>
            </button>

            <button 
              onclick="addToCart('${item.id}', 1)" 
              class="w-full py-2 px-2 bg-ohoshi-red hover:bg-ohoshi-crimson text-white text-xs font-bold font-manga rounded-xl shadow-ohoshi-red transition-all flex items-center justify-center gap-1 active:scale-95"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
              <span>Añadir</span>
            </button>
          </div>

        </div>

      </div>
    </article>
  `).join('');
}

function openProductDetail(productId) {
  const item = CATALOG.find(p => p.id === productId);
  if (!item) return;

  currentDetailProduct = item;
  detailSelectedQty = 1;
  selectedPaymentOption = item.isPreorder ? 'preorder_50' : 'reserve_20';

  const modal = document.getElementById('product-detail-modal');
  const container = document.getElementById('modal-container');
  const body = document.getElementById('modal-body');

  body.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      <div class="lg:col-span-6 space-y-3">
        <div class="aspect-square w-full rounded-2xl overflow-hidden bg-stone-100 border-2 border-ohoshi-sand relative shadow-inner">
          <img 
            id="gallery-main-image" 
            src="${item.gallery[0]}" 
            alt="${item.name}" 
            class="w-full h-full object-cover transition-opacity duration-200"
          >
          <span class="absolute top-3 left-3 text-[10px] font-bold font-manga uppercase px-3 py-1 rounded-full ${
            item.isPreorder ? 'bg-amber-500 text-white' : 'bg-ohoshi-dark text-white'
          }">
            ${item.badge}
          </span>
        </div>

        <div>
          <span class="text-[11px] font-bold text-stone-500 block mb-1.5">Galería de fotos de la figura:</span>
          <div class="flex items-center gap-2 overflow-x-auto pb-1">
            ${item.gallery.map((imgUrl, index) => `
              <button 
                onclick="switchMainGalleryImage('${imgUrl}', this)"
                class="thumb-btn shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  index === 0 ? 'border-ohoshi-red ring-2 ring-ohoshi-red/30' : 'border-ohoshi-sand hover:border-ohoshi-terracotta opacity-75'
                }"
              >
                <img src="${imgUrl}" alt="Thumbnail ${index + 1}" class="w-full h-full object-cover">
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="lg:col-span-6 space-y-4">
        <div>
          <span class="inline-block text-xs font-bold text-ohoshi-terracotta uppercase tracking-wider bg-ohoshi-cloud px-2.5 py-1 rounded-lg border border-ohoshi-terracotta/30">
            ${item.anime}
          </span>
          <h2 class="font-manga text-xl sm:text-2xl text-ohoshi-dark mt-2 leading-tight">${item.name}</h2>
          <p class="text-xs text-stone-500 mt-1">Línea Oficial: <strong class="text-stone-800">${item.manufacturer}</strong> • Lote: <strong class="text-ohoshi-crimson">${item.batchCode}</strong></p>
        </div>

        <!-- Precios y Selección de Modo de Pago -->
        <div class="bg-ohoshi-cream p-4 rounded-2xl border border-ohoshi-sand space-y-3">
          <div class="flex items-baseline justify-between">
            <div>
              <span class="text-[10px] font-bold uppercase text-stone-400 block">Precio Total de la Figura</span>
              <span class="font-manga text-2xl sm:text-3xl text-ohoshi-red">${formatSoles(item.pricePEN)}</span>
            </div>
            <div class="text-right">
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">✓ Auténtico de Japón</span>
            </div>
          </div>

          <!-- Selector de Pago: Stock (S/. 10/20 vs Total) o Preventa (50% vs Total) -->
          <div class="pt-2 border-t border-dashed border-ohoshi-sand">
            <span class="text-[11px] font-bold text-stone-700 block mb-2">Selecciona cómo deseas pagar:</span>
            
            ${item.isPreorder ? `
              <div class="grid grid-cols-2 gap-2 text-xs">
                <button type="button" onclick="selectPaymentMode('preorder_50')" id="opt-preorder-50" class="pay-opt-btn p-2.5 rounded-xl border-2 border-ohoshi-red bg-white font-bold text-left shadow-sm">
                  <span class="block text-ohoshi-red font-manga">Adelanto 50%</span>
                  <span class="text-[10px] text-stone-600 block mt-0.5">${formatSoles(item.pricePEN * 0.5)} inicial</span>
                  <span class="text-[9px] text-emerald-600 font-semibold block mt-0.5">Saldo al llegar el lote</span>
                </button>

                <button type="button" onclick="selectPaymentMode('full')" id="opt-full" class="pay-opt-btn p-2.5 rounded-xl border-2 border-ohoshi-sand bg-white text-stone-600 text-left">
                  <span class="block font-bold">Pago 100%</span>
                  <span class="text-[10px] text-stone-500 block mt-0.5">${formatSoles(item.pricePEN)}</span>
                  <span class="text-[9px] text-stone-400 block mt-0.5">Sin saldo pendiente</span>
                </button>
              </div>
            ` : `
              <div class="grid grid-cols-3 gap-2 text-xs">
                <button type="button" onclick="selectPaymentMode('reserve_20')" id="opt-reserve-20" class="pay-opt-btn p-2 rounded-xl border-2 border-ohoshi-red bg-white font-bold text-left shadow-sm">
                  <span class="block text-ohoshi-red font-manga text-[11px]">Reserva S/. 20</span>
                  <span class="text-[9px] text-stone-500 block">Saldo: ${formatSoles(item.pricePEN - 20)}</span>
                  <span class="text-[9px] text-amber-600 block font-semibold">14 días plazo</span>
                </button>

                <button type="button" onclick="selectPaymentMode('reserve_10')" id="opt-reserve-10" class="pay-opt-btn p-2 rounded-xl border-2 border-ohoshi-sand bg-white text-stone-600 text-left">
                  <span class="block font-bold text-[11px]">Reserva S/. 10</span>
                  <span class="text-[9px] text-stone-500 block">Saldo: ${formatSoles(item.pricePEN - 10)}</span>
                  <span class="text-[9px] text-amber-600 block font-semibold">14 días plazo</span>
                </button>

                <button type="button" onclick="selectPaymentMode('full')" id="opt-full" class="pay-opt-btn p-2 rounded-xl border-2 border-ohoshi-sand bg-white text-stone-600 text-left">
                  <span class="block font-bold text-[11px]">Pago 100%</span>
                  <span class="text-[9px] text-stone-500 block">${formatSoles(item.pricePEN)}</span>
                  <span class="text-[9px] text-stone-400 block">Liquidado</span>
                </button>
              </div>
            `}
          </div>
        </div>

        <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">${item.description}</p>

        <!-- Technical Specifications Grid -->
        <div class="bg-white p-3.5 rounded-2xl border border-ohoshi-sand text-xs space-y-1.5">
          <span class="font-bold text-ohoshi-dark uppercase text-[10px] tracking-wider block border-b border-stone-100 pb-1">Ficha Técnica de Colección:</span>
          <div class="grid grid-cols-2 gap-2 text-stone-600 pt-1 text-[11px]">
            <div>• <strong>Escala:</strong> ${item.scale}</div>
            <div>• <strong>Altura:</strong> ${item.height}</div>
            <div>• <strong>Material:</strong> ${item.material}</div>
            <div>• <strong>Condición:</strong> Sellada en caja</div>
          </div>
        </div>

        <!-- Cantidad y Acciones -->
        <div class="flex items-center gap-3 pt-1">
          <span class="text-xs font-bold text-stone-700">Cantidad:</span>
          <div class="flex items-center bg-ohoshi-cream border-2 border-ohoshi-sand rounded-xl px-2 py-1">
            <button onclick="updateModalQuantity(-1)" class="w-7 h-7 flex items-center justify-center font-bold text-stone-700 hover:text-ohoshi-red text-base">-</button>
            <span id="modal-qty-number" class="w-8 text-center font-manga text-sm text-ohoshi-dark">1</span>
            <button onclick="updateModalQuantity(1)" class="w-7 h-7 flex items-center justify-center font-bold text-stone-700 hover:text-ohoshi-red text-base">+</button>
          </div>
          <span class="text-xs text-stone-500 font-semibold" id="modal-total-calc">(Total: ${formatSoles(item.pricePEN)})</span>
        </div>

        <div class="space-y-2 pt-2">
          <button 
            onclick="buySingleProductViaWhatsApp()"
            class="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-manga text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Reservar / Comprar por WhatsApp</span>
          </button>

          <button 
            onclick="addModalProductToCart()"
            class="w-full py-3 px-4 bg-ohoshi-red hover:bg-ohoshi-crimson text-white font-manga text-xs rounded-xl shadow-ohoshi-red transition-all flex items-center justify-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span>Añadir a mi Carrito</span>
          </button>
        </div>

      </div>
    </div>
  `;

  modal.classList.remove('invisible', 'opacity-0');
  container.classList.remove('scale-95');
  container.classList.add('scale-100');
}

function selectPaymentMode(mode) {
  selectedPaymentOption = mode;
  document.querySelectorAll('.pay-opt-btn').forEach(btn => {
    btn.className = "pay-opt-btn p-2 rounded-xl border-2 border-ohoshi-sand bg-white text-stone-600 text-left transition-all";
  });
  const activeBtn = document.getElementById(`opt-${mode.replace('_', '-')}`);
  if (activeBtn) {
    activeBtn.className = "pay-opt-btn p-2 rounded-xl border-2 border-ohoshi-red bg-white font-bold text-left shadow-sm transition-all";
  }
}

function switchMainGalleryImage(imgUrl, clickedBtn) {
  const mainImg = document.getElementById('gallery-main-image');
  mainImg.style.opacity = '0.4';
  setTimeout(() => {
    mainImg.src = imgUrl;
    mainImg.style.opacity = '1';
  }, 150);

  document.querySelectorAll('.thumb-btn').forEach(b => {
    b.className = "thumb-btn shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 border-ohoshi-sand hover:border-ohoshi-terracotta opacity-75 transition-all";
  });

  clickedBtn.className = "thumb-btn shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 border-ohoshi-red ring-2 ring-ohoshi-red/30 opacity-100 transition-all";
}

function updateModalQuantity(delta) {
  detailSelectedQty += delta;
  if (detailSelectedQty < 1) detailSelectedQty = 1;
  if (detailSelectedQty > 10) detailSelectedQty = 10;

  document.getElementById('modal-qty-number').textContent = detailSelectedQty;
  const totalAmount = currentDetailProduct.pricePEN * detailSelectedQty;
  document.getElementById('modal-total-calc').textContent = `(Total: ${formatSoles(totalAmount)})`;
}

function buySingleProductViaWhatsApp() {
  if (!currentDetailProduct) return;

  const totalAmount = currentDetailProduct.pricePEN * detailSelectedQty;
  let advanceAmount = totalAmount;
  let pendingAmount = 0;
  let paymentText = "Pago Total (100%)";
  let ruleNotice = "";

  if (currentDetailProduct.isPreorder) {
    if (selectedPaymentOption === 'preorder_50') {
      advanceAmount = totalAmount * 0.5;
      pendingAmount = totalAmount - advanceAmount;
      paymentText = `Reserva Preventa con 50% de Adelanto`;
      ruleNotice = `El saldo pendiente de ${formatSoles(pendingAmount)} se cancela cuando arribe a almacén el ${currentDetailProduct.batchCode}.`;
    }
  } else {
    if (selectedPaymentOption === 'reserve_20') {
      advanceAmount = 20.00 * detailSelectedQty;
      pendingAmount = totalAmount - advanceAmount;
      paymentText = `Reserva con S/. 20.00`;
      ruleNotice = `Plazo máximo de 14 días (2 semanas) para liquidar el saldo restante de ${formatSoles(pendingAmount)}.`;
    } else if (selectedPaymentOption === 'reserve_10') {
      advanceAmount = 10.00 * detailSelectedQty;
      pendingAmount = totalAmount - advanceAmount;
      paymentText = `Reserva con S/. 10.00`;
      ruleNotice = `Plazo máximo de 14 días (2 semanas) para liquidar el saldo restante de ${formatSoles(pendingAmount)}.`;
    }
  }

  let msg = `🏮 *RESERVA DE FIGURA - OHOSHI STORE* 🏮\n`;
  msg += `==============================\n`;
  msg += `¡Hola OHOSHI STORE! Deseo coordinar esta reserva:\n\n`;
  msg += `📌 *Producto:* ${currentDetailProduct.name}\n`;
  msg += `✨ *Anime:* ${currentDetailProduct.anime}\n`;
  msg += `🏷️ *Lote / Stock:* ${currentDetailProduct.batchCode}\n`;
  msg += `🔢 *Cantidad:* ${detailSelectedQty} unidad(es)\n`;
  msg += `💰 *Precio Total:* ${formatSoles(totalAmount)}\n`;
  msg += `💳 *Modalidad elegida:* ${paymentText}\n`;
  msg += `💵 *Monto a abonar hoy:* ${formatSoles(advanceAmount)}\n`;
  if (pendingAmount > 0) {
    msg += `⏳ *Saldo Pendiente:* ${formatSoles(pendingAmount)}\n`;
    msg += `ℹ️ *Regla:* ${ruleNotice}\n`;
  }
  msg += `==============================\n`;
  msg += `Por favor facilítenme los números de cuenta (Yape / Plin / BCP) para transferirles el comprobante de inmediato. ¡Muchas gracias!`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${OHOSHI_PHONE}?text=${encoded}`, '_blank');
  closeProductModal();
}

function addModalProductToCart() {
  if (!currentDetailProduct) return;
  addToCart(currentDetailProduct.id, detailSelectedQty);
  closeProductModal();
  toggleCart(true);
}

function closeProductModal() {
  const modal = document.getElementById('product-detail-modal');
  const container = document.getElementById('modal-container');
  container.classList.remove('scale-100');
  container.classList.add('scale-95');
  modal.classList.add('invisible', 'opacity-0');
}

function addToCart(productId, quantity = 1) {
  const product = CATALOG.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity: quantity });
  }

  updateCartDrawer();
  showToast(`¡${product.name.slice(0, 22)}... agregado!`, `Cantidad: ${quantity} unidad(es)`);
}

function changeCartItemQty(productId, amount) {
  const index = cart.findIndex(i => i.id === productId);
  if (index === -1) return;

  cart[index].quantity += amount;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  updateCartDrawer();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartDrawer();
}

function updateCartDrawer() {
  const badge = document.getElementById('cart-badge');
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const totalEl = document.getElementById('cart-total-val');

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPEN = cart.reduce((acc, curr) => acc + (curr.pricePEN * curr.quantity), 0);

  if (totalItems > 0) {
    badge.classList.remove('hidden');
    badge.textContent = totalItems;
  } else {
    badge.classList.add('hidden');
  }

  subtotalEl.textContent = formatSoles(totalPEN);
  totalEl.textContent = formatSoles(totalPEN);

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center py-16 text-stone-400">
        <div class="w-16 h-16 rounded-full bg-ohoshi-cream flex items-center justify-center mb-3">
          <svg class="w-8 h-8 text-ohoshi-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <p class="font-manga text-ohoshi-dark text-sm">Tu bolsa de compra está vacía</p>
        <p class="text-xs text-stone-500 mt-1 max-w-[200px]">Selecciona tus figuras para armar tu pedido.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="flex gap-3 bg-ohoshi-cream/60 p-3 rounded-2xl border border-ohoshi-sand">
      <img 
        src="${item.gallery[0]}" 
        alt="${item.name}" 
        class="w-16 h-16 rounded-xl object-cover bg-white border border-ohoshi-sand shrink-0"
        onerror="this.src='https://placehold.co/100x100/FFFDF7/E52438?text=OHOSHI'"
      >
      <div class="flex-1 min-w-0 flex flex-col justify-between">
        <div class="flex items-start justify-between gap-1">
          <h4 class="text-xs font-bold text-ohoshi-dark truncate" title="${item.name}">${item.name}</h4>
          <button onclick="removeFromCart('${item.id}')" class="text-stone-400 hover:text-ohoshi-red p-0.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p class="text-[10px] text-ohoshi-terracotta font-semibold">${item.anime} • [${item.batchCode}]</p>

        <div class="flex items-center justify-between mt-1">
          <span class="font-manga text-xs text-ohoshi-red">${formatSoles(item.pricePEN * item.quantity)}</span>
          
          <div class="flex items-center bg-white rounded-lg border border-ohoshi-sand px-1">
            <button onclick="changeCartItemQty('${item.id}', -1)" class="w-5 h-5 flex items-center justify-center text-xs font-bold text-stone-600 hover:text-ohoshi-red">-</button>
            <span class="text-xs font-bold px-1.5 text-ohoshi-dark">${item.quantity}</span>
            <button onclick="changeCartItemQty('${item.id}', 1)" class="w-5 h-5 flex items-center justify-center text-xs font-bold text-stone-600 hover:text-ohoshi-red">+</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function processMultiCartWhatsAppCheckout() {
  if (cart.length === 0) {
    showToast("Tu bolsa está vacía", "Agrega al menos una figura");
    return;
  }

  const clientName = document.getElementById('order-client-name').value.trim();
  const clientCity = document.getElementById('order-client-city').value.trim();
  const paymentMethod = document.getElementById('order-payment-method').value;

  if (!clientName || !clientCity) {
    showToast("Faltan datos", "Por favor ingresa tu Nombre y Ciudad/Distrito");
    document.getElementById('order-client-name').focus();
    return;
  }

  const totalPEN = cart.reduce((acc, curr) => acc + (curr.pricePEN * curr.quantity), 0);

  let msg = `🏮 *PEDIDO CONSOLIDADO - OHOSHI STORE* 🏮\n`;
  msg += `==============================\n`;
  msg += `👤 *Cliente:* ${clientName}\n`;
  msg += `📍 *Distrito / Ciudad:* ${clientCity}\n`;
  msg += `💳 *Método de Pago:* ${paymentMethod}\n`;
  msg += `==============================\n`;
  msg += `📦 *DETALLE DE FIGURAS:*\n\n`;

  cart.forEach((item, index) => {
    msg += `${index + 1}. *${item.name}*\n`;
    msg += `   • Anime: ${item.anime}\n`;
    msg += `   • Lote/Stock: ${item.batchCode}\n`;
    msg += `   • Cantidad: ${item.quantity}\n`;
    msg += `   • Subtotal: ${formatSoles(item.pricePEN * item.quantity)}\n\n`;
  });

  msg += `==============================\n`;
  msg += `💰 *TOTAL GENERAL: ${formatSoles(totalPEN)}*\n`;
  msg += `==============================\n`;
  msg += `Hola amigos de OHOSHI STORE, por favor confírmenme el costo de envío a mi dirección y los datos de pago para transferirles el adelanto o la totalidad. ¡Muchas gracias!`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${OHOSHI_PHONE}?text=${encoded}`, '_blank');
}

function toggleCart(open) {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (open) {
    overlay.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
  } else {
    overlay.classList.add('invisible', 'opacity-0', 'pointer-events-none');
  }
}

function showToast(title, subtitle = "Se añadió a tu bolsa de compra") {
  const toast = document.getElementById('toast-notify');
  document.getElementById('toast-title').textContent = title;
  document.getElementById('toast-subtitle').textContent = subtitle;

  toast.classList.remove('opacity-0', '-translate-y-12');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', '-translate-y-12');
  }, 2600);
}

function filterByAnime(animeName) {
  selectedAnime = animeName;
  document.querySelectorAll('.anime-pill').forEach(btn => {
    if ((!animeName && btn.textContent === 'Todos') || btn.textContent === animeName) {
      btn.className = "anime-pill px-3 py-1 rounded-lg bg-ohoshi-cloud text-ohoshi-dark font-bold border border-ohoshi-terracotta";
    } else {
      btn.className = "anime-pill px-3 py-1 rounded-lg bg-white border border-ohoshi-sand text-stone-600 hover:text-ohoshi-red";
    }
  });
  renderProducts();
}

function resetAllFilters() {
  selectedCategory = 'all';
  selectedAnime = '';
  searchQuery = '';
  document.getElementById('search-input').value = '';
  document.getElementById('search-input-mobile').value = '';

  document.querySelectorAll('.cat-btn').forEach(b => {
    if (b.dataset.cat === 'all') {
      b.className = "cat-btn active-category px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-ohoshi-red text-white shadow-ohoshi-red transition-all";
    } else {
      b.className = "cat-btn px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white text-stone-700 hover:border-ohoshi-red border border-ohoshi-sand transition-all";
    }
  });

  filterByAnime('');
  renderProducts();
}

function setupEventListeners() {
  document.getElementById('cart-toggle-btn').addEventListener('click', () => toggleCart(true));
  document.getElementById('close-cart-btn').addEventListener('click', () => toggleCart(false));
  document.getElementById('cart-backdrop').addEventListener('click', () => toggleCart(false));
  document.getElementById('modal-backdrop').addEventListener('click', closeProductModal);

  const desktopSearch = document.getElementById('search-input');
  const mobileSearch = document.getElementById('search-input-mobile');

  const onSearch = (e) => {
    searchQuery = e.target.value;
    if (e.target === desktopSearch) mobileSearch.value = searchQuery;
    if (e.target === mobileSearch) desktopSearch.value = searchQuery;
    renderProducts();
  };

  desktopSearch.addEventListener('input', onSearch);
  mobileSearch.addEventListener('input', onSearch);

  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => {
        b.className = "cat-btn px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white text-stone-700 hover:border-ohoshi-red border border-ohoshi-sand transition-all";
      });
      btn.className = "cat-btn active-category px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-ohoshi-red text-white shadow-ohoshi-red transition-all";
      selectedCategory = btn.dataset.cat;
      renderProducts();
    });
  });
}