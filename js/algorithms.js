export function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

export function binarySearch(arr, target) {
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

export function bubbleSort(numbers) {
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

export function sortProducts(products, sortBy) {
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

export function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}

export function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

export function buildProductLookup(products) {
  const map = new Map();
  for (const product of products) {
    map.set(product.id, product);
  }
  return map;
}

export function getStatistics(products) {
  const totalProducts = products.length;
  const prices = products.map((p) => p.price);
  const ratings = products.map((p) => p.rating);

  const averagePrice = prices.reduce((a, b) => a + b, 0) / totalProducts;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const averageRating = ratings.reduce((a, b) => a + b, 0) / totalProducts;

  return { totalProducts, averagePrice, highestPrice, lowestPrice, totalStock, averageRating };
}

export function getCategoryAnalytics(products) {
  const grouped = groupByCategory(products);

  return Object.entries(grouped).map(([category, items]) => {
    const prices = items.map((p) => p.price);
    const ratings = items.map((p) => p.rating);
    return {
      category,
      totalProducts: items.length,
      averagePrice: prices.reduce((a, b) => a + b, 0) / items.length,
      averageRating: ratings.reduce((a, b) => a + b, 0) / items.length,
      totalStock: items.reduce((sum, p) => sum + p.stock, 0),
    };
  });
}

export function exactSearch(products, title) {
  return products.filter((p) => p.title === title);
}

export function partialSearch(products, keyword) {
  return products.filter((p) => p.title.includes(keyword));
}

export function caseInsensitiveSearch(products, keyword) {
  const lower = keyword.toLowerCase();
  return products.filter((p) => p.title.toLowerCase().includes(lower));
}