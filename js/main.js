import { fetchProducts } from "./api.js";
import { getStatistics } from "./algorithms.js";
import { state } from "./state.js";
import { render, renderStatistics, renderCategoryOptions } from "./ui.js";
import { debounce } from "./utils.js";

async function init() {
  state.status = "loading";
  render(state);

  try {
    const products = await fetchProducts();
    state.products = products;
    state.status = "success";
    renderCategoryOptions(products);
    render(state);
    renderStatistics(getStatistics(products));
  } catch (error) {
    state.status = "error";
    render(state);
    console.error("Gagal memuat produk:", error);
  }
}

init();

const searchInput = document.querySelector("#search-input");
const debouncedSearch = debounce((value) => {
  state.search = value;
  render(state);
}, 300);

searchInput.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});

const categorySelect = document.querySelector("#category-select");
categorySelect.addEventListener("change", (e) => {
  state.category = e.target.value;
  render(state);
});

const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  render(state);
});