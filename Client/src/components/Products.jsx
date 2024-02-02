import React,{useEffect, useState} from 'react'
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
function Products(props) {
    const {removeFromDom, products , setProducts} = props;
    
    // get the products from our route 'api/people'
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=> {
            console.log(res)
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err=>{console.log(err)})
    },[])

    const deleteItem = (id) =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then((res) =>{
            removeFromDom(id)
        })
        .catch(err => console.log(err))
    }
  return (
    <>
                 <h1>All Products</h1>
    {
        products.map((product,index) =>{
            return(
                <>
                    <p key={index}>{product.title}</p>
                    <Link to={`/products/${product._id}`}>{product.title}'s details</Link>|
                    <Link to={`/products/edit/${product._id}`}>Edit</Link>|
                    <button onClick={(e) => deleteItem(product._id)}> Delete</button>

                </>
                )
        })

    }
    </>
  )
}

export default Products