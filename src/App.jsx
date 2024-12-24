import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/sidebar";
import Home from "./pages/home";
import Products from "./pages/products";
import Navbar from "./components/nav";
import Addproducts from "./pages/addproducts";
import ProductDestails from "./pages/productDetails";
export default function App() {
  return (
    <Router>
      <div className="row">
        <Navbar />
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route exa path="/" element={<Home />} />
            <Route  path="/products" element={<Products />} />
            <Route path="/products/add"element={<Addproducts />} />
            <Route  path="/product/:id" element={<ProductDestails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
