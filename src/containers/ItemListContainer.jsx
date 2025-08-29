import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProducts } from '../data/products';
import ItemList from '../components/ItemList';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts(categoryId)
      .then(setProducts)
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <ItemList products={products} onSelect={(id) => navigate(`/item/${id}`)} />
    </div>
  );
};

export default ItemListContainer;


