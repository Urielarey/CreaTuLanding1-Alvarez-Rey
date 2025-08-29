const Item = ({ product, onSelect }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: '0.75rem' }}>
      <img src={product.image} alt={product.title} width={220} height={220} style={{ objectFit: 'cover', width: '100%', height: 180, borderRadius: 6 }} />
      <h3 style={{ margin: '0.5rem 0 0.25rem' }}>{product.title}</h3>
      <p style={{ margin: 0 }}>${product.price}</p>
      <button style={{ marginTop: '0.5rem' }} onClick={() => onSelect(product.id)}>Ver detalle</button>
    </div>
  );
};

export default Item;


