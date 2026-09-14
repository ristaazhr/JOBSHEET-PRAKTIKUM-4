// js/ui.js

export function renderProducts(products) {
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

export function render(state) {
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