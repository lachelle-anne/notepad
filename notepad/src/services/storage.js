export function getItem(key, defaultValue) {
  let value = localStorage.getItem(key);
  if (value) {
    value = JSON.parse(value);
    return value;
  }
  return defaultValue;
}

export function setItem(key, value) {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
}

export function removeItem(key) {
  localStorage.removeItem(key);
}
