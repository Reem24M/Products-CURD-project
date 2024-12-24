import { Link } from "react-router-dom"
import  './sidebar.css'
export default function Sidebar() {
  return (
    <div className="bg-green-300 pt-3 sidebar">
        <h1>Sidebar</h1>
        <ul>
          <Link to="/products">All products</Link> <br />
          <Link to="/products">Products</Link>
        </ul>
    </div>
  )
}
