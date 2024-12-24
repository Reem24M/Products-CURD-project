import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Addproducts() {
  const [title,settitle]=useState('')
  const [price,setprice]=useState('')
  function sub(e){
    e.preventDefault();
    axios.post("http://localhost:3001/posts",{
      // when the nake of val that i take from form it the same name as it in json file we can easy use this instead of title:title, price:price
      title,
      price
    }).then(res=>console.log(res))
  }
  return (
    <div>
      <Form onSubmit={sub}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="title of product"  onChange={((e)=>settitle(e.target.value))}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="price $" onChange={((e)=>setprice(e.target.value))} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
