import Header from "./Components/Header.jsx";
import ProductsListingPage from "./Components/ProductsListingPage.jsx";
import "./Components/App.css";
import BottomNav from "./Components/Footer.jsx"
import {initialize} from './Components/MockDataRepository.jsx'
import { Routes, Route } from 'react-router-dom';
import ProductDetailsPage from "./Components/ProductDetailsPage.jsx";

function App() {
  initialize();
  return (
      <>
          <Header text="Market"/>
          <Routes>
              <Route path="/" element={<ProductsListingPage />} />
              <Route path="/home" element={<ProductsListingPage />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Routes>
      </>
  )
}

export default App
