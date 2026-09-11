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
 
console.log(binarySearch([1, 3, 5, 8, 10, 20], 10)); // index 4
 
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
console.log([...numbers].sort((a, b) => a - b)); // ascending
console.log([...numbers].sort((a, b) => b - a)); // descending
 
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