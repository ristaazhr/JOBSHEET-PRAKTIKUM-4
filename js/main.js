// js/main.js

import { nestedProducts } from "./data.js";
import { groupByCategory } from "./algorithms.js";
import { state } from "./state.js";
import { render } from "./ui.js";

state.products = nestedProducts;

render(state);

console.log("Grouped:", groupByCategory(state.products));

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  render(state);
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