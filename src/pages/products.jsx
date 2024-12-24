import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Products() {
  const [posts, setPosts] = useState([]);
  // delete the product
  function deleteproduct(product)
  {
    Swal.fire({
      title:`Are you Sure to delete ${product.title}?`,
      showCancelButton:true,

    }).then(data=>{
      if(data.isConfirmed)
      {
        fetch(`http://localhost:3001/posts/${product.id}`, {
          method: "DELETE",
        })
         .then((res) => res.json())
         .then((res) => {
            console.log(res);
            fetchData();
          });
      }
    })
  }
  function fetchData() {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((res) => {
        // res=res.flat();
        console.log(res)
        setPosts(res)
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products page</h1>
      <Link to="/products/add" className="btn btn-success my-5">
        Add new product
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
              <tr key={post.id} >
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{post.price}</td>
                <td>
                <Link to={`/product/${post.id}`} className="btn btn-primary"> View </Link>
                  <Button variant="danger" onClick={()=>deleteproduct(post)}>Delete</Button>
                  <Button variant="warning">Edit</Button>
                </td>
              </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
