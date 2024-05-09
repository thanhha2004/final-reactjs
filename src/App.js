import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import ShopPage from './page/ShopPage';
import ProductDetailPage from './page/ProductDetailPage';
import CartPage from './page/CartPage';
import LoginPage from "./page/LoginPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/detail/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>404 Not Found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
