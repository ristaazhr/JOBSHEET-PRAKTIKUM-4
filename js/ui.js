import { formatCurrency, formatRating, capitalize } from "./utils.js";

export function renderProducts(products) {
  const container = document.querySelector("#product-list");
  container.innerHTML = "";
  for (const product of products) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>${capitalize(product.category)}</p>
      <p>Harga: ${formatCurrency(product.price)}</p>
      <p>Rating: ${formatRating(product.rating)}</p>
    `;
    container.append(card);
  }
}

export function renderStatistics(stats) {
  const container = document.querySelector("#statistics");
  if (!container) return;
  container.innerHTML = `
    <p>Total Produk: ${stats.totalProducts}</p>
    <p>Rata-rata Harga: ${formatCurrency(stats.averagePrice)}</p>
    <p>Total Stock: ${stats.totalStock}</p>
    <p>Rata-rata Rating: ${formatRating(stats.averageRating)}</p>
  `;
}

export function renderStatus(status) {
  const container = document.querySelector("#product-list");
  if (status === "loading") {
    container.innerHTML = "<p>Memuat data...</p>";
  } else if (status === "error") {
    container.innerHTML = "<p>Gagal memuat data. Silakan coba lagi.</p>";
  } else if (status === "empty") {
    container.innerHTML = "<p>Produk tidak ditemukan.</p>";
  }
}

export function renderCategoryOptions(products) {
  const select = document.querySelector("#category-select");
  const uniqueCategories = [...new Set(products.map((p) => p.category))];

  select.innerHTML = `<option value="all">Semua Kategori</option>`;

  for (const category of uniqueCategories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = capitalize(category);
    select.append(option);
  }
}

export function render(state) {
  if (state.status === "loading" || state.status === "error") {
    renderStatus(state.status);
    return;
  }

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

  if (state.status === "empty") {
    renderStatus("empty");
  } else {
    renderProducts(result);
  }
}