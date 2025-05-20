import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ArtisansPage from './pages/ArtisansPage';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/productos" element={<ProductsPage />} />
          {/* ...otras rutas */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
