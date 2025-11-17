// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573028379547'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 5000; // tarifa por defecto de domicilio

// ---------- Datos de ejemplo ----------
const products = [
  // ==========================
//        HOT DOGS
// ==========================
{
  id: 'hd1',
  category: 'Combos',
  title: 'Classic Hot Dog',
  price: 20000,
  desc: 'Perro clásico con salchicha americana, ripio, cebolla mayo, queso y salsas.',
  ingredients: ['Salchicha americana', 'Ripio', 'Cebolla mayo', 'Queso', 'Salsas'],
  extras: [],
  image: 'images/classic-hot-dog.png'
},
{
  id: 'hd2',
  category: 'Combos',
  title: 'Bacon Dog',
  price: 20000,
  desc: 'Salchicha americana envuelta en tocineta, mayo chipotle, cebolla grille, ripio y mostaza.',
  ingredients: ['Salchicha americana', 'Tocineta', 'Mayo chipotle', 'Cebolla grille', 'Ripio', 'Mostaza'],
  extras: [],
  image: 'images/bacon-dog.png'
},
{
  id: 'hd3',
  category: 'Combos',
  title: 'Chicken Dog',
  price: 20000,
  desc: 'Salchicha americana con pollo desmechado, queso fundido, cebolla mayo, tártara y piña.',
  ingredients: ['Salchicha americana', 'Pollo desmechado', 'Queso fundido', 'Cebolla mayo', 'Salsa tártara', 'Piña'],
  extras: [],
  image: 'images/chicken-dog.png'
},

// ==========================
//        BURGERS
// ==========================
{
  id: 'bg1',
  category: 'Burgers',
  title: 'Classic Burger',
  price: 20000,
  desc: 'Hamburguesa clásica con carne de res, queso blanco, pepinillos, vegetales y salsas.',
  ingredients: ['Carne de res', 'Queso blanco', 'Pepinillos', 'Vegetales', 'Salsas'],
  extras: [],
  image: 'images/classic-burger.png'
},
{
  id: 'bg2',
  category: 'Burgers',
  title: 'Bacon Burger',
  price: 20000,
  desc: 'Hamburguesa con carne de res, tocineta crocante, mayo chipotle, pepinillo y vegetales.',
  ingredients: ['Carne de res', 'Tocineta crocante', 'Mayo chipotle', 'Pepinillos', 'Vegetales'],
  extras: [],
  image: 'images/bacon-burger.png'
},
{
  id: 'bg3',
  category: 'Burgers',
  title: 'Cheese Burger',
  price: 20000,
  desc: 'Hamburguesa con carne de res, mix de quesos, cebolla caramelizada, pepinillos y salsas.',
  ingredients: ['Carne de res', 'Mix de quesos', 'Cebolla caramelizada', 'Pepinillos', 'Salsas'],
  extras: [],
  image: 'images/cheese-burger.png'
},

// ==========================
//     SIGNATURE BURGERS
// ==========================
{
  id: 'sb1',
  category: 'Signature Burgers',
  title: 'De Local',
  price: 30000,
  desc: 'Carne de res, pollo desmechado, tocineta caramelizada, queso blanco y salsas de la casa.',
  ingredients: ['Carne de res', 'Pollo desmechado', 'Tocineta caramelizada', 'Queso blanco', 'Salsas de la casa'],
  extras: [],
  image: 'images/de-local.png'
},

// ==========================
//          FRIES
// ==========================
{
  id: 'fr1',
  category: 'Fries',
  title: 'Maicitos',
  price: 25000,
  desc: 'Papas con carne desmechada, tocineta, pollo en tártara, maicitos y queso doble crema.',
  ingredients: ['Papa francesa', 'Carne desmechada', 'Tocineta', 'Pollo en salsa tártara', 'Maicitos', 'Queso doble crema'],
  extras: [],
  image: 'images/maicitos.png'
},
{
  id: 'fr2',
  category: 'Fries',
  title: 'Súper Fries',
  price: 25000,
  desc: 'Pollo crispy, carne de birria desmechada, papa francesa, salsa cheddar y tocineta crocante.',
  ingredients: ['Pollo crispy', 'Carne de birria', 'Papa francesa', 'Salsa cheddar', 'Tocineta crocante', 'Salsas'],
  extras: [],
  image: 'images/super-fries.png'
},
{
  id: 'fr3',
  category: 'Fries',
  title: 'Picada Personal',
  price: 25000,
  desc: 'Papa francesa, carne, pollo, salchicha, chorizo, cebolla caramelizada, queso y ensalada.',
  ingredients: ['Papa francesa', 'Carne', 'Pollo', 'Salchicha', 'Chorizo', 'Cebolla caramelizada', 'Queso', 'Salsas', 'Ensalada'],
  extras: [],
  image: 'images/picada-personal.png'
},
{
  id: 'fr4',
  category: 'Fries',
  title: 'Picada x2',
  price: 45000,
  desc: 'Papa francesa, pollo, carne, chorizo, salchicha, cebolla caramelizada, queso fundido y salsas.',
  ingredients: ['Papa francesa', 'Pollo', 'Carne', 'Chorizo', 'Salchicha', 'Cebolla caramelizada', 'Queso fundido', 'Salsas'],
  extras: [],
  image: 'images/picada-x2.png'
},

// ==========================
//          SODAS
// ==========================
{
  id: 'sd1',
  category: 'Sodas',
  title: 'Pepsi',
  price: 4000,
  desc: 'Bebida gaseosa.',
  ingredients: [],
  extras: [],
  image: 'images/pepsi.png'
},
{
  id: 'sd2',
  category: 'Sodas',
  title: 'Soda Hatsu',
  price: 5000,
  desc: 'Soda Hatsu.',
  ingredients: [],
  extras: [],
  image: 'images/soda-hatsu.png'
},
{
  id: 'sd3',
  category: 'Sodas',
  title: 'Soda',
  price: 4000,
  desc: 'Soda clásica.',
  ingredients: [],
  extras: [],
  image: 'images/soda.png'
},
{
  id: 'sd4',
  category: 'Sodas',
  title: 'Agua',
  price: 4000,
  desc: 'Agua embotellada.',
  ingredients: [],
  extras: [],
  image: 'images/agua.png'
},
{
  id: 'sd5',
  category: 'Sodas',
  title: 'Hit',
  price: 4000,
  desc: 'Jugo Hit.',
  ingredients: [],
  extras: [],
  image: 'images/hit.png'
},
{
  id: 'sd6',
  category: 'Sodas',
  title: 'Red Bull',
  price: 11000,
  desc: 'Bebida energética Red Bull.',
  ingredients: [],
  extras: [],
  image: 'images/red-bull.png'
},
{
  id: 'sd7',
  category: 'Sodas',
  title: 'Tamarindo',
  price: 9000,
  desc: 'Limonada de tamarindo.',
  ingredients: [],
  extras: [],
  image: 'images/tamarindo.png'
},
{
  id: 'sd8',
  category: 'Sodas',
  title: 'Gulupa',
  price: 9000,
  desc: 'Limonada de gulupa.',
  ingredients: [],
  extras: [],
  image: 'images/gulupa.png'
},
{
  id: 'sd9',
  category: 'Sodas',
  title: 'Limonada',
  price: 10000,
  desc: 'Limonada natural.',
  ingredients: [],
  extras: [],
  image: 'images/limonada.png'
},
{
  id: 'sd10',
  category: 'Sodas',
  title: 'Cerezada',
  price: 10000,
  desc: 'Limonada cerezada.',
  ingredients: [],
  extras: [],
  image: 'images/cerezada.png'
},

// ==========================
//          LIQUORS
// ==========================
{
  id: 'lq1',
  category: 'Liquors',
  title: 'Blue Texas',
  price: 16000,
  desc: 'Cóctel Blue Texas.',
  ingredients: [],
  extras: [],
  image: 'images/blue-texas.png'
},
{
  id: 'lq2',
  category: 'Liquors',
  title: 'Arizona Gin',
  price: 16000,
  desc: 'Cóctel Arizona Gin.',
  ingredients: [],
  extras: [],
  image: 'images/arizona-gin.png'
},
{
  id: 'lq3',
  category: 'Liquors',
  title: 'Cheladas',
  price: 3000,
  desc: 'Cheladas preparadas.',
  ingredients: [],
  extras: [],
  image: 'images/cheladas.png'
},
{
  id: 'lq4',
  category: 'Liquors',
  title: 'Cervezas',
  price: 5000,
  desc: 'Cervezas frías.',
  ingredients: [],
  extras: [],
  image: 'images/cervezas.png'
},
{
  id: 'lq5',
  category: 'Liquors',
  title: 'Shot Tequila',
  price: 6000,
  desc: 'Shot de tequila para chelada envenenada.',
  ingredients: [],
  extras: [],
  image: 'images/shot-tequila.png'
},

// ==========================
//          SWEETS
// ==========================
{
  id: 'sw1',
  category: 'Sweets',
  title: 'Galleta Caliente',
  price: 6000,
  desc: 'Galleta caliente como postre.',
  ingredients: [],
  extras: [],
  image: 'images/galleta-caliente.png'
},

// ==========================
//           SIDES
// ==========================
{
  id: 'sdx1',
  category: 'Sides',
  title: 'Papas',
  price: 5000,
  desc: 'Acompañamiento de papas.',
  ingredients: ['Papas fritas'],
  extras: [],
  image: 'images/papas.png'
}

];

const categories = [...new Set(products.map(p=>p.category))];

// ---------- Estado ----------
let cart = JSON.parse(localStorage.getItem('tb_cart') || '[]');
let activeCategory = 'Combos';

// ---------- DOM refs ----------
const catalogEl = document.getElementById('catalog');
const categoriesEl = document.querySelector('.categories');
const navBtns = document.querySelectorAll('.nav-btn');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDeliveryEl = document.getElementById('cart-delivery');
const cartTotalEl = document.getElementById('cart-total');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const addressLabel = document.getElementById('address-label');
const checkoutClose = document.getElementById('checkout-close');
const backToCartBtn = document.getElementById('back-to-cart');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');

// ---------- Init ----------
function init(){
  renderCategories();
  setActiveCategory(activeCategory);
  bindEvents();
  refreshCartUI();
}
init();

// ---------- Render categorías ----------
function renderCategories(){
  categoriesEl.innerHTML = '';
  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = cat === activeCategory ? 'active' : '';
    btn.dataset.cat = cat;
    btn.textContent = capitalize(cat);
    btn.addEventListener('click', ()=> switchCategory(cat));
    categoriesEl.appendChild(btn);
  });
}

// ---------- Cambiar categoría ----------
function setActiveCategory(cat){
  activeCategory = cat;
  Array.from(document.querySelectorAll('.categories button')).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  Array.from(navBtns).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  renderProducts(cat);
}

function switchCategory(cat){
  const ct = catalogEl;
  ct.classList.remove('fade-in');
  ct.classList.add('fade-out');
  setTimeout(()=>{
    setActiveCategory(cat);
    ct.classList.remove('fade-out');
    ct.classList.add('fade-in');
  }, 180);
}
// ---------- Render productos ----------
function renderProducts(cat) { 
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => 
    p.category === cat && 
    (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );

  catalogEl.innerHTML = '';

  if (items.length === 0) {
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="desc">${escapeHtml(p.desc)}</div>
      <div class="meta">
        <div class="price">$${numberWithCommas(p.price)}</div>
        <button class="add" data-id="${p.id}">Agregar</button>
      </div>
    `;
    el.querySelector('.add').addEventListener('click', () => openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}


// ---------- MINI MODAL CLEAN ----------
// ---------- FUNCION CORREGIDA: openProductModal ----------
function openProductModal(id, cartIndex = null) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  // === CREAR OVERLAY ===
  const overlay = document.createElement("div");
  overlay.className = "product-overlay";
  overlay.innerHTML = `
    <div class="product-sheet">
      <div class="modal-header">
        <span class="close">&times;</span>
      </div>

      <div class="modal-body">
        <div class="image-wrap">
          <img src="${p.image}" alt="${p.title}">
        </div>

        <div class="info">
          <h2>${p.title}</h2>
          <p>${p.desc}</p>

          ${
            p.extras?.length
              ? `<h3>Adiciones</h3>
              <div class="extras-list">
                ${p.extras
                  .map(
                    (e, i) => `
                      <label>
                        <input type="checkbox" data-name="${e.name}" data-price="${e.price}">
                        <span>${e.name}</span>
                        <span class="extra-controls" data-index="${i}">
                          <button class="minus-extra">−</button>
                          <span class="extra-qty">0</span>
                          <button class="plus-extra">+</button>
                        </span>
                        <small>+$${numberWithCommas(e.price)}</small>
                      </label>
                    `
                  )
                  .join("")}
              </div>` : ""
          }

          <div class="quantity">
            <button class="minus">−</button>
            <span class="qty">1</span>
            <button class="plus">+</button>
          </div>

          <button class="add-btn">
            ${cartIndex !== null ? 'Actualizar' : 'Agregar'} <span class="price">$${numberWithCommas(p.price)}</span>
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // === CIERRE DEL MODAL ===
  const closeBtn = overlay.querySelector(".close");
  closeBtn.addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.remove();
  });

  // === VARIABLES ===
  let qty = 1;
  const qtyEl = overlay.querySelector(".qty");
  const priceEl = overlay.querySelector(".price");
  const extrasQty = Array(p.extras?.length || 0).fill(0);
  const extrasInputs = overlay.querySelectorAll(".extras-list input");

  // --- SI ES EDICIÓN, CARGAR VALORES EXISTENTES ---
  if (cartIndex !== null) {
    const item = cart[cartIndex];
    qty = item.qty;
    qtyEl.textContent = qty;
    if (item.extras?.length) {
      item.extras.forEach(e => {
        const index = p.extras.findIndex(pe => pe.name === e.name);
        if (index > -1) extrasQty[index] = e.qty;
      });
    }
    extrasInputs.forEach((input, i) => {
      input.checked = extrasQty[i] > 0;
      const qtyDisplay = input.closest('label').querySelector('.extra-qty');
      qtyDisplay.textContent = extrasQty[i];
    });
    updatePrice();
  }

  // === ACTUALIZAR PRECIO ===
  function updatePrice() {
    const extrasTotal = (p.extras || []).reduce((sum, e, i) => sum + e.price * extrasQty[i], 0);
    const total = (p.price + extrasTotal) * qty;
    priceEl.textContent = `$${numberWithCommas(total)}`;
  }

  // === BOTONES DE CANTIDAD PRINCIPAL ===
  overlay.querySelector(".plus").addEventListener("click", () => { qty++; qtyEl.textContent = qty; updatePrice(); });
  overlay.querySelector(".minus").addEventListener("click", () => { if(qty>1){qty--;qtyEl.textContent=qty;updatePrice();} });

  // === BOTONES DE CADA EXTRA ===
  overlay.querySelectorAll(".plus-extra").forEach(btn => {
    const index = Number(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");
    btn.addEventListener("click", () => { extrasQty[index]++; qtyDisplay.textContent=extrasQty[index]; extrasInputs[index].checked=extrasQty[index]>0; updatePrice(); });
  });
  overlay.querySelectorAll(".minus-extra").forEach(btn => {
    const index = Number(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");
    btn.addEventListener("click", () => { if(extrasQty[index]>0){ extrasQty[index]--; qtyDisplay.textContent=extrasQty[index]; extrasInputs[index].checked=extrasQty[index]>0; updatePrice(); } });
  });

  // === AGREGAR O ACTUALIZAR EN EL CARRITO ===
  overlay.querySelector(".add-btn").addEventListener("click", () => {
    const extras = (p.extras || []).map((e, i) => ({ name: e.name, price: e.price, qty: extrasQty[i] })).filter(e => e.qty > 0);
    const extrasSum = extras.reduce((a, e) => a + e.price * e.qty, 0);
    const finalUnitPrice = p.price + extrasSum;

    const item = { productId: p.id, title: p.title, price: finalUnitPrice, qty, image: p.image, extras };

    if (cartIndex !== null) {
      cart[cartIndex] = item; // actualizar producto existente
    } else {
      addToCart(item); // agregar producto nuevo
    }

    persistCart();
    refreshCartUI();
    updateCartBadge();
    overlay.remove();
    cartDrawer.classList.remove('hidden'); // mostrar carrito actualizado
  });
}




// ---------- Carrito ----------

// Agregar producto al carrito
function addToCart(item) {
  // Si ya existe el mismo producto con las mismas adiciones, solo aumentar cantidad
  const existing = cart.find(c => 
    c.productId === item.productId && 
    JSON.stringify(c.extras) === JSON.stringify(item.extras)
  );

  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  persistCart();
  refreshCartUI();
  updateCartBadge();
}

// Guardar en localStorage
function persistCart() {
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

// Actualizar contador del ícono del carrito
function updateCartBadge() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = count;
}

// Renderizar los ítems del carrito
// ---------- Carrito ----------
// ---------- refreshCartUI CORREGIDA PARA REFLEJAR CAMBIOS ----------
function refreshCartUI() {
  cartItemsEl.innerHTML = '';
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="empty">Tu carrito está vacío 🍦</div>';
    cartSubtotalEl.textContent = '$0';
    cartDeliveryEl.textContent = '$0';
    cartTotalEl.textContent = '$0';
    updateCartBadge();
    return;
  }

  let subtotal = 0;

  cart.forEach((item, idx) => {
    // --- CALCULAR PRECIO REAL DEL ITEM CON EXTRAS ---
    const extrasTotal = item.extras?.reduce((sum, e) => sum + e.price * e.qty, 0) || 0;
    const itemUnitPrice = item.price - extrasTotal; // precio base
    const itemTotal = (itemUnitPrice + extrasTotal) * item.qty;
    subtotal += itemTotal;

    const extrasText = item.extras?.length
      ? item.extras.map(e => `+ ${e.name} x${e.qty} ($${numberWithCommas(e.price * e.qty)})`).join('<br>')
      : '';

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.title}">
      <div class="info">
        <h4>${item.title}</h4>
        ${extrasText ? `<small>${extrasText}</small>` : ''}
        <div class="qty-controls">
          <button class="minus">−</button>
          <span>${item.qty}</span>
          <button class="plus">+</button>
        </div>
      </div>
      <div class="price">
        <span>$${numberWithCommas(itemTotal)}</span>
        <button class="remove-btn" title="Eliminar producto">🗑️</button>
      </div>
    `;

    // --- CONTROL DE CANTIDAD ---
    div.querySelector('.plus').addEventListener('click', () => {
      item.qty++;
      persistCart();
      refreshCartUI();
    });

    div.querySelector('.minus').addEventListener('click', () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart.splice(idx, 1);
      }
      persistCart();
      refreshCartUI();
    });

    // --- ELIMINAR PRODUCTO ---
    div.querySelector('.remove-btn').addEventListener('click', () => {
      if (confirm(`¿Eliminar "${item.title}" del carrito?`)) {
        cart.splice(idx, 1);
        persistCart();
        refreshCartUI();
      }
    });

    // --- EDITAR PRODUCTO DESDE EL CARRITO ---
    div.addEventListener('click', (e) => {
      if (!e.target.classList.contains('minus') && !e.target.classList.contains('plus') && !e.target.classList.contains('remove-btn')) {
        cartDrawer.classList.add('hidden'); // esconder carrito
        openProductModal(item.productId, idx); // enviar índice para edición
      }
    });

    cartItemsEl.appendChild(div);
  });

  cartSubtotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  cartDeliveryEl.textContent = `$${numberWithCommas(DELIVERY_FEE)}`;
  cartTotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  updateCartBadge();
}













// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------

// ---------- Checkout ----------
function openCheckout() {
  if (cart.length === 0) { 
    alert('El carrito está vacío.'); 
    return; 
  }

  // 🔹 Recalcular subtotal actual (incluyendo extras)
const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);


  const delivery = 0; // por defecto
  const total = subtotal + delivery;

  // 🔹 Actualizar DOM inicial
  document.getElementById('cart-subtotal').textContent = `$${numberWithCommas(subtotal)}`;
  document.getElementById('cart-delivery').textContent = `$${numberWithCommas(delivery)}`;
  document.getElementById('cart-total').textContent = `$${numberWithCommas(total)}`;
  document.getElementById('cart-total-checkout').textContent = `$${numberWithCommas(total)}`;

  // 🔹 Reset formulario
  checkoutForm.reset();
  document.getElementById('address-label').classList.add('hidden');
  document.getElementById('envio-row').classList.add('hidden');

  // 🔹 Mostrar modal
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden', 'false');

  // 🔹 Recalcular al cambiar método (recoger/domicilio)
  const radios = checkoutForm.querySelectorAll('input[name="method"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
      const addressLabel = document.getElementById('address-label');
      const envioRow = document.getElementById('envio-row');
      const deliveryEl = document.getElementById('cart-delivery');
      const totalCheckoutEl = document.getElementById('cart-total-checkout');

      const DELIVERY_FEE = 5000;
      const delivery = (method === 'domicilio' && subtotal > 0) ? DELIVERY_FEE : 0;
      const totalUpdated = subtotal + delivery;

      // Mostrar/ocultar campos
      addressLabel.classList.toggle('hidden', method !== 'domicilio');
      envioRow.classList.toggle('hidden', method !== 'domicilio');

      // Actualizar montos
      deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
      totalCheckoutEl.textContent = `$${numberWithCommas(totalUpdated)}`;
    });
  });
}


checkoutClose.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  checkoutModal.setAttribute('aria-hidden', 'true');
});

backToCartBtn.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  cartDrawer.classList.remove('hidden');
});

// === Calcular totales del checkout ===
function updateCheckoutTotals() {
  const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
  const envioRow = document.getElementById('envio-row');
  const subtotalEl = document.getElementById('cart-subtotal-checkout');
  const deliveryEl = document.getElementById('cart-delivery-checkout');
  const totalEl = document.getElementById('cart-total-checkout');

  const DELIVERY_FEE = 5000; // mismo valor usado en refreshCartUI

  // Mostrar u ocultar campo de dirección
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // 🧾 Heredamos los valores que ya calcula refreshCartUI()
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 🚚 Si el método es domicilio, se suma el envío
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar/ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // ✅ Actualizar DOM (heredado del refreshCartUI, con ajuste solo si hay envío)
  subtotalEl.textContent = document.getElementById('cart-subtotal').textContent;
  deliveryEl.textContent = document.getElementById('cart-delivery').textContent;
  totalEl.textContent = method === 'domicilio'
    ? `$${numberWithCommas(total)}`
    : document.getElementById('cart-total-checkout').textContent;
}


checkoutForm.addEventListener('change', updateCheckoutTotals);






// Envío por WhatsApp
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name')?.trim() || '';
  const clientPhone = fd.get('phone')?.trim() || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address')?.trim() || '';
  const notes = fd.get('notes')?.trim() || '';

  let textParts = [];

  // Cabecera
  textParts.push('🧾 *Nuevo Pedido - Super Bowl✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🍔 *Detalle del pedido:*');

  let subtotal = 0;

  cart.forEach(item => {
    // Calcular precio de extras individualmente
    const extras = item.extras || [];
    const extrasLines = extras.map(e => `   ➕ ${e.qty}x ${e.name} ($${numberWithCommas(e.price * e.qty)})`).join('\n');
    const extrasSum = extras.reduce((sum, e) => sum + e.price * e.qty, 0);

    const itemTotal = (item.price + extrasSum) * item.qty;
    subtotal += itemTotal;

    // Mostrar solo precio del artículo base + extras detallados
    textParts.push(`${item.qty}x ${item.title} — *$${numberWithCommas(item.price * item.qty)}*`);
    if (extrasLines) textParts.push(extrasLines);

    // Si hay toppings removidos
    if (item.removed && item.removed.length) {
      textParts.push(`   ⚠️ Toppings removidos: ${item.removed.join(', ')}`);
    }
  });

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Resumen de totales
  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  textParts.push(method === 'domicilio'
    ? `🚗 Envío: $${numberWithCommas(delivery)}`
    : '🏪 Envío: Sin costo (recoge en el local)');
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);

  if (notes) textParts.push(`📝 Notas: ${notes}`);

  // Construir URL para WhatsApp
  const bp = String(BUSINESS_PHONE || '').replace(/\D/g, '');
  if (!bp || bp.length < 8) {
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const msg = encodeURIComponent(textParts.join('\n'));
  const waUrl = `https://wa.me/${bp}?text=${msg}`;

  window.open(waUrl, '_blank');
});





// ---------- Utilidades ----------
function bindEvents(){
  navBtns.forEach(b=> b.addEventListener('click', ()=> setActiveCategory(b.dataset.cat)));
  cartCountEl.addEventListener('dblclick', ()=> { if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });
  checkoutModal.addEventListener('click', (e)=> { if(e.target === checkoutModal) checkoutModal.classList.add('hidden'); });
  searchInput.addEventListener('input', ()=> renderProducts(activeCategory));
}

function capitalize(s){ return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1); }
function numberWithCommas(x){ return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }



// ====== MENÚ LATERAL ======
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  // Primero activamos el menú
  sideMenu.classList.add('show');
  sideMenu.style.opacity = 0;
  sideMenu.style.transform = 'translateX(-20px)'; // empieza desplazado
  sideMenu.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // Forzamos el repaint antes de animar
  requestAnimationFrame(() => {
    sideMenu.style.opacity = 1;
    sideMenu.style.transform = 'translateX(0)';
  });
  sideMenu.classList.remove('hidden');
});


closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  setTimeout(() => sideMenu.classList.add('hidden'), 350);
});

// Cerrar tocando fuera del panel
sideMenu.addEventListener('click', (e) => {
  if (e.target === sideMenu) {
    sideMenu.classList.remove('show');
    setTimeout(() => sideMenu.classList.add('hidden'), 350);
  }
});




// ====== FORMULARIO DE PAGO ======

document.addEventListener("DOMContentLoaded", () => {
  const paymentSelect = document.getElementById("payment-method");
  const transferInfo = document.getElementById("transfer-info");
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const addressLabel = document.getElementById("address-label");
  const envioRow = document.getElementById("envio-row");
  const cartDelivery = document.getElementById("cart-delivery");
  const DELIVERY_FEE = 5000; // 💰 valor del domicilio
  const accountNumber = document.getElementById("account-number");
  const copyBtn = document.getElementById("copy-account");

  // 🔸 Mostrar u ocultar dirección según método de entrega
  methodRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "domicilio" && radio.checked) {
        addressLabel.classList.remove("hidden");
        envioRow.classList.remove("hidden");
        cartDelivery.textContent = `$${DELIVERY_FEE.toLocaleString()}`;
      } else if (radio.value === "recoger" && radio.checked) {
        addressLabel.classList.add("hidden");
        envioRow.classList.add("hidden");
        cartDelivery.textContent = "$0";
      }
    });
  });

  // 🔸 Mostrar info bancaria solo si selecciona transferencia
  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "transferencia") {
      transferInfo.classList.remove("hidden");
    } else {
      transferInfo.classList.add("hidden");
    }
  });

  // 🔸 Copiar número de cuenta
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber.textContent.trim())
      .then(() => {
        copyBtn.textContent = "¡Copiado!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copiar";
          copyBtn.classList.remove("copied");
        }, 1800);
      })
      .catch(() => alert("No se pudo copiar"));
  });
});


// --- FORM MULTIPASO (compatible con checkout actual) ---
const form = document.getElementById("checkout-form");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const nextStep1 = document.getElementById("next-step1");
const backStep2 = document.getElementById("back-step2");
const clientSummary = document.getElementById("client-summary");

if (nextStep1) {
  nextStep1.addEventListener("click", () => {
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !phone) {
      alert("Por favor completa tu nombre y teléfono.");
      return;
    }

    // Mostrar resumen
    clientSummary.innerHTML = `<strong>${name} </strong><span>${phone}</span>`;

    // Animación de transición
    step1.classList.remove("active");
    step2.classList.add("active");
  });
}

if (backStep2) {
  backStep2.addEventListener("click", () => {
    step2.classList.remove("active");
    step1.classList.add("active");
  });
}



const checkoutOverlay = document.getElementById("checkout-modal");
const btnConfirmOrder = document.getElementById("confirm-order"); // botón en el carrito
const btnBackToCart = document.getElementById("back-to-cart");

btnConfirmOrder?.addEventListener("click", () => {
  checkoutOverlay.classList.remove("hidden");
});

btnBackToCart?.addEventListener("click", () => {
  checkoutOverlay.classList.add("hidden");
});


// También cerrar si se toca fuera del panel
checkoutOverlay.addEventListener("click", (e) => {
  if (e.target === checkoutOverlay) {
    checkoutOverlay.classList.remove("show");
  }
});


