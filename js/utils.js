export function formatCurrency(number) {
  return `$${number.toFixed(2)}`;
}

export function formatRating(rating) {
  return rating.toFixed(1);
}

export function debounce(func, delay = 300) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export function isEmpty(str) {
  return !str || str.trim().length === 0;
}

export function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}