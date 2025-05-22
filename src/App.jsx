import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from  './components/footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ArtisansPage from './pages/ArtisansPage';
import CartPage from './pages/CartPage'; // <-- Importa la página
import ContactPage from './pages/Contactpage';
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
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/contacto" element={<ContactPage />} /> {/* <-- Agrega esta línea */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
