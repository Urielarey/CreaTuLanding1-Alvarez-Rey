import { useState } from 'react';

const ItemCount = ({ initial = 1, stock = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  const increment = () => setCount((c) => Math.min(stock, c + 1));
  const decrement = () => setCount((c) => Math.max(1, c - 1));
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd?.(count)} disabled={stock === 0} style={{ marginLeft: '0.75rem' }}>Agregar</button>
    </div>
  );
};

export default ItemCount;


