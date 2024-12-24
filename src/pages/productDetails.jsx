import { useParams } from "react-router"
import { useEffect,useState } from "react";
export default function ProductDestails() {
    const [post,setpost]=useState({});
    
   const {id}=useParams();
   console.log(IdleDeadline)
   function fetchpost(){
    fetch(`http://localhost:3001/posts/${id}`)
    .then(res=>res.json()).then(res=>{
        setpost(res)})
   }
   useEffect(()=>{
    fetchpost()
  },[])
  return (
    <div>
      <h1>{post.title}</h1>
      <h1>{post.price}</h1>
      <h1>{post.category}</h1>
      <img src={post.image} alt="img" />
      <p>{[post.description]}</p>
    </div>
  )
}
