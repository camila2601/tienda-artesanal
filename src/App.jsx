import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from  './components/footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ArtisansPage from './pages/ArtisansPage';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/artesanos" element={<ArtisansPage />} />
          {/* Puedes eliminar esta línea si no usas /Inicio */}
          {/* <Route path="/Inicio" element={<HomePage />} /> */}
          {/* ...otras rutas */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
