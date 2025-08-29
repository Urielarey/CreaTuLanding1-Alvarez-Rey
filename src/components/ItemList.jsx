const ItemList = ({ products, onSelect }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
      {products.map((p) => (
        <div key={p.id} style={{ border: '1px solid #ddd', borderRadius: 8, padding: '0.75rem' }}>
          <img src={p.image} alt={p.title} width={200} height={200} style={{ objectFit: 'cover', width: '100%', height: 160, borderRadius: 6 }} />
          <h3 style={{ margin: '0.5rem 0 0.25rem' }}>{p.title}</h3>
          <p style={{ margin: 0 }}>${p.price}</p>
          <button style={{ marginTop: '0.5rem' }} onClick={() => onSelect(p.id)}>Ver detalle</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;


