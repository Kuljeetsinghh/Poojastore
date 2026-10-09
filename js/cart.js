/**
 * UMESH POOJA STORE - Cart Manager
 * ===================================
 * Handles all cart operations with localStorage persistence.
 * Cart survives page refresh automatically.
 */

const Cart = {
  // Load cart from localStorage
  items: JSON.parse(localStorage.getItem('umeshPoojaCart')) || [],

  // Save cart to localStorage
  save() {
    localStorage.setItem('umeshPoojaCart', JSON.stringify(this.items));
    this.updateUI();
  },

  // Add item to cart
  addItem(product, quantity = 1) {
    const existingIndex = this.items.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        unit: product.unit,
        quantity: quantity
      });
    }
    this.save();
    this.showAddedToast(product.name);
  },

  // Remove item from cart
  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.save();
  },

  // Update item quantity
  updateQuantity(productId, newQty) {
    if (newQty < 1) {
      this.removeItem(productId);
      return;
    }
    const index = this.items.findIndex(item => item.id === productId);
    if (index > -1) {
      this.items[index].quantity = newQty;
      this.save();
    }
  },

  // Clear entire cart
  clearCart() {
    this.items = [];
    this.save();
  },

  // Get total number of items
  getTotalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },

  // Get total price
  getTotalPrice() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  // Update all UI elements
  updateUI() {
    this.updateCounter();
    this.renderCartDrawer();
  },

  // Update cart counter badge
  updateCounter() {
    const total = this.getTotalItems();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = total;
      el.style.display = total > 0 ? 'flex' : 'none';
    });
  },

  // Show "Added to cart" toast notification
  showAddedToast(productName) {
    const existing = document.querySelector('.cart-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.innerHTML = `<span>✓</span> ${productName} added to cart!`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  },

  // Open cart drawer
  openCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer) {
      this.renderCartDrawer();
      drawer.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  },

  // Close cart drawer
  closeCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer) {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  },

  // Render cart drawer HTML
  renderCartDrawer() {
    const cartBody = document.getElementById('cartBody');
    const cartFooter = document.getElementById('cartFooter');
    if (!cartBody) return;

    if (this.items.length === 0) {
      cartBody.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <p>Your cart is empty</p>
          <small>Add pooja products to get started</small>
        </div>
      `;
      if (cartFooter) cartFooter.style.display = 'none';
      return;
    }

    if (cartFooter) cartFooter.style.display = 'block';

    const rows = this.items.map((item, index) => `
      <tr class="cart-table-row">
        <td class="ct-sr">${index + 1}</td>
        <td class="ct-name">
          <div class="ct-name-wrap">
            <img src="${item.image}" alt="${item.name}" class="ct-thumb" loading="lazy">
            <div>
              <div class="ct-product-name">${item.name}</div>
              <div class="ct-unit">${item.unit}</div>
            </div>
          </div>
        </td>
        <td class="ct-qty">
          <div class="ct-qty-controls">
            <button class="qty-btn" onclick="Cart.updateQuantity(${item.id}, ${item.quantity - 1})" aria-label="Decrease">−</button>
            <span class="qty-display">${item.quantity}</span>
            <button class="qty-btn" onclick="Cart.updateQuantity(${item.id}, ${item.quantity + 1})" aria-label="Increase">+</button>
          </div>
        </td>
        <td class="ct-rate">₹${item.price.toLocaleString('en-IN')}</td>
        <td class="ct-amount">₹${(item.price * item.quantity).toLocaleString('en-IN')}</td>
        <td class="ct-del">
          <button class="cart-item-remove" onclick="Cart.removeItem(${item.id})" aria-label="Remove ${item.name}">✕</button>
        </td>
      </tr>
    `).join('');

    cartBody.innerHTML = `
      <div class="cart-table-wrap">
        <table class="cart-table" role="table" aria-label="Cart items">
          <thead>
            <tr>
              <th class="ct-sr">#</th>
              <th class="ct-name">Product</th>
              <th class="ct-qty">Qty</th>
              <th class="ct-rate">Rate</th>
              <th class="ct-amount">Amount</th>
              <th class="ct-del"></th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
          <tfoot>
            <tr class="cart-table-total-row">
              <td colspan="2" class="ct-total-label">
                🛒 Total — ${this.getTotalItems()} item${this.getTotalItems() !== 1 ? 's' : ''}
              </td>
              <td class="ct-total-qty">${this.getTotalItems()}</td>
              <td></td>
              <td class="ct-total-amount">₹${this.getTotalPrice().toLocaleString('en-IN')}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    `;

    // Update totals
    const totalEl = document.getElementById('cartTotal');
    const totalItemsEl = document.getElementById('cartTotalItems');
    if (totalEl) totalEl.textContent = `₹${this.getTotalPrice().toLocaleString('en-IN')}`;
    if (totalItemsEl) totalItemsEl.textContent = `${this.getTotalItems()} item${this.getTotalItems() !== 1 ? 's' : ''}`;
  },

  // Generate WhatsApp order message for full cart
  generateWhatsAppMessage() {
    if (this.items.length === 0) {
      alert('Your cart is empty. Please add products first.');
      return;
    }

    let message = 'Namaste Umesh Pooja Store 🙏\n\n';
    message += 'I would like to place an order:\n\n';

    let totalQty = 0;

    this.items.forEach((item, index) => {
      const amount = item.price * item.quantity;
      totalQty += item.quantity;
      message += `${index + 1}. ${item.name}\n`;
      message += `   Qty: ${item.quantity}\n`;
      message += `   Price: ₹${item.price.toLocaleString('en-IN')}\n`;
      message += `   Amount: ₹${amount.toLocaleString('en-IN')}\n\n`;
    });

    message += '--------------------\n';
    message += `Total Items: ${totalQty}\n`;
    message += `Estimated Total: ₹${this.getTotalPrice().toLocaleString('en-IN')}\n`;
    message += '--------------------\n\n';
    message += 'Customer Name:\n';
    message += 'Delivery Location:\n';
    message += 'PIN Code:\n\n';
    message += 'Please confirm product availability and final amount.\n\n';
    message += 'Thank you.';

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/917488092783?text=${encoded}`;
    window.open(url, '_blank');
  }
};

// Buy Now WhatsApp message for a single product
function buyNowWhatsApp(productId, quantity) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const total = product.price * quantity;
  let message = 'Namaste Umesh Pooja Store 🙏\n\n';
  message += 'I am interested in ordering:\n\n';
  message += `Product: ${product.name}\n`;
  message += `Quantity: ${quantity}\n`;
  message += `Price: ₹${product.price.toLocaleString('en-IN')}\n`;
  message += `Total: ₹${total.toLocaleString('en-IN')}\n\n`;
  message += 'Please confirm availability.';

  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/917488092783?text=${encoded}`;
  window.open(url, '_blank');
}

// Initialize cart UI on page load
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateUI();
});
