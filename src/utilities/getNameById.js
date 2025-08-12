export function getNameById(items, id) {
  const item = items.find(item => item.id === id);
  return item ? item.name : null;
}