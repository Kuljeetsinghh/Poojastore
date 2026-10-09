/**
 * UMESH POOJA STORE - Main JavaScript
 * ===================================
 * Handles: Navigation, Search, Filters, Product Grid, Mobile Menu
 */

// ─── STATE ──────────────────────────────────────────────────────────────────
let currentCategory = 'All';
let currentSearch = '';
let currentSort = 'featured';
let productQuantities = {}; // track qty selectors per product

// ─── DOM READY ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileMenu();
  initCartDrawer();
  initSmoothScroll();
  initScrollHeader();

  // If on index page with product grid
  if (document.getElementById('productGrid')) {
    renderCategoryFilters();
    renderProducts();
    initSearch();
    initSort();
  }

  // If on products page
  if (document.getElementById('allProductGrid')) {
    renderCategoryFilters('allCategoryFilters');
    renderAllProducts();
    initSearch('allSearchInput');
    initSort('allSortSelect');
  }
});

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
function initNavigation() {
  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ─── MOBILE MENU ─────────────────────────────────────────────────────────────
function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');
  const closeBtn = document.getElementById('mobileMenuClose');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    toggle.setAttribute('aria-expanded', menu.classList.contains('open'));
  });

  const closeMenu = () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Close on nav link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ─── CART DRAWER ─────────────────────────────────────────────────────────────
function initCartDrawer() {
  const overlay = document.getElementById('cartOverlay');
  if (overlay) {
    overlay.addEventListener('click', () => Cart.closeCart());
  }
  document.querySelectorAll('.cart-icon-btn').forEach(btn => {
    btn.addEventListener('click', () => Cart.openCart());
  });
}

// ─── STICKY HEADER ───────────────────────────────────────────────────────────
function initScrollHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ─── SMOOTH SCROLL ───────────────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ─── SEARCH ──────────────────────────────────────────────────────────────────
function initSearch(inputId = 'searchInput') {
  const input = document.getElementById(inputId);
  if (!input) return;

  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentSearch = input.value.trim().toLowerCase();
      renderProducts();
      if (document.getElementById('allProductGrid')) renderAllProducts();
    }, 250);
  });
}

// ─── SORT ────────────────────────────────────────────────────────────────────
function initSort(selectId = 'sortSelect') {
  const select = document.getElementById(selectId);
  if (!select) return;
  select.addEventListener('change', () => {
    currentSort = select.value;
    renderProducts();
    if (document.getElementById('allProductGrid')) renderAllProducts();
  });
}

// ─── CATEGORY FILTERS ────────────────────────────────────────────────────────
function renderCategoryFilters(containerId = 'categoryFilters') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === currentCategory ? 'active' : ''}"
            onclick="setCategory('${cat}', '${containerId}')">
      ${cat}
    </button>
  `).join('');
}

function setCategory(category, containerId = 'categoryFilters') {
  currentCategory = category;
  // Update active buttons
  document.querySelectorAll(`#${containerId} .filter-btn`).forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === category);
  });
  renderProducts();
  if (document.getElementById('allProductGrid')) renderAllProducts();
}

// ─── FILTER & SORT PRODUCTS ──────────────────────────────────────────────────
function getFilteredProducts() {
  let filtered = [...products];

  // Category filter
  if (currentCategory !== 'All') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  // Search filter
  if (currentSearch) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(currentSearch) ||
      p.category.toLowerCase().includes(currentSearch) ||
      p.description.toLowerCase().includes(currentSearch)
    );
  }

  // Sort
  switch (currentSort) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'name-az':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'featured':
    default:
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
  }

  return filtered;
}

// ─── PRODUCT CARD HTML ────────────────────────────────────────────────────────
function createProductCard(product) {
  const discount = product.mrp ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;
  const qtyId = `qty-${product.id}`;
  if (!productQuantities[product.id]) productQuantities[product.id] = 1;

  return `
    <div class="product-card" data-id="${product.id}">
      ${discount > 0 ? `<div class="product-badge">${discount}% OFF</div>` : ''}
      ${!product.stock ? '<div class="product-badge out-of-stock">Out of Stock</div>' : ''}
      <div class="product-image-wrap">
        <img src="${product.image}"
             alt="${product.name}"
             class="product-image"
             loading="lazy"
             onerror="this.src='assets/products/placeholder.png'">
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-unit">Pack: ${product.unit}</div>
        <div class="product-pricing">
          <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
          ${product.mrp ? `<span class="product-mrp">MRP ₹${product.mrp.toLocaleString('en-IN')}</span>` : ''}
        </div>
        <div class="product-stock ${product.stock ? 'in-stock' : 'out-stock'}">
          ${product.stock ? '✓ In Stock' : '✕ Out of Stock'}
        </div>
        <div class="product-qty-row">
          <button class="qty-btn" onclick="changeQty(${product.id}, -1)" aria-label="Decrease quantity">−</button>
          <span class="qty-display" id="${qtyId}">${productQuantities[product.id]}</span>
          <button class="qty-btn" onclick="changeQty(${product.id}, 1)" aria-label="Increase quantity">+</button>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart ${!product.stock ? 'disabled' : ''}"
                  onclick="${product.stock ? `Cart.addItem(products.find(p=>p.id===${product.id}), productQuantities[${product.id}])` : 'void(0)'}"
                  ${!product.stock ? 'disabled' : ''}>
            🛒 Add to Cart
          </button>
          <button class="btn-buy-now ${!product.stock ? 'disabled' : ''}"
                  onclick="${product.stock ? `buyNowWhatsApp(${product.id}, productQuantities[${product.id}])` : 'void(0)'}"
                  ${!product.stock ? 'disabled' : ''}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  `;
}

// ─── QUANTITY CONTROLS (Product Cards) ───────────────────────────────────────
function changeQty(productId, delta) {
  productQuantities[productId] = Math.max(1, (productQuantities[productId] || 1) + delta);
  const el = document.getElementById(`qty-${productId}`);
  if (el) el.textContent = productQuantities[productId];
}

// ─── RENDER PRODUCT GRID (Homepage – limited) ─────────────────────────────────
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const filtered = getFilteredProducts();
  const noResults = document.getElementById('noResults');

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';
  grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
}

// ─── RENDER PRODUCT GRID (Products Page – all) ────────────────────────────────
function renderAllProducts() {
  const grid = document.getElementById('allProductGrid');
  if (!grid) return;

  const filtered = getFilteredProducts();
  const noResults = document.getElementById('allNoResults');
  const countEl = document.getElementById('productCount');

  if (countEl) countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''} found`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';
  grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
}

// ─── FLOATING WHATSAPP ────────────────────────────────────────────────────────
function openFloatingWhatsApp() {
  const message = 'Namaste Umesh Pooja Store, I would like to know more about your pooja products.';
  const url = `https://wa.me/917488092783?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// ─── HERO SCROLL ─────────────────────────────────────────────────────────────
function scrollToProducts() {
  const el = document.getElementById('products') || document.getElementById('categories');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── HERO WHATSAPP ───────────────────────────────────────────────────────────
function heroWhatsApp() {
  const message = 'Namaste Umesh Pooja Store 🙏\n\nI would like to know more about your pooja products and place an order.';
  window.open(`https://wa.me/917488092783?text=${encodeURIComponent(message)}`, '_blank');
}

// ─── CONTACT WHATSAPP ─────────────────────────────────────────────────────────
function contactWhatsApp() {
  const message = 'Namaste Umesh Pooja Store 🙏\n\nI have a query about your pooja products.';
  window.open(`https://wa.me/917488092783?text=${encodeURIComponent(message)}`, '_blank');
}
