import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<p>404 - Página no encontrada</p>} />
        </Routes>
      </div>
    </>
  );
}

export default App;





