import { useState } from 'react';

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(1);
  const increment = () => setCount((c) => Math.min(product?.stock ?? 1, c + 1));
  const decrement = () => setCount((c) => Math.max(1, c - 1));

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'start' }}>
      <img src={product.image} alt={product.title} style={{ width: '100%', borderRadius: 8, objectFit: 'cover' }} />
      <div>
        <h2 style={{ marginTop: 0 }}>{product.title}</h2>
        <p style={{ margin: '0.5rem 0' }}>Precio: ${product.price}</p>
        <p style={{ margin: '0.5rem 0' }}>Stock: {product.stock}</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
          <button style={{ marginLeft: '0.75rem' }}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;


