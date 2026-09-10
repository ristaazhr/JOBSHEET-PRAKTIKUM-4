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
