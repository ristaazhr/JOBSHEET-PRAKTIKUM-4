function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}
 
console.log(calculateDiscountedPrice(1000, 10)); 

const cart = [
  { title: "Laptop", price: 1000, discountPercent: 10 },
  { title: "Mouse", price: 20, discountPercent: 5 },
  { title: "Keyboard", price: 50, discountPercent: 0 },
];
 
function applyDiscounts(cart) {
  const result = [];
  for (const item of cart) {
    const finalPrice = calculateDiscountedPrice(item.price, item.discountPercent);
    result.push({ ...item, finalPrice });
  }
  return result;
}
 
console.log(applyDiscounts(cart));

const products = [
{ id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
{ id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
{ id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
// lengkapi hingga 30 produk
];

function findProductById(products, id) {
  return products.find((p) => p.id === id);
}
 
console.log(findProductById(products, 3));
 
function findLowStockProducts(products, threshold = 10) {
  return products.filter((p) => p.stock < threshold);
}
 
console.log(findLowStockProducts(products));
 
function updateStock(products, id, newStock) {
  return products.map((p) => (p.id === id ? { ...p, stock: newStock } : p));
}
 
const updatedProducts = updateStock(products, 3, 50);
console.log(updatedProducts.find((p) => p.id === 3));
console.log(products.find((p) => p.id === 3)); 

const nestedProducts = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" },
    ],
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" },
    ],
  },
  {
    id: 3,
    title: "Headphones",
    price: 100,
    rating: 4.0,
    stock: 3,
    category: "audio",
    tags: ["audio", "electronics"],
    dimensions: { width: 18, height: 20, depth: 8 },
    reviews: [{ user: "F", rating: 4, comment: "Sound is decent" }],
  },
];
 
function getAllTagsNested(products) {
  return products.map((p) => p.tags);
}
 
console.log(getAllTagsNested(nestedProducts));

function findProductsByTag(products, tag) {
  return products.filter((p) => p.tags.includes(tag));
}
 
console.log(findProductsByTag(nestedProducts, "electronics"));
 
function getReviewCounts(products) {
  return products.map((p) => ({
    id: p.id,
    title: p.title,
    totalReviews: p.reviews.length,
  }));
}
 
console.log(getReviewCounts(nestedProducts));
 
function getFiveStarReviews(products) {
  return products.flatMap((p) =>
    p.reviews.filter((r) => r.rating === 5)
  );
}
 
console.log(getFiveStarReviews(nestedProducts));
 
function calculateAverageReviewRating(product) {
  if (product.reviews.length === 0) return 0;
  const total = product.reviews.reduce((sum, r) => sum + r.rating, 0);
  return total / product.reviews.length;
}
 
nestedProducts.forEach((p) => {
  console.log(`${p.title}: rata-rata review = ${calculateAverageReviewRating(p)}`);
});
 
function findProductWithMostReviews(products) {
  return products.reduce((maxProduct, current) =>
    current.reviews.length > maxProduct.reviews.length ? current : maxProduct
  );
}
 
console.log(findProductWithMostReviews(nestedProducts).title); 
 
function getAllReviewRatings(products) {
  return products.flatMap((p) => p.reviews.map((r) => r.rating));
}
 
console.log(getAllReviewRatings(nestedProducts));
 
const tagsNested = [
  ["computer", "office"],
  ["electronics"],
  ["gaming", "computer"],
];
 
console.log(tagsNested.flat());
 
const simpleProducts = [
  { title: "Laptop", tags: ["computer", "office"] },
  { title: "Phone", tags: ["mobile"] },
];
 
console.log(simpleProducts.flatMap((p) => p.tags));

function getAllTagsFlat(products) {
  return products.flatMap((p) => p.tags);
}
 
console.log(getAllTagsFlat(nestedProducts));

function getAllReviewComments(products) {
  return products.flatMap((p) => p.reviews.map((r) => r.comment));
}
 
console.log(getAllReviewComments(nestedProducts));

// Jumat, 11-9-2026

const titles = nestedProducts.map((p) => p.title);
console.log(titles);
 
const expensiveProducts = nestedProducts.filter((p) => p.price > 500);
console.log(expensiveProducts);
 
const totalStockAll = nestedProducts.reduce((sum, p) => sum + p.stock, 0);
console.log(totalStockAll);
 
const laptopPrices = nestedProducts
  .filter((p) => p.category === "laptops")
  .map((p) => p.price);
 
const avgLaptopPrice =
  laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;
 
console.log(avgLaptopPrice);
 
function getStatistics(products) {
  const totalProducts = products.length;
  const prices = products.map((p) => p.price);
  const ratings = products.map((p) => p.rating);
 
  const averagePrice = prices.reduce((a, b) => a + b, 0) / totalProducts;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const averageRating = ratings.reduce((a, b) => a + b, 0) / totalProducts;
 
  return {
    totalProducts,
    averagePrice,
    highestPrice,
    lowestPrice,
    totalStock,
    averageRating,
  };
}
 
console.log(getStatistics(nestedProducts));
 
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}
 
console.log(linearSearch([5, 3, 8, 1], 8)); 
 
function linearSearchProductById(products, id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) return i; 
  }
  return -1;
}
 
console.log(linearSearchProductById(nestedProducts, 2));
 
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
 
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
 
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
 
  return -1;
}
 
console.log(binarySearch([1, 3, 5, 8, 10, 20], 10)); 
 
function binarySearchByPrice(sortedProducts, targetPrice) {
  let left = 0;
  let right = sortedProducts.length - 1;
 
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
 
    if (sortedProducts[mid].price === targetPrice) return sortedProducts[mid];
    if (sortedProducts[mid].price < targetPrice) left = mid + 1;
    else right = mid - 1;
  }
 
  return null;
}
 
const sortedByPrice = [...nestedProducts].sort((a, b) => a.price - b.price);
console.log(binarySearchByPrice(sortedByPrice, 800));
 
const numbers = [5, 3, 8, 1];
console.log([...numbers].sort((a, b) => a - b)); 
console.log([...numbers].sort((a, b) => b - a)); 
 
console.log(
  [...nestedProducts].sort((a, b) => a.price - b.price).map((p) => p.title)
);
 
function bubbleSort(numbers) {
  const arr = [...numbers];
 
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
 
  return arr;
}
 
console.log(bubbleSort([5, 3, 8, 1]));
 
function sortProducts(products, sortBy) {
  const arr = [...products]; 
 
  switch (sortBy) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating);
    case "title":
      return arr.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return arr;
  }
}
 
console.log(sortProducts(nestedProducts, "price-desc").map((p) => p.title));

// Sabtu, 12-09-2026

//  Bagian 9 — Grouping & Aggregat
function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}

const grouped = groupByCategory(nestedProducts);
console.log(grouped);

function summarizeCategoryCounts(products) {
  const grouped = groupByCategory(products);
  return Object.entries(grouped).map(([category, items]) => ({
    category,
    total: items.length,
  }));
}

console.table(summarizeCategoryCounts(nestedProducts));

//  Bagian 10 — Frequency Counting 
function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

const categoryFreq = countFrequency(nestedProducts.map((p) => p.category));
console.log("categoryFreq:", categoryFreq);

const allTags = nestedProducts.flatMap((p) => p.tags);
const tagFreq = countFrequency(allTags);
console.log("tagFreq:", tagFreq);

const roundedRatings = nestedProducts.map((p) => Math.round(p.rating));
const ratingFreq = countFrequency(roundedRatings);
console.log("ratingFreq:", ratingFreq);

const brandFreq = countFrequency(nestedProducts.map((p) => p.brand));
console.log("brandFreq:", brandFreq);

//  Bagian 11 — Set 
const uniqueCategories = [...new Set(nestedProducts.map((p) => p.category))];
console.log("uniqueCategories:", uniqueCategories);

const uniqueBrands = [...new Set(nestedProducts.map((p) => p.brand))];
console.log("uniqueBrands:", uniqueBrands);

const uniqueTags = [...new Set(nestedProducts.flatMap((p) => p.tags))];
console.log("uniqueTags:", uniqueTags);

//  Bagian 12 — Map (Struktur Data) 
function buildProductLookup(products) {
  const map = new Map();
  for (const product of products) {
    map.set(product.id, product);
  }
  return map;
}

const productLookup = buildProductLookup(nestedProducts);

console.log("get(2):", productLookup.get(2));      // ada isinya
console.log("get(10):", productLookup.get(10));    // undefined, id 10 tidak ada
console.log("has(10):", productLookup.has(10));    // false
console.log("size:", productLookup.size);          // 3

for (const [id, product] of productLookup) {
  console.log(id, product.title);
}

//  Bagian 13 — Stack (LIFO) 
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

const searchHistory = new Stack();

function performSearch(keyword) {
  searchHistory.push(keyword);
  console.log(`Mencari: ${keyword}`);
}

function undoSearch() {
  if (searchHistory.isEmpty()) {
    console.log("Tidak ada riwayat pencarian.");
    return null;
  }
  const lastSearch = searchHistory.pop();
  const previousSearch = searchHistory.peek();
  console.log(
    `Undo dari "${lastSearch}" kembali ke "${previousSearch ?? "(kosong)"}"`
  );
  return previousSearch;
}

performSearch("laptop");
performSearch("phone");
performSearch("tablet");

undoSearch();

// Minggu, 13-09-2026

// Bagian 14 — Queue (FIFO) 
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

const requestQueue = new Queue();

function addRequest(requestName) {
  requestQueue.enqueue(requestName);
  console.log(`Request masuk: ${requestName}`);
}

function processNextRequest() {
  if (requestQueue.isEmpty()) {
    console.log("Tidak ada request yang menunggu.");
    return null;
  }
  const current = requestQueue.dequeue();
  console.log(`Memproses: ${current}`);
  return current;
}

addRequest("Get Products");
addRequest("Get Reviews");
addRequest("Get Categories");

processNextRequest(); 
processNextRequest();
console.log("Sisa antrean:", requestQueue.items);

// ===== Bagian 15 — Recursion =====

function countdown(n) {
  if (n <= 0) {
    console.log("Selesai");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5);

const categoryTree = [
  {
    name: "Electronics",
    children: [
      {
        name: "Computers",
        children: [
          { name: "Laptop", children: [] },
          { name: "Desktop", children: [] },
        ],
      },
      { name: "Phone", children: [] },
    ],
  },
  {
    name: "Audio",
    children: [{ name: "Headphones", children: [] }],
  },
];

function printCategories(categories, depth = 0) {
  for (const category of categories) {
    console.log(" ".repeat(depth * 2) + category.name);
    if (category.children.length > 0) {
      printCategories(category.children, depth + 1);
    }
  }
}

printCategories(categoryTree);

// Bagian 16 — Algorithm Complexity (Big-O secara Praktis) 

function linearSearchCountSteps(array, target) {
  let steps = 0;
  for (let i = 0; i < array.length; i++) {
    steps++;
    if (array[i] === target) return { index: i, steps };
  }
  return { index: -1, steps };
}

function binarySearchCountSteps(sortedArray, target) {
  let steps = 0;
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === target) return { index: mid, steps };
    if (sortedArray[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return { index: -1, steps };
}

const bigSortedArray = Array.from({ length: 10000 }, (_, i) => i + 1);
const target = 9999;

console.log("Linear search:", linearSearchCountSteps(bigSortedArray, target));
console.log("Binary search:", binarySearchCountSteps(bigSortedArray, target));

function generateLargeDataset(size) {
  const dataset = [];
  for (let i = 1; i <= size; i++) {
    dataset.push({
      id: i,
      title: `Product ${i}`,
      category: `category-${i % 20}`,
      price: Math.floor(Math.random() * 1000),
    });
  }
  return dataset;
}

const largeDataset = generateLargeDataset(1000);

function countSameCategoryPairsNested(products) {
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
      if (products[i].category === products[j].category) count++;
    }
  }
  return count;
}

function countSameCategoryPairsGrouped(products) {
  const groups = {};
  for (const p of products) {
    if (!groups[p.category]) groups[p.category] = 0;
    groups[p.category]++;
  }
  
  let count = 0;
  for (const key in groups) {
    const n = groups[key];
    count += (n * (n - 1)) / 2;
  }
  return count;
}

const startNested = performance.now();
const resultNested = countSameCategoryPairsNested(largeDataset);
const endNested = performance.now();

const startGrouped = performance.now();
const resultGrouped = countSameCategoryPairsGrouped(largeDataset);
const endGrouped = performance.now();

console.log(`Nested loop: ${resultNested} pasangan, waktu: ${(endNested - startNested).toFixed(3)} ms`);
console.log(`Grouped: ${resultGrouped} pasangan, waktu: ${(endGrouped - startGrouped).toFixed(3)} ms`);

//  Bagian 17 — DOM Manipulation 
function renderProducts(products) {
  const container = document.querySelector("#product-list");
  container.innerHTML = "";
  for (const product of products) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <p>Harga: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    container.append(card);
  }
}

// Senin, 14-09-2026

//  Bagian 18 — State Management 
const state = {
  products: nestedProducts,
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "idle",
};

function render() {
  let result = [...state.products];

  if (state.search) {
    const keyword = state.search.toLowerCase();
    result = result.filter((p) => p.title.toLowerCase().includes(keyword));
  }

  if (state.category !== "all") {
    result = result.filter((p) => p.category === state.category);
  }

  switch (state.sortBy) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "title":
      result.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  state.status = result.length === 0 ? "empty" : "success";

  renderProducts(result);
}

render();

//  Bagian 19 — Event Handling 

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

const categorySelect = document.querySelector("#category-select");
categorySelect.addEventListener("change", (e) => {
  state.category = e.target.value;
  render();
});

const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  render();
});

// Bagian 20 — Modern JavaScript (ES6+) 

const label = (product) => `${product.title} - $${product.price}`;
console.log(label(nestedProducts[0]));

const getTitle = (product) => product.title;
console.log(getTitle(nestedProducts[0]));

const { title, price, category } = nestedProducts[0];
console.log(title, price, category);

const [firstProduct, ...restProducts] = nestedProducts;
console.log(firstProduct.title, restProducts.length);

const updatedProduct = { ...nestedProducts[0], stock: 20 };
console.log(updatedProduct);

const newProduct = {
  id: 4,
  title: "Tablet",
  brand: "Apple",
  price: 400,
  rating: 4.1,
  stock: 8,
  category: "tablets",
  tags: ["mobile"],
};
const merged = [...nestedProducts, newProduct];
console.log("Total setelah merge:", merged.length);

// Rest parameter
function sumPrices(...prices) {
  return prices.reduce((a, b) => a + b, 0);
}
console.log(sumPrices(100, 200, 300));

const width = nestedProducts[0].dimensions?.width ?? "Tidak diketahui";
console.log(width);

const noDimensions = { title: "Test" };
const heightSafe = noDimensions.dimensions?.height ?? "Tidak diketahui";
console.log(heightSafe); 

function filterByCategory(products, category = "all") {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
console.log(filterByCategory(nestedProducts, "phones"));

function getStatistics(products) {
  const totalProducts = products.length;
  const prices = products.map(({ price }) => price);
  const ratings = products.map(({ rating }) => rating ?? 0);

  const averagePrice = prices.reduce((a, b) => a + b, 0) / totalProducts;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const totalStock = products.reduce((sum, { stock }) => sum + stock, 0);
  const averageRating = ratings.reduce((a, b) => a + b, 0) / totalProducts;

  return { totalProducts, averagePrice, highestPrice, lowestPrice, totalStock, averageRating };
}

console.log(getStatistics(nestedProducts));