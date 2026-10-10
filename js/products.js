/**
 * UMESH POOJA STORE - Product Data
 * ===================================
 * HOW TO ADD A NEW PRODUCT:
 * 1. Copy one of the existing product objects below
 * 2. Paste it at the end of the array (before the closing "]")
 * 3. Change the "id" to the next number
 * 4. Fill in the correct name, category, price, etc.
 * 5. Add the product image to: assets/products/your-image.png
 * 6. Set the "image" field to: "assets/products/your-image.png"
 *
 * CATEGORIES (use exactly as written):
 * "Pooja Essentials"
 * "Mala & Jap Items"
 * "Ganga Jal"
 * "Diya & Lighting"
 * "Dhoop & Incense"
 * "Kalawa & Sacred Threads"
 * "Religious Accessories"
 * "Festival Items"
 * "Pooja Kits"
 * "Other Pooja Samagri"
 *
 * STOCK: set to true (in stock) or false (out of stock)
 * FEATURED: set to true to show on homepage / featured sort first
 */

const products = [
  {
    id: 1,
    name: "Packaged Kalawa / Mauli Thread",
    category: "Kalawa & Sacred Threads",
    price: 30,
    mrp: 50,
    unit: "1 Pack",
    image: "assets/products/kalawa.png",
    description: "Auspicious red and yellow Kalawa / Mauli thread used in all Hindu rituals and poojas. High-quality cotton thread for sacred tying.",
    stock: true,
    featured: true
  },
  {
    id: 2,
    name: "Ganga Jal Bottle",
    category: "Ganga Jal",
    price: 50,
    mrp: 70,
    unit: "1 Bottle",
    image: "assets/products/ganga-jal.png",
    description: "Pure sacred Ganga Jal (Holy Ganges Water) in a sealed bottle. Used for purification, abhishek, and all religious ceremonies.",
    stock: true,
    featured: true
  },
  {
    id: 3,
    name: "Cotton Wicks (Batti)",
    category: "Diya & Lighting",
    price: 20,
    mrp: 30,
    unit: "1 Pack (100 Pcs)",
    image: "assets/products/cotton-wicks.png",
    description: "Pure white cotton wicks for diya and lamp pooja. Long-lasting and smoke-free. Suitable for all daily and festival poojas.",
    stock: true,
    featured: true
  },
  {
    id: 4,
    name: "Kashi Astagandha Tilak",
    category: "Pooja Essentials",
    price: 45,
    mrp: 60,
    unit: "1 Box",
    image: "assets/products/tilak.png",
    description: "Premium Kashi Astagandha Tilak made from eight sacred ingredients. Ideal for daily pooja, religious ceremonies and temple worship.",
    stock: true,
    featured: true
  },
  {
    id: 5,
    name: "Kashi Vibhuti Bhasma",
    category: "Pooja Essentials",
    price: 25,
    mrp: 40,
    unit: "1 Sachet",
    image: "assets/products/vibhuti.png",
    description: "Sacred Vibhuti (holy ash) from Kashi. Used for tilak and worship of Lord Shiva. Pure and authentic ritual bhasma.",
    stock: true,
    featured: false
  },
  {
    id: 6,
    name: "Golden Om Pooja Mat",
    category: "Religious Accessories",
    price: 150,
    mrp: 200,
    unit: "1 Piece",
    image: "assets/products/pooja-mat.png",
    description: "Elegant pooja mat with Golden Om motif. Made from quality fabric with auspicious designs. Perfect for placing idols and pooja items.",
    stock: true,
    featured: true
  },
  {
    id: 7,
    name: "Red Gold Green Pooja Mat",
    category: "Religious Accessories",
    price: 120,
    mrp: 180,
    unit: "1 Piece",
    image: "assets/products/pooja-mat-2.png",
    description: "Beautiful traditional pooja mat in red, gold and green colours. Premium quality fabric with decorative border for festive poojas.",
    stock: true,
    featured: false
  },
  {
    id: 8,
    name: "Red Brocade Pooja Mat",
    category: "Religious Accessories",
    price: 180,
    mrp: 250,
    unit: "1 Piece",
    image: "assets/products/pooja-mat-3.png",
    description: "Premium red floral brocade pooja mat with gold fringe. Luxurious feel and beautiful traditional design for temple and home pooja.",
    stock: true,
    featured: false
  },
  {
    id: 9,
    name: "Magenta Pooja Mat with Gold Fringe",
    category: "Religious Accessories",
    price: 160,
    mrp: 220,
    unit: "1 Piece",
    image: "assets/products/pooja-mat-4.png",
    description: "Vibrant magenta pooja mat with ornate gold fringe. Perfect for Devi poojas and Navratri. Adds elegance to any pooja setting.",
    stock: true,
    featured: false
  },
  {
    id: 10,
    name: "Saffron Devotional Pooja Cloth",
    category: "Festival Items",
    price: 80,
    mrp: 120,
    unit: "1 Piece",
    image: "assets/products/pooja-cloth.png",
    description: "Traditional saffron pooja cloth with devotional motifs. Ideal for covering pooja thali, idols and altar. Soft and durable fabric.",
    stock: true,
    featured: true
  },
  {
    id: 11,
    name: "Shri Ram Pooja Cloth",
    category: "Festival Items",
    price: 90,
    mrp: 130,
    unit: "1 Piece",
    image: "assets/products/ram-cloth.png",
    description: "Beautiful Shri Ram devotional pooja cloth with vibrant print. Perfect for Ram Navami, Diwali and daily worship. Highly durable.",
    stock: true,
    featured: false
  },
  {
    id: 12,
    name: "Festive Magenta Gold Pooja Cloth",
    category: "Festival Items",
    price: 100,
    mrp: 150,
    unit: "1 Piece",
    image: "assets/products/puja-cloth-2.png",
    description: "Elegant festive magenta and gold pooja cloth for Navratri, Diwali and all special occasions. Rich fabric with premium finish.",
    stock: true,
    featured: false
  },
  {
    id: 13,
    name: "Saffron Devotional Cloth Banner",
    category: "Festival Items",
    price: 70,
    mrp: 100,
    unit: "1 Piece",
    image: "assets/products/devotional-cloth.png",
    description: "Saffron devotional cloth banner with red motifs. Used for temple decoration, festival events and religious processions.",
    stock: true,
    featured: false
  },
  {
    id: 14,
    name: "Colourful Cord Bundles",
    category: "Kalawa & Sacred Threads",
    price: 40,
    mrp: 60,
    unit: "1 Bundle",
    image: "assets/products/cord-bundles.png",
    description: "Assorted colourful sacred cord bundles for pooja, Raksha Bandhan and other religious rituals. Multiple colours available.",
    stock: true,
    featured: false
  },
  {
    id: 15,
    name: "Braided Sacred Cord Collection",
    category: "Kalawa & Sacred Threads",
    price: 55,
    mrp: 80,
    unit: "1 Pack",
    image: "assets/products/braided-cord.png",
    description: "Premium braided sacred cord bundle in traditional colours. Used for tying sacred threads during religious rituals and poojas.",
    stock: true,
    featured: false
  },
  {
    id: 16,
    name: "Jap Mala (Yarn)",
    category: "Mala & Jap Items",
    price: 60,
    mrp: 90,
    unit: "1 Piece",
    image: "assets/products/yarn-mala.png",
    description: "Traditional yarn jap mala in vibrant red and yellow. Ideal for daily jap, meditation and devotional practice.",
    stock: true,
    featured: false
  },
  {
    id: 17,
    name: "Yarn Bundle for Pooja",
    category: "Pooja Essentials",
    price: 35,
    mrp: 50,
    unit: "1 Bundle",
    image: "assets/products/yarn-bundle.png",
    description: "Vibrant variegated yarn bundle for pooja decoration, idol adornment and festival preparations. Premium quality soft yarn.",
    stock: true,
    featured: false
  },
  {
    id: 18,
    name: "Gomukhi Jap Mala Bag",
    category: "Mala & Jap Items",
    price: 85,
    mrp: 120,
    unit: "1 Piece",
    image: "assets/products/gomukhi-bag.png",
    description: "Traditional Gomukhi Jap Mala Bag with embroidered design and gold fringe. Keeps your mala sacred and protected during jap.",
    stock: true,
    featured: true
  },
  {
    id: 19,
    name: "Glossy Fabric Bundle (Pooja Samagri)",
    category: "Other Pooja Samagri",
    price: 110,
    mrp: 160,
    unit: "1 Bundle",
    image: "assets/products/fabric-bundle.png",
    description: "Assorted glossy fabric bundle for pooja, gifting and decoration. Available in multiple vibrant festive colours.",
    stock: true,
    featured: false
  },
  {
    id: 20,
    name: "Traditional Textiles Pooja Set",
    category: "Pooja Kits",
    price: 199,
    mrp: 280,
    unit: "1 Set",
    image: "assets/products/textiles.png",
    description: "Complete set of traditional vibrant textiles for pooja and religious ceremonies. Includes multiple items in coordinated festive colours.",
    stock: true,
    featured: true
  },
  {
    id: 21,
    name: "Vibrant Hindu Pooja Cloth Set",
    category: "Festival Items",
    price: 130,
    mrp: 190,
    unit: "1 Set",
    image: "assets/products/puja-mats.png",
    description: "Set of vibrant red Hindu pooja cloth mats for Navratri, Diwali and daily worship. Premium quality fabric with traditional design.",
    stock: true,
    featured: false
  },
  {
    id: 22,
    name: "Complete Pooja Kit",
    category: "Pooja Kits",
    price: 299,
    mrp: 450,
    unit: "1 Kit",
    image: "assets/products/pooja-kit.png",
    description: "All-in-one complete pooja kit with essential items. Ideal for gifting, housewarming and new beginnings. Everything needed in one box.",
    stock: true,
    featured: true
  }
];

// Categories list (used for filter buttons)
const categories = [
  "All",
  "Pooja Essentials",
  "Mala & Jap Items",
  "Ganga Jal",
  "Diya & Lighting",
  "Dhoop & Incense",
  "Kalawa & Sacred Threads",
  "Religious Accessories",
  "Festival Items",
  "Pooja Kits",
  "Other Pooja Samagri"
];

// Ensure global accessibility across all browsers
window.products = products;
window.categories = categories;
