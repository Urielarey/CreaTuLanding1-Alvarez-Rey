import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../data/products';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductById(itemId)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p>Cargando detalle...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;


