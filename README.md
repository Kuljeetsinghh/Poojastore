# Umesh Pooja Store – Website

**Pooja Samagri in Ranchi | Wholesale & Retail**  
📞 +91 7488 092 783 | 💬 WhatsApp: 917488092783

---

## 📁 Folder Structure

```
umesh-pooja-store/
│
├── index.html          ← Homepage (Hero, Categories, Products, About, Footer)
├── products.html       ← All Products page (Search + Filter + Full Grid)
├── about.html          ← About Us page
├── contact.html        ← Contact page
├── README.md           ← This file
│
├── css/
│   └── style.css       ← All styles (colours, layout, responsive)
│
├── js/
│   ├── products.js     ← ✏️ EDIT THIS to add/remove/change products
│   ├── cart.js         ← Cart logic (do not edit unless necessary)
│   └── main.js         ← Navigation, search, filter logic
│
└── assets/
    ├── logo/
    │   └── logo.png    ← Your store logo
    └── products/       ← All product images
```

---

## ✏️ How to Edit Business Information

Open `index.html`, `about.html`, `contact.html`, `products.html` in any text editor (Notepad, VS Code, etc.)

- **Business name**: Search for `Umesh Pooja Store` and replace
- **Phone number**: Search for `7488 092 783` and replace
- **WhatsApp number**: Search for `917488092783` and replace
- **Location**: Search for `Ranchi, Jharkhand` and replace
- **Tagline**: Search for `Har Pooja Ki Zarurat, Ek Hi Jagah.` and replace

---

## ➕ How to Add a New Product

Open `js/products.js` in any text editor and add a new product object to the `products` array.

**Example – copy and paste this template:**

```javascript
{
    id: 23,                              // ← Use the next number in sequence
    name: "Your Product Name",
    category: "Pooja Essentials",        // ← Must match exactly (see list below)
    price: 99,                           // ← Selling price in ₹ (no quotes)
    mrp: 149,                            // ← Original/MRP price (or remove this line)
    unit: "1 Piece",                     // ← Pack/unit description
    image: "assets/products/my-image.png",  // ← Your image filename
    description: "Short product description here.",
    stock: true,                         // ← true = In Stock, false = Out of Stock
    featured: false                      // ← true = shows first in Featured sort
},
```

**Valid category names** (copy exactly):
- `"Pooja Essentials"`
- `"Mala & Jap Items"`
- `"Ganga Jal"`
- `"Diya & Lighting"`
- `"Dhoop & Incense"`
- `"Kalawa & Sacred Threads"`
- `"Religious Accessories"`
- `"Festival Items"`
- `"Pooja Kits"`
- `"Other Pooja Samagri"`

---

## 💰 How to Change Product Prices

Open `js/products.js`. Find the product by its `name`. Change the `price` value.

```javascript
price: 199,   // ← Change this number
mrp: 249,     // ← Change or remove this line
```

To **remove the strikethrough MRP**, delete the `mrp:` line from the product.

---

## 🖼️ How to Replace Product Images

1. Put your new image file inside the `assets/products/` folder
2. Use **lowercase letters** and **hyphens** (no spaces) for filenames  
   Example: `my-new-product.png`
3. Open `js/products.js` and update the `image` field:
   ```javascript
   image: "assets/products/my-new-product.png",
   ```

**Recommended image size:** 600×600 pixels (square), JPG or PNG format.

---

## 📱 How to Change the WhatsApp Number

The WhatsApp number is used in two formats:

1. **Display format** (shown to user): `+91 7488 092 783`
2. **API format** (used in links): `917488092783` (country code + number, no spaces)

**Files to update:**
- `js/cart.js` → Search for `917488092783` → Replace with your number
- `js/main.js` → Search for `917488092783` → Replace with your number
- `index.html`, `products.html`, `about.html`, `contact.html` → Search for both formats and replace

---

## 🌐 How to Upload to GitHub

### Step 1: Create a GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### Step 2: Create a New Repository
1. Click the **+** icon → **New repository**
2. Repository name: `umesh-pooja-store` (or any name)
3. Set to **Public**
4. Click **Create repository**

### Step 3: Upload Your Files
**Option A – Upload via browser (easiest):**
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop the entire `umesh-pooja-store/` folder
3. Click **"Commit changes"**

**Option B – Using Git (for developers):**
```bash
git init
git add .
git commit -m "Initial website upload"
git remote add origin https://github.com/YOUR-USERNAME/umesh-pooja-store.git
git push -u origin main
```

---

## 🚀 How to Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **"Deploy from a branch"**
5. Select **Branch: main** and **Folder: / (root)**
6. Click **Save**
7. Wait 1–2 minutes
8. Your website will be live at:  
   `https://YOUR-USERNAME.github.io/umesh-pooja-store/`

---

## ✅ What Works Out of the Box

| Feature | Status |
|---|---|
| Homepage with hero, categories, products | ✅ |
| Products page with all products | ✅ |
| About Us page | ✅ |
| Contact page | ✅ |
| Search by name/category/description | ✅ |
| Filter by category | ✅ |
| Sort (Featured / Price / A-Z) | ✅ |
| Add to Cart | ✅ |
| Increase / Decrease quantity | ✅ |
| Remove from cart | ✅ |
| Cart total calculation | ✅ |
| Cart saved after page refresh (localStorage) | ✅ |
| Buy Now – single product WhatsApp | ✅ |
| Order on WhatsApp – full cart | ✅ |
| Floating WhatsApp button | ✅ |
| Mobile responsive design | ✅ |
| Sticky header | ✅ |
| Mobile slide-out menu | ✅ |
| Scroll to top button | ✅ |
| SEO meta tags | ✅ |
| LocalBusiness structured data | ✅ |
| No backend / server required | ✅ |
| Works on GitHub Pages | ✅ |

---

## 📞 Contact

**Umesh Pooja Store**  
Ranchi, Jharkhand  
📞 +91 7488 092 783  
💬 WhatsApp: [wa.me/917488092783](https://wa.me/917488092783)

---

*© 2026 Umesh Pooja Store. All Rights Reserved.*
