import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Shoping</div>
         
          {/* pages */}
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300 no-underline">Home</Link>
          <Link to="/products" className="text-white hover:text-gray-300 no-underline">Products</Link>
        </div>
      </div>
    </nav>
  );
}
