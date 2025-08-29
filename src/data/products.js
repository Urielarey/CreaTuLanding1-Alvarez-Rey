export const PRODUCTS = [
  { id: '1', title: 'Mochila Urbana', price: 25000, category: 'mochilas', stock: 10, image: '/assets/img/vr-bags.png' },
  { id: '2', title: 'Cartera Elegante', price: 38000, category: 'carteras', stock: 6, image: '/assets/img/vr-bags.png' },
  { id: '3', title: 'Riñonera Sport', price: 18000, category: 'riñoneras', stock: 14, image: '/assets/img/vr-bags.png' },
  { id: '4', title: 'Mochila Técnica', price: 42000, category: 'mochilas', stock: 4, image: '/assets/img/vr-bags.png' }
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchProducts(categoryId) {
  await delay(500);
  if (!categoryId) return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === categoryId);
}

export async function fetchProductById(productId) {
  await delay(500);
  return PRODUCTS.find((p) => p.id === productId) || null;
}


